const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const row1 = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('港島東')
          .setLabel('港島東（天后以東）')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('港島南區')
          .setLabel('港島南區')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('港島西')
          .setLabel('港島西（銅鑼灣以西）')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('大西北')
          .setLabel('大西北（屯元天）')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('將軍澳')
          .setLabel('將軍澳')
          .setStyle(ButtonStyle.Primary)
      )

const row2 = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('上水粉領')
          .setLabel('上水粉領（北區）')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('明日大愚')
          .setLabel('明日大愚')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('貨櫃碼頭')
          .setLabel('貨櫃碼頭（青衣荃灣葵涌）')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('油尖旺')
          .setLabel('油尖旺（西九龍文化區）')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('美孚至深水埗')
          .setLabel('美孚至深水埗')
          .setStyle(ButtonStyle.Primary)
        );

const row3 = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('紅磡土瓜灣')
          .setLabel('紅磡／土瓜灣')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('樂富黃大仙慈雲山')
          .setLabel('樂富／黃大仙／慈雲山')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('觀塘九龍灣')
          .setLabel('觀塘／九龍灣')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('沙田馬鞍山')
          .setLabel('沙田馬鞍山')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('大埔馬料水')
          .setLabel('大埔馬料水')
          .setStyle(ButtonStyle.Primary)
        );

const row4 = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('UK幫')
          .setLabel('UK幫')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('JP幫')
          .setLabel('JP幫')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('台灣幫')
          .setLabel('台灣幫')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('澳洲幫')
          .setLabel('澳洲幫')
          .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
          .setCustomId('ratherNotSay')
          .setLabel('Rather Not Say')
          .setStyle(ButtonStyle.Primary)
        );

const row5 = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('back')
          .setLabel('Back')
          .setStyle(ButtonStyle.Danger)
        );

module.exports.butt5 = [row1, row2, row3, row4, row5];

module.exports.emb5 = {
  title: '邊區最近你？',
	description: 'Which location are you closest to?',
  color: 0xFFFFFF,
  footer: {
		text: 'Question (4/4)'
	}
};
