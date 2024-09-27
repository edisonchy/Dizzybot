const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require("discord.js");
const puppeteer = require("puppeteer");
const fs = require("fs");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("weather")
    .setDescription("Weather report from Windy.")
    .addStringOption((o) =>
      o
        .setName("location")
        .setDescription("Location for weather information.")
        .setRequired(true)
        .addChoices(
          { name: "Yuen Long", value: "yuen_long" },
          { name: "Fo Tan", value: "fo_tan" },
          { name: "Hong Kong Island", value: "hong_kong_island" }
        )
    ),

  async execute(interaction) {
    if (!interaction.guild) {
      await interaction.reply("吔蕉啦你🍌");
      return;
    }

    await interaction.deferReply();
    const location = interaction.options.getString("location");
    let url = "";
    let name = "";

    switch (location) {
      case "yuen_long":
        url =
          "https://www.windy.com/multimodel/22.443/114.028?waves,22.438,114.033,15";
        name = "元朗";
        break;
      case "fo_tan":
        url =
          "https://www.windy.com/multimodel/22.396/114.196?waves,22.393,114.195,16";
        name = "火炭";
        break;
      case "hong_kong_island":
        url =
          "https://www.windy.com/multimodel/22.283/114.157?waves,22.265,114.175,14";
        name = "香港島";
        break;
    }

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

    try {
      const page = await browser.newPage();

      // Navigate to the weather URL
      await page.goto(url, {
        waitUntil: "networkidle0",
        timeout: 60000,
      });

      // Set screen size
      await page.setViewport({ width: 1080, height: 1024 });

      // Take a screenshot
      const screenshotPath = "weather_screenshot.png";
      await page.screenshot({ path: screenshotPath });

      // Create attachment and embed
      const file = new AttachmentBuilder(screenshotPath, { name: "weather_screenshot.png" }); 

      const embed = new EmbedBuilder()
        .setTitle("Windy 天氣報告")
        .setDescription("地點：" + name)
        .setImage("attachment://weather_screenshot.png") 
        .setColor(0xffffff);

      // Send the embed with the attached image
      await interaction.editReply({ embeds: [embed], files: [file] });

      // Delete the screenshot file after sending
      fs.unlinkSync(screenshotPath);
    } catch (e) {
      console.error(e);
      await interaction.editReply("吔蕉啦你🍌");
    } finally {
      await browser.close();
    }
  },
};
