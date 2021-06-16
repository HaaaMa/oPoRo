const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "picbaby",
  aliases: [],
  description: "Show Photo",
  usage: "Photo",
  run: async (client, message, args) => {
   
    let replies = ["","","","","","","","","","","","",""];
    
    let result = Math.floor((Math.random() * replies.length));
    
    let photoembed = new Discord.MessageEmbed()

    .setTitle("Baby Photo")
    
      .setColor("black")
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(replies[result]);

    message.channel.send(photoembed);

   
  }
};
