const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "slowmode",
  aliases: ["sm"],
  description: "Slow mode channel!",
  usage: "slowmode <channel>",
  run: async (client, message, args) => {
