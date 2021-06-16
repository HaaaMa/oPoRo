const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "textKurdish",
  aliases: [],
  description: "Show text",
  usage: "text",
  run: async (client, message, args) => {
    
    
    let sizes = ["","","","","","","","","","","","","","",""];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = sizes[Math.floor(Math.random() * sizes.length)];

    let embed = new MessageEmbed()
      .setColor(Color)
      .setDescription(`\n${Result}`)

    message.channel.send(embed);

    
  }
};
