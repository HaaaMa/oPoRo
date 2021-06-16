const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "boy",
  aliases: ["Boy"],
  description: "Show Member text!",
  usage: "text <Mention Member>",
  run: async (client, message, args) => {
    //Start
    let replies = ["https://cdn.discordapp.com/attachments/694694493525377035/737310007929864252/image0.gif"];
    
    let result = Math.floor((Math.random() * replies.length));
    
    let gifembed = new Discord.MessageEmbed()

    .setTitle("Boy Gif")
    
      .setColor(Color)
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(replies[result]);

 //     .setFooter(`Requested by ${message.author.username}`)
//      .setTimestamp();

    message.channel.send(gifembed);

    //End
  }
};
