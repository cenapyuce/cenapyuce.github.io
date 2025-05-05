const Discord = require('discord.js');
const client = new Discord.Client();
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));



app.get("/", (request, response) => {
  response.sendFile(__dirname + "index.html");
});

app.get("/.well-known/discord", (req,res) => {
  res.send("dh=f3fa790c74dc0aa37e7758cdcfa054fd5cd26b68");
})
app.get("/*", (request, response) => {
  response.send("404 Not Found");
});
