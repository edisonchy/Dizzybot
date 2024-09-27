module.exports.button = async (interaction) => {
  if (interaction.customId == "greenButton") {
    const member = interaction.member;
    const roleToAdd = interaction.guild.roles.cache.get("934790971131039745");

    if (member.roles.cache.has(roleToAdd.id)) {
      await interaction.reply({
        content: "吔蕉啦你🍌",
        ephemeral: true,
      });
      return;
    }

    await member.roles.add(roleToAdd);

    const threadChannelIDs = ["1089709495434870785", "1114020099771355186", "1096424382986981386"];
    // const threadChannelIDs = ["1089709495434870785", "1114020099771355186", "1096424382986981386"];
    for (i = 0; i < threadChannelIDs.length; i++) {
      const threadChannel = await interaction.guild.channels.fetch(
        threadChannelIDs[i]
      );
      if (threadChannel && threadChannel.isThread()) {
        const threadMembers = await threadChannel.members.fetch();
        if (!threadMembers.has(member.id)) {
          try {
            await threadChannel.members.add(member);
            // console.log(`Added ${member.user.tag} to the thread.`);
          } catch (error) {
            console.error(
              `Error adding ${member.user.tag} to the thread:`,
              error
            );
          }
        }
      }
    }
    await interaction.reply({
      content: "向右掃查看全部頻道👉🏿",
      ephemeral: true,
    });
  }
};
