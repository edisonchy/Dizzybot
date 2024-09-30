const { EmbedBuilder, AttachmentBuilder } = require("discord.js");
const puppeteer = require("puppeteer");
const fs = require("fs");

const windyScreenshot = async (client) => {
  try {
    const browser = await puppeteer.launch({
      args: [
        "--disable-setuid-sandbox",
        "--no-sandbox",
        "--single-process",
        "--no-zygote",
      ],
      executablePath:
        process.env.NODE_ENV === "production"
          ? process.env.PUPPETEER_EXECUTABLE_PATH
          : puppeteer.executablePath(),
    });

    const page = await browser.newPage();
    await page.goto("https://www.windy.com/multimodel/22.443/114.028?waves,22.438,114.033,15", {
      waitUntil: "networkidle0",
      timeout: 60000, // set timeout to 60 seconds
    });

    await page.setViewport({ width: 1080, height: 1024 });

    const screenshotPath = "weather_screenshot.png";
    await page.screenshot({ path: screenshotPath });

    const file = new AttachmentBuilder(screenshotPath, {
      name: "weather_screenshot.png",
    });

    const embed = new EmbedBuilder()
      .setTitle("每週天氣預告")
      .setDescription("地點： 元朗")
      .setImage("attachment://weather_screenshot.png")
      .setColor(0xffffff);

    const channel = client.channels.cache.get("1089704546382651472");
    const thread = await channel.threads.cache.get("1089709495434870785");
    await thread.send({ embeds: [embed], files: [file] });

    fs.unlinkSync(screenshotPath);

    await browser.close();
  } catch (error) {
    console.error("Error sending message in thread:", error);
  }
};

module.exports = { windyScreenshot };
