const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

let intId = undefined;
let timId = undefined;
let triggered = false;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("weekly_weather")
    .setDescription("Weekly weather check.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .setDMPermission(false)
    .addStringOption((option) =>
      option
        .setName("option")
        .setDescription("start / stop")
        .setRequired(true)
        .addChoices(
          { name: "start", value: "start_interval" },
          { name: "end", value: "end_interval" }
        )
    ),
  async execute(interaction) {
    async function fetchData(interaction) {
      // add interaction to parameter
      try {
        const response = await fetch(
          "https://api.weatherapi.com/v1/forecast.json?key=0e6889038b7b4478871224718242901&q=Yuen+Long&lang=zh_tw&days=3&aqi=no&alerts=no&tides=no"
        );

        if (!response.ok) {
          throw new Error("failed to fetch resource");
        }

        const data = await response.json();
        dataList = data.forecast.forecastday.slice(-2);

        const list = [
          {
            date: dataList[0].date,
            "avg temp": dataList[0].day.avgtemp_c,
            "max temp": dataList[0].day.maxtemp_c,
            "min temp": dataList[0].day.mintemp_c,
            sunrise: dataList[0].astro.sunrise,
            sunset: dataList[0].astro.sunset,
            "chance of rain": dataList[0].day.daily_chance_of_rain,
            condition: dataList[0].day.condition.text,
          },
          {
            date: dataList[1].date,
            "avg temp": dataList[1].day.avgtemp_c,
            "max temp": dataList[1].day.maxtemp_c,
            "min temp": dataList[1].day.mintemp_c,
            sunrise: dataList[1].astro.sunrise,
            sunset: dataList[1].astro.sunset,
            "chance of rain": dataList[1].day.daily_chance_of_rain,
            condition: dataList[1].day.condition.text,
          },
        ];
        return list;
      } catch (e) {
        console.error(e);
        await interaction.reply({
          content: "Failed to fetch data.",
          ephemeral: true,
        });
      }
    }

    function createEmbed(r) {
      embed = {
        title: `**~5成準確天氣預報**`,
        color: 0xffffff,
        fields: [
          {
            name: `*星期六 ${r[0].date}*`,
            value: `平均氣溫：${r[0].["avg temp"]}°C\n最高氣溫：${r[0]["max temp"]}°C\n最低氣溫：${r[0]["min temp"]}°C\n日出：${r[0].sunrise}\n日落：${r[0].sunset}\n落雨機率：${r[0]["chance of rain"]}%\n天氣概況：${r[0].condition}`,
          },
          {
            name: `*星期日 ${r[1].date}*`,
            value: `平均氣溫：${r[0].["avg temp"]}°C\n最高氣溫：${r[0]["max temp"]}°C\n最低氣溫：${r[0]["min temp"]}°C\n日出：${r[0].sunrise}\n日落：${r[0].sunset}\n落雨機率：${r[0]["chance of rain"]}%\n天氣概況：${r[0].condition}`,
          },
        ],
      };
      return embed;
    }

    async function interactionReply(interaction, embed, intId) {
      let channel;
      let channelId;

      if (interaction.guild.name == "My server") {
        channelId = "1201276567419097159";
      } else if (interaction.guild.name == "HKLB") {
        channelId = "1089709495434870785";
      }

      try {
        channel = await interaction.guild.channels.fetch(channelId); // edit this to user input thread id
      } catch (e) {
        // console.error(e);
        const channel = await interaction.guild.channels.fetch(
          interaction.channelId
        );
        await interaction.editReply({
          content: "channel does not exist.",
          ephemeral: true,
        });
        clearInterval(intId);
        triggered = false;
      }

      if (channel) {
        try {
          await channel.send({ embeds: [embed] });
          // await channel.send('hi');
        } catch (e) {
          console.error(e);
        }
      }
    }

    function timeTillFriday() {
      const now = new Date();
      const currentDay = now.getDay();
      const targetDay = 5; // Friday
      const targetHour = 12; // 12 PM

      if (currentDay === targetDay && now.getHours() < targetHour) {
        return (targetHour - now.getHours()) * 60 * 60 * 1000;
      } else {
        // Calculate the time until the next Friday
        const daysUntilFriday = (targetDay + 7 - currentDay) % 7;
        const hoursUntilFriday =
          daysUntilFriday * 24 + (targetHour - now.getHours());
        return hoursUntilFriday * 60 * 60 * 1000;
      }
    }

    const option = interaction.options.getString("option");
    if (option == "start_interval") {
      if (triggered == true) {
        await interaction.reply({
          content: "instance already started.",
          ephemeral: true,
        });
        return;
      }

      triggered = true;
      await interaction.reply({ content: "started.", ephemeral: true });

      timId = setTimeout(() => {
        intId = setInterval(() => {
          if (timId) clearTimeout(timId);
          fetchData(interaction).then(async (r) => {
            const embed = createEmbed(r);
            interactionReply(interaction, embed, intId);
          });
        }, 1000 * 60 * 60 * 24 * 7);
      }, timeTillFriday());
    }

    if (option == "end_interval") {
      if (timId && intId == undefined) {
        clearTimeout(timId);
        timId = undefined;
        triggered = false;
        await interaction.reply({ content: "Ended Timeout.", ephemeral: true });
      } else if (intId) {
        clearInterval(intId);
        intId = undefined;
        timId = undefined;
        triggered = false;
        await interaction.reply({
          content: "Ended Interval.",
          ephemeral: true,
        });
      } else if (intId == undefined && timId == undefined) {
        await interaction.reply({
          content: "Nothing to end.",
          ephemeral: true,
        });
      }
    }
  },
};
