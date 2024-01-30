const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');


module.exports.butt4 = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('surfBeginner')
          .setLabel('初學者 / Beginner')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('surfIntermediate')
          .setLabel('中階級 / Intermediate')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('surfAdvanced')
          .setLabel('屈機 / Advanced')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('back')
          .setLabel('Back')
          .setStyle(ButtonStyle.Danger)
      );

module.exports.emb4 = {
  title: '滑浪經驗？ ',
	description: 'What is your level of surfing experience?',
  color: 0xFFFFFF,
  footer: {
		text: 'Question (3/4)'
	}
};

//add no experience