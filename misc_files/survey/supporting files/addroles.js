module.exports.addRoles = async (list, interaction) => {
  const 已介紹 = interaction.guild.roles.cache.get("934790971131039745");
  const 港島東 = interaction.guild.roles.cache.get("942655826085150750");
  const 港島南區 = interaction.guild.roles.cache.get("942655619410829313");
  const 港島西 = interaction.guild.roles.cache.get("942655798818000896");
  const 大西北 = interaction.guild.roles.cache.get("942655652898172929");
  const 將軍澳 = interaction.guild.roles.cache.get("942655568353562645");
  const 上水粉領 = interaction.guild.roles.cache.get("942655682333798400");
  const 明日大愚 = interaction.guild.roles.cache.get("942655733407821836");
  const 貨櫃碼頭 = interaction.guild.roles.cache.get("942655763795546172");
  const 油尖旺 = interaction.guild.roles.cache.get("942655869408145478");
  const 美孚至深水埗 = interaction.guild.roles.cache.get("942655896511729664");
  const 紅磡土瓜灣 = interaction.guild.roles.cache.get("942655995103047710");
  const 樂富黃大仙慈雲山 = interaction.guild.roles.cache.get("942656066188115969");
  const 觀塘九龍灣 = interaction.guild.roles.cache.get("942656125558472744");
  const 沙田馬鞍山 = interaction.guild.roles.cache.get("942656173620994059");
  const 大埔馬料水 = interaction.guild.roles.cache.get("942655896511729664");
  const UK幫 = interaction.guild.roles.cache.get("933219634906267748");
  const JP幫 = interaction.guild.roles.cache.get("933219937881837598");
  const 台灣幫 = interaction.guild.roles.cache.get("933771147059789904");
  const 澳洲幫 = interaction.guild.roles.cache.get("942656280533794857");
  const SkateBeginner = interaction.guild.roles.cache.get("1048670387061407815");
  const SkateIntermediate = interaction.guild.roles.cache.get("1048670204357521489");
  const SkateAdvanced = interaction.guild.roles.cache.get("1048670383089393784");
  const SnowBeginner = interaction.guild.roles.cache.get("1048670359383183480");
  const SnowIntermediate = interaction.guild.roles.cache.get("1048674580597833779");
  const SnowAdvanced = interaction.guild.roles.cache.get("1048674621228064798");
  const SurfBeginner = interaction.guild.roles.cache.get("1048674633680957630");
  const SurfIntermediate = interaction.guild.roles.cache.get("1048674633680957630");
  const SurfAdvanced = interaction.guild.roles.cache.get("1088703737415082065");

  try {
    await interaction.member.roles.add(已介紹);

    for (let i = 0; i < list.length; i++) {
      if (list[i] == "港島東") {
        await interaction.member.roles.add(港島東);
      } else if (list[i] == "港島南區") {
        await interaction.member.roles.add(港島南區);
      } else if (list[i] == "港島西") {
        await interaction.member.roles.add(港島西);
      } else if (list[i] == "大西北") {
        await interaction.member.roles.add(大西北);
      } else if (list[i] == "將軍澳") {
        await interaction.member.roles.add(將軍澳);
      } else if (list[i] == "上水粉領") {
        await interaction.member.roles.add(上水粉領);
      } else if (list[i] == "明日大愚") {
        await interaction.member.roles.add(明日大愚);
      } else if (list[i] == "貨櫃碼頭") {
        await interaction.member.roles.add(貨櫃碼頭);
      } else if (list[i] == "油尖旺") {
        await interaction.member.roles.add(油尖旺);
      } else if (list[i] == "美孚至深水埗") {
        await interaction.member.roles.add(美孚至深水埗);
      } else if (list[i] == "紅磡土瓜灣") {
        await interaction.member.roles.add(紅磡土瓜灣);
      } else if (list[i] == "樂富黃大仙慈雲山") {
        await interaction.member.roles.add(樂富黃大仙慈雲山);
      } else if (list[i] == "觀塘九龍灣") {
        await interaction.member.roles.add(觀塘九龍灣);
      } else if (list[i] == "沙田馬鞍山") {
        await interaction.member.roles.add(沙田馬鞍山);
      } else if (list[i] == "大埔馬料水") {
        await interaction.member.roles.add(大埔馬料水);
      } else if (list[i] == "UK幫") {
        await interaction.member.roles.add(UK幫);
      } else if (list[i] == "JP幫") {
        await interaction.member.roles.add(JP幫);
      } else if (list[i] == "台灣幫") {
        await interaction.member.roles.add(台灣幫);
      } else if (list[i] == "澳洲幫") {
        await interaction.member.roles.add(澳洲幫);
      } else if (list[i] == "skateBeginner") {
        await interaction.member.roles.add(SkateBeginner);
      } else if (list[i] == "skateIntermediate") {
        await interaction.member.roles.add(SkateIntermediate);
      } else if (list[i] == "skateAdvanced") {
        await interaction.member.roles.add(SkateAdvanced);
      } else if (list[i] == "snowBeginner") {
        await interaction.member.roles.add(SnowBeginner);
      } else if (list[i] == "snowIntermediate") {
        await interaction.member.roles.add(SnowIntermediate);
      } else if (list[i] == "snowAdvanced") {
        await interaction.member.roles.add(SnowAdvanced);
      } else if (list[i] == "surfIntermediate") {
        await interaction.member.roles.add(SurfIntermediate);
      } else if (list[i] == "surfBeginner") {
        await interaction.member.roles.add(SurfBeginner);
      } else if (list[i] == "surfAdvanced") {
        await interaction.member.roles.add(SurfAdvanced);
      }
    }
  } catch (e) {
    console.error(e);
  }
};
