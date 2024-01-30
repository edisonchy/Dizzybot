const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("add_to_thread")
    .setDescription("Add members to thread")
    .setDMPermission(false)
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption((o) =>
      o
        .setName("thread_id")
        .setDescription("add members to given thread id")
        .setRequired(true)
    ),
  async execute(interaction) {
    const threadId = interaction.options.getString("thread_id");
    let roleId;
    
    if (interaction.guild.name == "My server") {
      roleId = "1201306011957481492";
    } else if (interaction.guild.name == "HKLB") {
      roleId = "934790971131039745";
    } // Edit this 1201306011957481492 934790971131039745

    if (!interaction.guild.roles.cache.has(roleId)) {
      await interaction.reply({
        content: "Role not found.",
        ephemeral: true,
      });
      return;
    }

    try {
      // Fetch the thread using the given ID
      const thread = await interaction.guild.channels.fetch(threadId);

      // Check if the fetched channel is a thread
      if (thread && thread.isThread()) {
        const fetchAllMembers = await interaction.guild.members.fetch();
        const membersWithRole = fetchAllMembers.filter((x) =>
          x.roles.cache.has(roleId)
        );

        const threadMembers = await thread.members.fetch();
        let nothingEdited = true;

        for (const member of membersWithRole.values()) {
          // Check if the member is not already in the thread
          if (!threadMembers.has(member.id)) {
            try {
              // Add the member to the thread
              await thread.members.add(member.id);
              console.log(`Added ${member.user.tag} to the thread.`);
              nothingEdited = false;
            } catch (error) {
              console.error(
                `Error adding ${member.user.tag} to the thread:`,
                error
              );
            }
          }
        }

        if (nothingEdited) {
          await interaction.reply({
            content:
              "Members with the specified role are already in the thread.",
            ephemeral: true,
          });
        } else {
          await interaction.reply({
            content: "Members with the specified role added to the thread.",
            ephemeral: true,
          });
        }
      }
    } catch (error) {
      console.error("Error fetching the thread:", error);
      await interaction.reply({
        content: "Error fetching the thread. Please check the thread ID.",
        ephemeral: true,
      });
    }
  },
};
