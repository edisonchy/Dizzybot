# Dizzybot

![Docker](https://img.shields.io/badge/Docker-ready-blue)
![Discord.js](https://img.shields.io/badge/Discord.js-v14-blueviolet)

A Discord.js application designed to make positive changes and streamline the experience of a longboarding Discord community.

<img width="720" height="450" alt="Dizzybot Screenshot" src="https://github.com/user-attachments/assets/26895476-f6b9-49d7-8025-ce7d68489cdd" />

## Main Feature
By using a cron job from `node-cron`, the application captures weather forecast data from Windy.com and sends it to a specific Discord channel every Friday at 8:00 AM.

## Other Features
- A welcome button that automatically follows several thread channels for new users.
- Informative embeds to help members better understand community logistics.

## Prerequisites
- Node.js 18+
- Docker & Docker Compose
- A Discord bot token from the [Discord Developer Portal](https://discord.com/developers/applications)

## Setup with Docker
This application is designed to be hosted with Docker on an ARM64 system.  
First, install Docker. Both a `Dockerfile` and a `docker-compose.yml` file are included in the application to simplify the installation process.

1. Create a `.env` file in the project root with the required keys:
```env
TOKEN=your_bot_token_here
CLIENT_ID=your_client_id_here
WEATHER_CHANNEL_ID=channel_id_here
WEATHER_THREAD_ID=thread_id_here
GREEN_BUTTON_THREAD_IDS=comma_separated_thread_ids
GREEN_BUTTON_ROLE_ID=role_id_here
```
2. In the project directory, run:
```bash
docker compose up -d
```

## Local Development Setup
1. Clone the repository:
```bash
git clone https://github.com/edisonchy/dizzybot.git
cd dizzybot
```
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file (see Docker setup section for keys).
4. Start the bot:
```bash
node index.js
```
