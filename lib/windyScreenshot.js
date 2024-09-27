const puppeteer = require("puppeteer");
const fs = require("fs");
const { EmbedBuilder, AttachmentBuilder } = require("discord.js");

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
    // Navigate to the weather URL
    await page.goto("https://www.windy.com/multimodel/22.443/114.028?waves,22.438,114.033,15", {
      waitUntil: "networkidle0",
      timeout: 60000,
    });

    // Set screen size
    await page.setViewport({ width: 1080, height: 1024 });

    // Take a screenshot
    const screenshotPath = "weather_screenshot.png";
    await page.screenshot({ path: screenshotPath });

    // Create attachment and embed
    const file = new AttachmentBuilder(screenshotPath, {
      name: "weather_screenshot.png",
    });

    const embed = new EmbedBuilder()
      .setTitle("每週天氣報告")
      .setDescription("地點： 元朗")
      .setImage("attachment://weather_screenshot.png")
      .setColor(0xffffff);

    // Send the embed with the attached image
    const channel = client.channels.cache.get("1201276567419097159");
    const thread = await channel.threads.cache.get("1201492402146390088");
    await thread.send({ embeds: [embed], files: [file] });

    // Delete the screenshot file after sending
    fs.unlinkSync(screenshotPath);

    await browser.close();
  } catch (error) {
    console.error("Error sending message in thread:", error);
  }
};

module.exports = { windyScreenshot };