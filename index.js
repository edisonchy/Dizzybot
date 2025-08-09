require("dotenv").config();

const { Client, Collection, GatewayIntentBits } = require("discord.js");
const fs = require("node:fs");
const path = require("node:path");
const token = process.env.TOKEN;

// --- Client setup ---
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
global.discordClient = client; 
client.commands = new Collection();
client.cooldowns = new Collection();

// --- Constants ---
const ROOT = __dirname;
const COMMANDS_DIR = path.join(ROOT, "commands");
const EVENTS_DIR = path.join(ROOT, "events");

// --- Utils ---
const isJsFile = (file) => file.endsWith(".js");

function readSubdirs(dir) {
  try {
    return fs.readdirSync(dir, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => path.join(dir, d.name));
  } catch (err) {
    console.error(`[ERROR] Failed to read directory: ${dir}`, err);
    return [];
  }
}

function readFiles(dir) {
  try {
    return fs.readdirSync(dir).filter(isJsFile).map((f) => path.join(dir, f));
  } catch (err) {
    console.error(`[ERROR] Failed to read files in: ${dir}`, err);
    return [];
  }
}

function safeRequire(filePath) {
  try {
    delete require.cache[require.resolve(filePath)];
    return require(filePath);
  } catch (err) {
    console.error(`[ERROR] Failed to require: ${filePath}`, err);
    return null;
  }
}

// --- Loaders ---
function loadCommands() {
  const folders = readSubdirs(COMMANDS_DIR);
  for (const folder of folders) {
    for (const filePath of readFiles(folder)) {
      const command = safeRequire(filePath);
      if (!command) continue;

      if (command.data && command.execute && command.data.name) {
        client.commands.set(command.data.name, command);
      } else {
        console.warn(`[WARN] Missing required "data" (with a name) or "execute" in ${filePath}`);
      }
    }
  }
  console.log(`[INFO] Loaded ${client.commands.size} command(s).`);
}

function loadEvents() {
  for (const filePath of readFiles(EVENTS_DIR)) {
    const event = safeRequire(filePath);
    if (!event || !event.name || !event.execute) {
      console.warn(`[WARN] Event file missing "name" or "execute": ${filePath}`);
      continue;
    }

    const handler = (...args) => event.execute(...args);
    if (event.once) client.once(event.name, handler);
    else client.on(event.name, handler);
  }
}

// --- Boot ---
function main() {
  loadCommands();
  loadEvents();

  client
    .login(token)
    .then(() => console.log("[INFO] Discord client logged in."))
    .catch((err) => {
      console.error("[FATAL] Failed to login:", err);
      process.exitCode = 1;
    });
}

main();