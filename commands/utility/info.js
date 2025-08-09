const {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Command to setup info page.")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addChannelOption((o) =>
      o
        .setName("channel")
        .setDescription("Channel for message to be displayed.")
        .setRequired(true)
    ),
  async execute(interaction) {
    if (!interaction.guild) {
      await interaction.reply({ content: "吔蕉啦你🍌", ephemeral: true });
      return;
    }
    
    const channel = interaction.options.getChannel("channel");
    const embeds = [
      {
        title: "**歡迎來到SBDW長板社區！**",
        color: 16777215,
        description:
          "\n我哋非常高興你能加入我哋呢個充滿活力嘅空間，專注於所有與長板相關嘅事物。無論你係資深長板手定係剛開始入門，呢度都係與其他愛好者聯繫、分享技巧同慶祝我哋對長板嘅熱情嘅完美場所。\n\n",
        image: {
          url: "https://media.discordapp.net/attachments/1288529206317158490/1289274452126994564/Copy_of_Untitled_Design.png?ex=66f839e6&is=66f6e866&hm=51913e7ee810fd17285ab418d0193d4282a86b541dc3b6db8dbbb3671d983854&=&format=webp&quality=lossless&width=1314&height=986",
        },
      },
      {
        title: "**如何參與**",
        color: 16777215,
        description:
          "如果你係新手，我哋建議你follow我哋IG。我哋會定期發布基本功訓練班嘅資訊，跟著上面嘅指示報名就可以啦！\n\n當你嘅技術提升到一定水平後，就可以參加我哋其他活動，例如踩街板、每周日落斜板團等等。我哋通常會在Discord上發佈活動資訊（請參考Discord 101 教學）。",
        image: {
          url: "https://media.discordapp.net/attachments/1288529206317158490/1289277730009120778/snapedit_1727458134934.jpg?ex=66f83cf4&is=66f6eb74&hm=38840e9035377edf46326dc07ef9b46411b748a825f7384d289d435ab15a15d4&=&format=webp&width=1314&height=986",
        },
      },
      {
        title: "鋪仔",
        color: 16777215,
        description:
          "地址：火炭金豪工業大廈一座15樓X室\n電話：98343120 / 62181915\n\n如果想過嚟我哋舖仔，請先使用以下連結進行預約。\n\n[（點擊預約）](https://sbdwlongboards.com/pages/booking)",
        image: {
          url: "https://media.discordapp.net/attachments/1288529206317158490/1289278796897452052/Copy_of_Untitled_Design_2.png?ex=66f83df2&is=66f6ec72&hm=bcb6f4a4c062a8ab963d7693f7e3695d0f0ae8b0deb297de68f81fb809ee3786&=&format=webp&quality=lossless&width=1314&height=986",
        },
      },
      {
        title: "**長板玩法**",
        color: 16777215,
        description:
          "長板主要分為五種玩法，這些玩法各具特色，適合不同的滑板愛好者：\n1. 下坡 / 自由滑 (Downhill / Freeride)：這兩種玩法都涉及到快速下滑，但有著不同的重點。下坡主要集中在高速滑行，滑手在陡峭的坡道上以極快的速度下滑，追求速度和穩定性；而自由滑則更注重技巧和花式，滑手在下坡時會進行側煞、漂移等動作，享受速度帶來的刺激感。\n2. 平花 (Freestyle / Dancing)：這種玩法強調在平地上進行各種花式和技巧，如跳躍、旋轉、舞步等。平花滑手追求優雅、流暢的滑行風格，展現個人的滑板功底和創意。這種玩法適合喜歡表演和追求美感的滑手。\n3. 巡航 / 弧形滑行 (Cruising/Carving)：這是最基本的長板玩法之一。巡航強調舒適和輕鬆的滑行體驗，滑手在平坦的路面上以中等速度滑行，享受風吹在臉上的感覺。弧形滑行則更注重在平地上進行大幅度的轉彎動作，滑手在轉彎時會利用重心的轉移來控制方向。這種玩法適合喜歡放鬆和享受旅途的滑手。\n4. 長距離滑行 / 推進 (Long Distance Pumping/Pushing)：這種玩法強調在平地上進行長距離的滑行。滑手利用蹬踩和重心轉移來推進滑板前進，不需要使用雙腳推動。長距離滑行需要良好的體力和耐力，適合喜歡挑戰自我和追求健康的滑手。\n5. Surfskate：這是一種模擬衝浪的長板玩法，通過特殊的前後分離卡車系統，滑手可以在平地上進行類似衝浪的動作和轉彎。這種玩法強調靈活性和反應能力，適合那些喜歡挑戰自我的滑手。",
        image: {
          url: "https://media.discordapp.net/attachments/1288529206317158490/1289286999563440314/CopyofUntitledDesign-ezgif.com-optimize.gif?ex=66f84596&is=66f6f416&hm=8962bced10f100e0645e03038b50f991b8f99d1547f24a17dbaa3e95e1b7203a&=&width=1079&height=809",
        },
      },
      {
        title: "出租滑板",
        color: 16777215,
        description:
          "如果你仲未決定入手自己嘅滑板，又想體驗滑板帶來的樂趣，不妨先試試我哋嘅滑板出租服務。\n\n類型包括：\n• Longboard: Cruising, Freestyle, Downhill/Freeride, Long Distance Pump/Push\n• Surfskate\n• Mini cruiser\n• Skateboard\n\n[ 費用如下 ]\n(a) 24hrs：$100\n(b) 168hrs(7days)：$350\n*租借期內 免費及無限次換板款\n*日後返嚟買板，可享一半租板費用回贈\n\n跟餐租借護具(每款)：\n(a) 24hrs：$25\n(b) 168hrs(7days)：$80",
        image: {
          url: "https://media.discordapp.net/attachments/1288529206317158490/1289288924811759717/Copy_of_Untitled_Design_5.png?ex=66f84761&is=66f6f5e1&hm=58cac1ed3d3bd154252d3f081aae270f21325b59929c991e6ec5b14a912f2778&=&format=webp&quality=lossless&width=838&height=629",
        },
      },
      {
        title: "**重要連結**",
        color: 16777215,
        description:
          "網店\n[打開連結](https://sbdwlongboards.com/pages/booking)\n\nInstagram\n[打開連結](https://www.instagram.com/sbdwlongboards/)\n\nYoutube\n[打開連結](https://www.youtube.com/user/sbdwlongboardshop)\n\nFacebook \n[打開連結](https://www.facebook.com/sbdwlongboards)\n\nLinktree\n[打開連結](https://linktr.ee/sbdwlongboards)",
        image: {
          url: "https://media.discordapp.net/attachments/1288529206317158490/1289306715006701598/Copy_of_Untitled_Design_6.png?ex=66f857f3&is=66f70673&hm=8f1be57edc3e59366753e9f66718315c1a5c3d58a6e740763d619e1d553a20c3&=&format=webp&quality=lossless&width=932&height=700",
        },
      },
    ];

    try {
      const embedMessages = embeds.map(
        (embedData) => new EmbedBuilder(embedData)
      );

      await channel.send({ embeds: embedMessages });
      await interaction.reply({
        content: "Message posted in channel.",
        ephemeral: true,
      });
    } catch (e) {
      await interaction.reply({
        content: "Error! Please try again later.",
        ephemeral: true,
      });
      console.error(e);
    }
  },
};
