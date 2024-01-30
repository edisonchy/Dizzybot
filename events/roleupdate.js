const { Events } = require("discord.js");

module.exports = {
  name: Events.GuildMemberUpdate,
  async execute(oldMember, newMember) {
    const addedRoles = newMember.roles.cache.filter(
      (role) => !oldMember.roles.cache.has(role.id)
    );

    if (addedRoles.size > 0) {
      // Check if the added role has a specific ID
      let targetRoleID;
      if (interaction.guild.name == "My server") {
        targetRoleID = "1201306011957481492";
      } else if (interaction.guild.name == "HKLB") {
        targetRoleID = "934790971131039745";
      }

      if (addedRoles.has(targetRoleID)) {
        let threadChannelIDs;
        if (interaction.guild.name == "My server") {
          threadChannelIDs = ["1201276700386934914", "1201492402146390088"];
        } else if (interaction.guild.name == "HKLB") {
          threadChannelIDs = ["1089709495434870785", "1089710323113672714", "1096424382986981386"];
        } 

        for (i = 0; i < threadChannelIDs.length; i++) {
          // Fetch the thread channel
          const threadChannel = await newMember.guild.channels.fetch(threadChannelIDs[i]);

          if (threadChannel && threadChannel.isThread()) {
            // Fetch the ThreadMemberManager
            const threadMembers = await threadChannel.members.fetch();
            // Check if the member is not already in the thread
            if (!threadMembers.has(newMember.id)) {
              // Add the member to the thread
              try {
                await threadChannel.members.add(newMember);
                console.log(`Added ${newMember.user.tag} to the thread.`);
              } catch (error) {
                console.error(
                  `Error adding ${newMember.user.tag} to the thread:`,
                  error
                );
              }
            }
          } else {
            console.error(
              `Thread channel with ID ${threadChannelID} not found or is not a thread.`
            );
          }
        }
      }
    }
  },
};
