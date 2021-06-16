const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "ping",
  aliases: [],
  description: "Pong!",
  usage: "Ping",
  run: async (client, message, args) => {
    

    const embed = new MessageEmbed()
      .setColor(Color)
      .setDescription(`Pong - ${client.ws.ping}`)

    message.channel.send(embed);

    
  }
};
