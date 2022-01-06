require("dotenv").config(); //initialize dotenv
const { DISCORD_TOKEN } = process.env;
const { Client, Intents } = require("discord.js");
const http = require("http");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS],
});

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const guild = await client.guilds.fetch("928711880552366082");
  const channel = guild.channels.cache.get("928741601658933298");
  // channel.send("I'm online!");
  // const channel = guild.channels.cache.get("894349711761346612");
});

client.login(DISCORD_TOKEN);
