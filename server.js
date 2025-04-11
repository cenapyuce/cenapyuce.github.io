const Discord = require('discord.js');
const client = new Discord.Client();
const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));



app.get("/", (request, response) => {
  response.sendFile(__dirname + "index.html");
});

app.get("/*", (request, response) => {
  response.send("404 Not Found");
});
