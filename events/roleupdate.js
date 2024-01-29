const { Events } = require("discord.js");

module.exports = {
  name: Events.GuildMemberUpdate,
  async execute(oldMember, newMember) {
    const addedRoles = newMember.roles.cache.filter(
      (role) => !oldMember.roles.cache.has(role.id)
    );

    if (addedRoles.size > 0) {
      // Check if the added role has a specific ID
      const targetRoleID = "1201306011957481492";

      if (addedRoles.has(targetRoleID)) {
        // Get the thread channel ID where you want to add the member
        const threadChannelIDs = ["1201276700386934914", "1201492402146390088"];

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
