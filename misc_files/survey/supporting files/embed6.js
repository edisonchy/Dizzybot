const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');


module.exports.butt6 = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('confirm')
          .setLabel('Confirm')
          .setStyle(ButtonStyle.Success),
        new ButtonBuilder()
          .setCustomId('back2')
          .setLabel('Back')
          .setStyle(ButtonStyle.Danger),
      );

module.exports.emb6 = (list) => {
  const newList = list.map(item => {
    if (item == 'skateBeginner' || item == 'surfBeginner' || item == 'snowBeginner') {
      return '初學者 / Beginner';
    } else if (item == 'skateIntermediate' || item == 'surfIntermediate' || item == 'snowIntermediate') {
      return '中階級 / Intermediate';
    } else if (item == 'snowAdvanced' || item == 'surfAdvanced' || item == 'skateAdvanced') {
      return '屈機 / Advanced';
    } else if (item == '港島東') {
      return '港島東（天后以東）';
    } else if (item == '港島西') {
      return '港島西（銅鑼灣以西）';
    } else if (item == '大西北') {
      return '大西北（屯元天）';
    } else if (item == '上水粉領') {
      return '上水粉領（北區）';
    } else if (item == '貨櫃碼頭') {
      return '貨櫃碼頭（青衣荃灣葵涌）';
    } else if (item == '油尖旺') {
      return '油尖旺（西九龍文化區）';
    } else if (item == '紅磡土瓜灣') {
      return '紅磡／土瓜灣';
    } else if (item == '觀塘九龍灣') {
      return '觀塘／九龍灣';
    } else if (item == '樂富黃大仙慈雲山') {
      return '樂富／黃大仙／慈雲山';
    } else if (item == 'ratherNotSay') {
      return 'Rather Not Say';
    } else {
      return item;
    }
    });

    return {
      title: '確認完成 / Review your responses',
      color: 0xFFFFFF,
      fields: [
    		{
    			name: '踩板經驗？',
    			value: newList[0],
    		},
        {
    			name: '滑雪經驗？',
    			value: newList[1],
    		},
        {
    			name: '滑浪經驗？ ',
    			value: newList[2],
    		},
        {
    			name: '邊區最近你？',
    			value: newList[3],
    		},

	    ],
    }

  
};
