require("dotenv").config(); //initialize dotenv
const { DISCORD_TOKEN } = process.env;
const { Client, Intents } = require("discord.js");
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true, limit: "16mb" }));
app.use(express.json({ limit: "16mb" }));

const client = new Client({
  intents: [Intents.FLAGS.GUILDS],
});

let channel;

client.on("ready", async () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const guild = await client.guilds.fetch("928711880552366082");
  channel = guild.channels.cache.get("928741601658933298");
  // channel.send("I'm online!");
  // const channel = guild.channels.cache.get("894349711761346612");
});

app.post("/groupme", async (req, res) => {
  console.log(req.body);
  const { attachments, name, text } = req.body;
  let files = [];
  let notice;
  if (attachments.length) {
    attachments.forEach((attachment) => {
      attachment.type === "image" && files.push(attachment.url);
    });
    if (files.length === 0) notice = true;
  }

  if (channel)
    channel.send(
      `${name}: ${text} ${files.length ? files.join(" ") : ""}${
        files.length && " If these files cannot be viewed, please check Groupme"
      }`
    );
  else console.log("No channel found.");
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));

client.login(DISCORD_TOKEN);
