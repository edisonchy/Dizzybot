const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');


module.exports.butt3 = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('snowBeginner')
          .setLabel('初學者 / Beginner')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('snowIntermediate')
          .setLabel('中階級 / Intermediate')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('snowAdvanced')
          .setLabel('屈機 / Advanced')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('back')
          .setLabel('Back')
          .setStyle(ButtonStyle.Danger)
      );

module.exports.emb3 = {
  title: '滑雪經驗？',
	description: 'What is your level of snowboarding / skiing experience?',
  color: 0xFFFFFF,
  footer: {
		text: 'Question (2/4)'
	}
};
