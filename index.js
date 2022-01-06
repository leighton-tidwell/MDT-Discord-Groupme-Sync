require("dotenv").config(); //initialize dotenv
const { DISCORD_TOKEN } = process.env;
const { Client, Intents } = require("discord.js");
const express = require("express");
const app = express();

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

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));

client.login(DISCORD_TOKEN);
