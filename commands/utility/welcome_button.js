const { SlashCommandBuilder, EmbedBuilder, ButtonStyle, ActionRowBuilder, ButtonBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
    .setDMPermission(false)
		.setName('welcome_button')
		.setDescription('Set get ready button.')
    .addChannelOption(o => 
                      o.setName('channel')
                      .setDescription('Set get ready button in this channel.')
                      .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),                
	async execute(interaction) {
		const channel = interaction.options.getChannel('channel');
    const Embed = new EmbedBuilder()
    .setTitle('歡迎加入SBDW 🤙')
    .setDescription('請完成簡單自我介紹，解鎖所有頻道。\n\nComplete a brief self-introduction to get full access to the server.')
    .setColor(0xFFFFFF);
    
    try {
      await channel.send({
      embeds: ([Embed]),
      components: [
        new ActionRowBuilder().setComponents(
          new ButtonBuilder().setCustomId('begin').setLabel('Begin!').setStyle(ButtonStyle.Success),
        ),
      ],
    });
      await interaction.reply({content: 'Get ready button is setup.', ephemeral: true});
    } catch (e) {
      await interaction.reply({content: 'Error! Try again later.', ephemeral: true});
      console.error(e);
    }
  
	},
};