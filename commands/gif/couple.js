const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "couple",
  aliases: ["Couple"],
  description: "Show Gif",
  usage: "Gif",
  run: async (client, message, args) => {
   
    let replies = ["","","","","","","","","","","","",""];
    
    let result = Math.floor((Math.random() * replies.length));
    
    let gifembed = new Discord.MessageEmbed()

    .setTitle("Couple Gif")
    
      .setColor(Color)
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(replies[result]);

    message.channel.send(gifembed);

   
  }
};
