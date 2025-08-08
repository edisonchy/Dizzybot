const { EmbedBuilder, AttachmentBuilder } = require("discord.js");
const puppeteer = require("puppeteer");

let isRunning = false;

const windyScreenshot = async (client) => {
  if (isRunning) {
    console.log("[CRON] windyScreenshot is already running, skipping this run.");
    return;
  }
  isRunning = true;
  let browser;

  try {
    browser = await puppeteer.launch({
      args: [
        "--disable-setuid-sandbox",
        "--no-sandbox",
        "--single-process",
        "--no-zygote",
      ],
      executablePath: puppeteer.executablePath(),
    });

    const page = await browser.newPage();
    await page.goto(
      "https://www.windy.com/multimodel/22.443/114.028?waves,22.438,114.033,15",
      { waitUntil: "networkidle0", timeout: 60000 }
    );
    await page.setViewport({ width: 1080, height: 1024 });
    const screenshotBuffer = await page.screenshot();

    const file = new AttachmentBuilder(screenshotBuffer, {
      name: "weather_screenshot.png",
    });

    const embed = new EmbedBuilder()
      .setTitle("每週天氣預告")
      .setDescription("地點： 元朗")
      .setImage("attachment://weather_screenshot.png")
      .setColor(0xffffff);

    const channel = await client.channels.fetch(process.env.WEATHER_CHANNEL_ID);
    const thread = await channel.threads.fetch(process.env.WEATHER_THREAD_ID);
    await thread.send({ embeds: [embed], files: [file] });
  } catch (error) {
    console.error("Error sending weather screenshot:", error);
  } finally {
    if (browser) await browser.close().catch(() => {});
    isRunning = false;
  }
};

module.exports = { windyScreenshot };
