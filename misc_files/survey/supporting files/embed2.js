const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');


module.exports.butt2 = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('skateBeginner')
          .setLabel('初學者 / Beginner')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('skateIntermediate')
          .setLabel('中階級 / Intermediate')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('skateAdvanced')
          .setLabel('屈機 / Advanced')
          .setStyle(ButtonStyle.Primary)
      );

module.exports.emb2 = {
	title: '踩板經驗？',
  discription: 'What is your level of skateboarding experience?',
  color: 0xFFFFFF,
  footer: {
		text: 'Question (1/4)'
	}
};


