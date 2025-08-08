const { Events } = require("discord.js");
const cron = require("node-cron");
const { windyScreenshot } = require("../lib/windyScreenshot");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);

    cron.schedule(
      "0 8 * * 5", 
      () => {
        console.log("[CRON] Running windyScreenshot every Friday at 8 AM (HKT)");
        windyScreenshot(client);
      },
      { timezone: "Asia/Hong_Kong" } 
    );
  },
};