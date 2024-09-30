const {
  SlashCommandBuilder,
  EmbedBuilder,
  ButtonStyle,
  ActionRowBuilder,
  ButtonBuilder,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("welcome_button")
    .setDescription("Command to setup welcome page.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addChannelOption((o) =>
      o
        .setName("channel")
        .setDescription("Channel for message to be displayed.")
        .setRequired(true)
    ),
  async execute(interaction) {
    const channel = interaction.options.getChannel("channel");
    const Embed = new EmbedBuilder()
      .setTitle("歡迎加入SBDW 🤙🏿")
      .setFooter({ text: "JUMP START YOUR RIDE." })
      .setImage(
        "https://media.discordapp.net/attachments/1288529206317158490/1288529299254804542/Untitleddesign-ezgif.com-video-to-gif-converter_1.gif?ex=66f583ec&is=66f4326c&hm=1b29f335b9a8791480ef99fc1b70fc3a016f9bcbaac6dab10d795ba370541c72&="
      )
      .setColor(0xffffff);

    try {
      await channel.send({
        embeds: [Embed],
        components: [
          new ActionRowBuilder().setComponents(
            new ButtonBuilder()
              .setCustomId("greenButton")
              .setLabel("點擊進入")
              .setStyle(ButtonStyle.Success)
          ),
        ],
      });
      await interaction.reply({
        content: "Message posted in channel.",
        ephemeral: true,
      });
    } catch (e) {
      await interaction.reply({
        content: "Error! Fuck off retard.",
        ephemeral: true,
      });
      console.error(e);
    }
  },
};
