const { data } = require("./supporting files/combine-embeds.js");
const { addRoles } = require("./supporting files/addroles.js");
const { ComponentType } = require("discord.js");

module.exports.survey = (interaction) => {
  if (interaction.customId !== "begin") return;

  if (interaction.member.roles.cache.has("934790971131039745")) {
    interaction.reply({
      ephemeral: true,
      embeds: [
        {
          title: "Error",
          description: "你已解鎖所有頻道",
          color: 0xffffff,
        },
      ],
    });
    return;
  }

  let trigger = true;
  if (trigger == true) {
    trigger = false;
    interaction.reply({
      ephemeral: true,
      embeds: [data[0][1]],
      components: [data[0][0]],
    });
  } else {
    interaction.reply({ ephemeral: true, content: "Survey already opened!" });
    return;
  }

  const collector = interaction.channel.createMessageComponentCollector({
    componentType: ComponentType.Button,
    time: 60000,
  });

  let count = 0;
  let list = [];
  collector.on("collect", async (i) => {
    if (!i.isButton()) return;

    switch (i.customId) {
      case "skateBeginner":
      case "skateIntermediate":
      case "skateAdvanced":
        list.push(i.customId);
        count++;
        i.update({
          ephemeral: true,
          embeds: [data[count][1]],
          components: [data[count][0]],
        });
        break;
      case "snowBeginner":
      case "snowIntermediate":
      case "snowAdvanced":
        list.push(i.customId);
        count++;
        i.update({
          ephemeral: true,
          embeds: [data[count][1]],
          components: [data[count][0]],
        });
        break;
      case "surfBeginner":
      case "surfIntermediate":
      case "surfAdvanced":
        list.push(i.customId);
        count++;
        i.update({
          ephemeral: true,
          embeds: [data[count][1]],
          components: data[count][0],
        });
        break;
      case "港島東":
      case "港島南區":
      case "港島西":
      case "大西北":
      case "將軍澳":
      case "上水粉領":
      case "明日大愚":
      case "貨櫃碼頭":
      case "油尖旺":
      case "美孚至深水埗":
      case "紅磡土瓜灣":
      case "樂富黃大仙慈雲山":
      case "觀塘九龍灣":
      case "沙田馬鞍山":
      case "大埔馬料水":
      case "UK幫":
      case "JP幫":
      case "台灣幫":
      case "澳洲幫":
      case "ratherNotSay":
        list.push(i.customId);
        count++;
        i.update({
          ephemeral: true,
          embeds: [data[count][1](list)],
          components: [data[count][0]],
        });
        break;
      case "back":
        count--;
        i.update({
          ephemeral: true,
          embeds: [data[count][1]],
          components: [data[count][0]],
        });
        list.pop();
        break;
      case "back2":
        count--;
        i.update({
          ephemeral: true,
          embeds: [data[count][1]],
          components: data[count][0],
        });
        list.pop();
        break;
      case "confirm":
        addRoles(list, interaction);
        count++;
        i.update({ ephemeral: true, embeds: [data[count]], components: [] });
        trigger = true;
        count = 0;
        list = [];
        finished = true;
        collector.stop();
        break;
    }
  });
  
  let finished = false;
  collector.on("end", (c) => {
    if (list.length !== 4 && finished == false) {
      interaction.editReply({
        ephemeral: true,
        components: [],
        embeds: [{ title: "Time's up! Please try again.", color: 0xffffff }],
      });
      count = 0;
      list = [];
      trigger = true;
    }

    if (list.length == 4 && count == 4 && finished == false) {
      interaction.editReply({
        ephemeral: true,
        components: [],
        embeds: [{ title: "Time's up! Please try again.", color: 0xffffff }],
      });
      count = 0;
      list = [];
      trigger = true;
    }

    if (finished == true) {
      finished = false;
    }
  });
};
