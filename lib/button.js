module.exports.button = async (interaction) => {
  // Only handle our specific button
  if (interaction.customId !== "greenButton") return;

  const { guild, member } = interaction;
    const roleId = process.env.GREEN_BUTTON_ROLE_ID;

  // Defer immediately to avoid 3s interaction timeout (ephemeral)
  if (!interaction.deferred && !interaction.replied) {
    try {
      await interaction.deferReply({ ephemeral: true });
    } catch (err) {
      // If defer fails (rare), fall back to a direct reply later
      console.warn("[button] failed to defer reply:", err);
    }
  }

  // Resolve role (cache first, then API)
  let roleToAdd = guild.roles.cache.get(roleId);
  if (!roleToAdd) {
    try {
      roleToAdd = await guild.roles.fetch(roleId);
    } catch (err) {
      console.error("[button] failed to fetch role:", err);
    }
  }

  if (!roleToAdd) {
    const payload = { content: "找不到角色，請稍後再試。" };
    return interaction.deferred || interaction.replied
      ? interaction.editReply(payload)
      : interaction.reply({ ...payload, ephemeral: true });
  }

  // Already has role
  if (member.roles.cache.has(roleToAdd.id)) {
    const payload = { content: "吔蕉啦你🍌" };
    return interaction.deferred || interaction.replied
      ? interaction.editReply(payload)
      : interaction.reply({ ...payload, ephemeral: true });
  }

  // Try to add role
  try {
    await member.roles.add(roleToAdd, "Green button self-assign");
  } catch (error) {
    console.error("[button] error adding role:", error);
    const payload = { content: "我加唔到個角色，可能冇權限。" };
    return interaction.deferred || interaction.replied
      ? interaction.editReply(payload)
      : interaction.reply({ ...payload, ephemeral: true });
  }

  // Add the member to the specified threads concurrently
  const threadChannelIDs = process.env.GREEN_BUTTON_THREAD_IDS.split(",");

  try {
    const channels = await Promise.all(
      threadChannelIDs.map((id) => guild.channels.fetch(id).catch(() => null))
    );

    await Promise.all(
      channels
        .filter((ch) => ch && typeof ch.isThread === "function" && ch.isThread())
        .map(async (thread) => {
          try {
            const members = await thread.members.fetch();
            if (!members.has(member.id)) {
              await thread.members.add(member.id);
            }
          } catch (err) {
            console.error(`Error adding ${member.user.tag} to thread ${thread?.id}:`, err);
          }
        })
    );
  } catch (err) {
    console.error("[button] thread processing error:", err);
  }

  const finalPayload = { content: "向右掃查看全部頻道👉🏿" };
  return interaction.deferred || interaction.replied
    ? interaction.editReply(finalPayload)
    : interaction.reply({ ...finalPayload, ephemeral: true });
};
