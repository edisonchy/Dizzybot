const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
    .setDMPermission(false)
		.setName('vote')
		.setDescription('vote with reactions.')
    .addStringOption( o =>
                        o.setName('row')
                        .setDescription('Display options.')
                        .setRequired(true)
                        .addChoices(
                          { name: '1', value: '1' },
                          { name: '2', value: '2' },
                          { name: '3', value: '3' },
                          { name: 'Nums', value: '4' },
                          { name: 'Remove', value: '5' }
                        )
                     ),
	async execute(interaction) {
    const optionNumber = interaction.options.getString('row');
    const previousMessages = await interaction.channel.messages.fetch({ limit: 10 });
    const filteredMessages = previousMessages.filter(i => i.author === interaction.user);
    
    if (filteredMessages.size === 0) {
      interaction.reply({ embeds: [{title: 'Error.', description: 'Previous 10 messages not sent by you.', color: 0xFFFFFF}], ephemeral: true });
      return;
    }
    
    const lastMessage = filteredMessages.first();
    
    if (optionNumber == '1') {
      interaction.reply({ embeds: [{title: 'Success.', color: 0xFFFFFF}], ephemeral: true });
      lastMessage.react('942465000742719508');
      lastMessage.react('942465000453308438');
      lastMessage.react('942465001619329064');
      lastMessage.react('942465000851779594');
      lastMessage.react('942465000876941393');
    }

    if (optionNumber == '2') {
      interaction.reply({ embeds: [{title: 'Success.', color: 0xFFFFFF}], ephemeral: true });
      lastMessage.react('942465000742719508');
      lastMessage.react('942465000453308438');
      lastMessage.react('942465001619329064');
      lastMessage.react('942465000851779594');
      lastMessage.react('942465000876941393');
      lastMessage.react('942494355845947503');
      lastMessage.react('942494355833376798');
      lastMessage.react('942494356496068659');
      lastMessage.react('942494355585921107');
      lastMessage.react('942494355871137943');
    }

    if (optionNumber == '3') {
      interaction.reply({ embeds: [{title: 'Success.', color: 0xFFFFFF}], ephemeral: true });
      lastMessage.react('942465000742719508');
      lastMessage.react('942465000453308438');
      lastMessage.react('942465001619329064');
      lastMessage.react('942465000851779594');
      lastMessage.react('942465000876941393');
      lastMessage.react('942494355845947503');
      lastMessage.react('942494355833376798');
      lastMessage.react('942494356496068659');
      lastMessage.react('942494355585921107');
      lastMessage.react('942494355871137943');
      lastMessage.react('947839607775559722');
      lastMessage.react('947839607897198642');
      lastMessage.react('947839607742038018');
      lastMessage.react('947839608572510209');
      lastMessage.react('947839607637155881');
    }

    if (optionNumber == '4') {
      interaction.reply({ embeds: [{title: 'Success.', color: 0xFFFFFF}], ephemeral: true });
      lastMessage.react('1️⃣');
      lastMessage.react('2️⃣');
      lastMessage.react('3️⃣');
      lastMessage.react('4️⃣');
      lastMessage.react('5️⃣');
      lastMessage.react('6️⃣');
      lastMessage.react('7️⃣');
      lastMessage.react('8️⃣');
      lastMessage.react('9️⃣');
      lastMessage.react('🔟');
    }
    
    if (optionNumber == '5') {
      lastMessage.reactions.removeAll();
      interaction.reply({ embeds: [{title: 'Removed.', color: 0xFFFFFF}], ephemeral: true });
    }
	},
};

