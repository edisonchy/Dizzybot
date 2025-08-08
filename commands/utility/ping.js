const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction) {
    if (!interaction.guild) {
      await interaction.reply("吔蕉啦你🍌");
      return;
    }

    await interaction.reply("Ping你老味");
  },
};
