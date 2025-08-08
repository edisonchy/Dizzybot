const { Events, Collection } = require("discord.js");
const { button } = require("../lib/button.js");

module.exports = {
  name: Events.InteractionCreate,
  async execute(interaction) {
    // Only handle slash commands and button interactions
    if (!interaction.isChatInputCommand() && !interaction.isButton()) return;

    // Handle button interactions
    if (interaction.isButton()) {
      try {
        const maybePromise = button(interaction);
        if (maybePromise && typeof maybePromise.then === "function") {
          await maybePromise;
        }
      } catch (err) {
        console.error("[button] handler error:", err);
        if (!interaction.replied && !interaction.deferred) {
          await interaction.reply({
            content: "Something went wrong handling that button.",
            ephemeral: true,
          });
        }
      }
      return;
    }

    // Handle slash commands
    const command = interaction.client.commands.get(interaction.commandName);
    if (!command || typeof command.execute !== "function") {
      console.error(`No valid command for ${interaction.commandName}`);
      if (!interaction.replied && !interaction.deferred) {
        await interaction.reply({
          content:
            "That command isn't available right now. Try again in a moment.",
          ephemeral: true,
        });
      }
      return;
    }

    const { cooldowns } = interaction.client;
    const name = command.data?.name ?? interaction.commandName;

    if (!cooldowns.has(name)) {
      cooldowns.set(name, new Collection());
    }

    const timestamps = cooldowns.get(name);
    const cooldownSeconds = Number(command.cooldown) || 0;

    if (cooldownSeconds > 0) {
      const now = Date.now();
      const cooldownAmount = cooldownSeconds * 1000;

      if (timestamps.has(interaction.user.id)) {
        const expirationTime =
          timestamps.get(interaction.user.id) + cooldownAmount;
        if (now < expirationTime) {
          const expiredTimestamp = Math.round(expirationTime / 1000);
          return interaction.reply({
            content: `Please wait, you're on cooldown for \`${name}\`. You can use it again <t:${expiredTimestamp}:R>.`,
            ephemeral: true,
          });
        }
      }

      timestamps.set(interaction.user.id, now);
      setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);
    }

    try {
      await Promise.resolve(command.execute(interaction));
    } catch (error) {
      console.error(`[command:${name}] execution error:`, error);
      const payload = {
        content: "There was an error while executing this command!",
        ephemeral: true,
      };
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp(payload);
      } else {
        await interaction.reply(payload);
      }
    }
  },
};
