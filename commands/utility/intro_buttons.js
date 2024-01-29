const { SlashCommandBuilder, ButtonStyle, ActionRowBuilder, ButtonBuilder, PermissionFlagsBits } = require('discord.js');

const Embed = {
      title: "**SBDW Longboard Shop**",
      description: ":white_small_square: SBDW Longboards HK －由本地 Longboarders 組成嘅鋪頭仔 aka 鋪仔。\n\n:white_small_square: 當初成立目的係為咗香港人可以喺香港買到來自海外各地優質長板零件；至今已成為亞洲地區中，銷售及調校最多款式器材嘅一站式\"車房\"，致力推動本土以至亞洲嘅長板運動；目標係提高大眾對長板運動嘅認知，以及幫助長板運動健康成長、普及化。\n\n:white_small_square: 由2019至今，鋪仔（SBDW) 每星期都會舉辦板聚，畀一眾板類愛好者交流；亦設有板類教練培訓計劃，助板類愛好者投身教練行業；同時鼓勵學員開辦免費課堂予初學者，使兩者均能與長板健康成長；望與志同道合嘅各位一同體驗長板及生活。",
      color: 16777215,
      image: {
        url: "https://media.discordapp.net/attachments/947837451509047296/1088961297779015731/16587089_616349771891171_5982046950098508905_o_c13013f4-2080-4ef2-a760-75b671cc2896_2048x.webp?width=805&height=452"
      }
    }

module.exports = {
	data: new SlashCommandBuilder()
    .setDMPermission(false)
		.setName('intro_buttons')
		.setDescription('Set get intro button.')
    .addChannelOption(o => 
                      o.setName('channel')
                      .setDescription('Set get intro button in this channel.')
                      .setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),                
	async execute(interaction) {
		const channel = interaction.options.getChannel('channel');
    let sendChannel = await channel.send({
      embeds: ([Embed]),
      components: [
        new ActionRowBuilder().setComponents(
          new ButtonBuilder().setCustomId('門面野').setLabel('門面野').setStyle(ButtonStyle.Primary),
          new ButtonBuilder().setCustomId('報名方法').setLabel('報名方法').setStyle(ButtonStyle.Primary),
          new ButtonBuilder().setCustomId('租嘢?').setLabel('租嘢?').setStyle(ButtonStyle.Primary),
          new ButtonBuilder().setCustomId('租板攻略').setLabel('租板攻略').setStyle(ButtonStyle.Primary),
          new ButtonBuilder().setURL('https://linktr.ee/sbdwlongboards').setLabel('Linktree').setStyle(ButtonStyle.Link),
        ),
      ],
    });
    if (!sendChannel) {
      return await interaction.reply({content: 'Error! Try again later.', ephemeral: true});
    } else {
      return await interaction.reply({content: 'Success! Embed sent.', ephemeral: true});
    }
	},
};