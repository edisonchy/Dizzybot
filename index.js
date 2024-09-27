const fs = require("node:fs");
const path = require("node:path");
const { Client, Collection, GatewayIntentBits } = require("discord.js");
const { token } = require("./config.json");
const express = require("express");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.cooldowns = new Collection();
client.commands = new Collection();

const foldersPath = path.join(__dirname, "commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder);
  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    // Set a new item in the Collection with the key as the command name and the value as the exported module
    if ("data" in command && "execute" in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
      );
    }
  }
}

const eventsPath = path.join(__dirname, "events");
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

// Start Express Server logic
const app = express();
const { windyScreenshot } = require("./lib/windyScreenshot");
const { scrapeLogic } = require("./scrapeLogic");

const PORT = process.env.PORT || 4000;

// Route to handle scraping logic
app.get("/scrape", (req, res) => {
  scrapeLogic(res);
});

app.post("/webhook", async (req, res) => {
  // Send a 200 status immediately to acknowledge receipt of the request
  res.sendStatus(200);
	windyScreenshot(client);
  
});

// Simple home route
app.get("/", (req, res) => {
  res.send("Render Puppeteer server is up and running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

// Log in to Discord with your client's token
client.login(token);
