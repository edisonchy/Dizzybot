# Dizzybot
*A Discord.js application designed to streamline the experience of a longboarding Discord community.*

Dizzybot helps keep an online community **organized, informed, and engaged**.  
It posts scheduled weather forecasts, guides newcomers, and shares key information to **support better decision-making**.

## Demo  

<img width="720" height="450" alt="Dizzybot Screenshot" src="https://github.com/user-attachments/assets/26895476-f6b9-49d7-8025-ce7d68489cdd" />

## Target Problems 
- **Weather-based planning hassle** → Community members base their decision to sign up for weekly meetups on weather, but the platform lacks a streamlined process.  
- **Platform unfamiliarity** → Community members find it difficult to navigate an unfamiliar platform.  
- **Information gaps** → Members are unable to receive notifications and miss key thread discussions.  

## Main Feature
By using a cron job from `node-cron`, the application captures weather forecast data from Windy.com and sends it to a specific Discord channel every Friday at 8:00 AM.

## Other Features
- A welcome button that automatically follows several thread channels for new users.
- Informative embeds to help members better understand community logistics.

## Requirements
- Node.js 18+
- Docker & Docker Compose
- A Discord bot token from the [Discord Developer Portal](https://discord.com/developers/applications)


## Setup with Docker  

This application is designed to be hosted with Docker on an ARM64 system.  
Both a `Dockerfile` and a `docker-compose.yml` file are included to simplify installation.  

1. Install Docker on your system.  

2. Create a `.env` file in the project root with the required keys:  
```env
TOKEN=your_bot_token_here
CLIENT_ID=your_client_id_here
WEATHER_CHANNEL_ID=channel_id_here
WEATHER_THREAD_ID=thread_id_here
GREEN_BUTTON_THREAD_IDS=comma_separated_thread_ids
GREEN_BUTTON_ROLE_ID=role_id_here
```

3. From the project directory, run:  
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

3. Create a `.env` file in the project root (see the Docker setup section for required keys).  

4. Start the bot:  
```bash
node index.js
```
