const {
  SlashCommandBuilder,
  EmbedBuilder,
  AttachmentBuilder,
} = require("discord.js");
const puppeteer = require("puppeteer");

const LOCATIONS = {
  yuen_long: {
    name: "元朗",
    url: "https://www.windy.com/multimodel/22.443/114.028?waves,22.438,114.033,15",
  },
  fo_tan: {
    name: "火炭",
    url: "https://www.windy.com/multimodel/22.396/114.196?waves,22.393,114.195,16",
  },
  hong_kong_island: {
    name: "香港島",
    url: "https://www.windy.com/multimodel/22.283/114.157?waves,22.265,114.175,14",
  },
};

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
      await interaction.reply({ content: "吔蕉啦你🍌", ephemeral: true });
      return;
    }

    await interaction.deferReply();

    const locationKey = interaction.options.getString("location");
    const selected = LOCATIONS[locationKey];
    if (!selected) {
      await interaction.editReply("Invalid location.");
      return;
    }

    let browser;
    try {
      browser = await puppeteer.launch({
        args: [
          "--disable-setuid-sandbox",
          "--no-sandbox",
          "--single-process",
          "--no-zygote",
        ],
      });

      const page = await browser.newPage();
      // Set viewport before navigation for consistency
      await page.setViewport({ width: 1080, height: 1024 });

      await page.goto(selected.url, {
        waitUntil: "networkidle0",
        timeout: 60000,
      });

      // Take screenshot directly to buffer (no temp files)
      const base64 = await page.screenshot({ type: "png", encoding: "base64" });
      const pngBuffer = Buffer.from(base64, "base64");

      const embed = new EmbedBuilder()
        .setTitle("Windy 天氣報告")
        .setDescription(`地點：${selected.name}`)
        .setImage("attachment://weather.png")
        .setColor(0xffffff);

      await interaction.editReply({
        embeds: [embed],
        files: [{ attachment: pngBuffer, name: "weather.png" }],
      });
    } catch (e) {
      console.error("[/weather] error:", e);
      if (interaction.deferred || interaction.replied) {
        await interaction.editReply("吔蕉啦你🍌");
      } else {
        await interaction.reply({ content: "吔蕉啦你🍌", ephemeral: true });
      }
    } finally {
      if (browser) {
        try {
          await browser.close();
        } catch (_) {}
      }
    }
  },
};
