const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");

const botClient = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

module.exports = botClient;
