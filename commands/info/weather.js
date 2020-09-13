const Discord = require("discord.js");
const weather = require('weather-js');
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "weather",
  aliases: [],
  description: "Show Given Location Weather Information!",
  usage: "Weather",
  run: async (client, message, args) => {
    //Start
    message.delete();

    const embed = new MessageEmbed()
      .setColor(Color)
      .setDescription(`Pong - ${client.ws.ping}`)
      .setFooter(`Requested By ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
