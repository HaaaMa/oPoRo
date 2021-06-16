const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "girl",
  aliases: ["Girl"],
  description: "Show Gif",
  usage: "Girl",
  run: async (client, message, args) => {
    /
    let replies = ["","","","","","","","","","","","","","","","",""];
                   
    let result = Math.floor((Math.random() * replies.length));
    
    let gifembed = new Discord.MessageEmbed()

    .setTitle("Girl Gif")
    
      .setColor(Color)
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(replies[result]);


    message.channel.send(gifembed);

    
  }
};
