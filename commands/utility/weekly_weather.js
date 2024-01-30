const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('weekly_weather')
		.setDescription('Weekly weather check.')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .setDMPermission(false)
    .addStringOption(option => 
      option.setName('option')
        .setDescription('start / stop')
        .setRequired(true)
        .addChoices(
          { name: 'Start', value: 'start_interval' },
          { name: 'End', value: 'end_interval' },
        )),
	async execute(interaction) {
		const option = interaction.options.getString('option');

    if (option == 'start_interval') {
      const targetDay = 5;
      const targetHour = 8;




    }
    






	},
};