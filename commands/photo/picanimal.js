const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "picanimal",
  aliases: [],
  description: "Show Photo",
  usage: "Photo",
  run: async (client, message, args) => {
   
    let replies = ["https://cdn.discordapp.com/attachments/608711490223996995/854056862944854036/a8afae559d1a02c5a96a5dd70717cf6d.jpg","https://cdn.discordapp.com/attachments/608711490223996995/854049204972421160/Screenshot_20210614-150832_Telegram.png","https://cdn.discordapp.com/attachments/608711490223996995/853975041870790656/c2253edf4d0de954a4703f6f074a2b10.jpg","https://cdn.discordapp.com/attachments/608711490223996995/853979788682592256/IMG_20190830_133014_403.jpg","https://cdn.discordapp.com/attachments/608711490223996995/853969776577740830/f1893b45ce7e234b517a46bf9875ac69.jpg","https://cdn.discordapp.com/attachments/608711490223996995/853812499181862922/image0.jpg","https://cdn.discordapp.com/attachments/608711490223996995/853043268602691594/images_3.jpeg"];

    let result = Math.floor((Math.random() * replies.length));
    
    let photoembed = new Discord.MessageEmbed()

    .setTitle("Animal Photo")
    
      .setColor("black")
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(replies[result]);

    message.channel.send(photoembed);

   
  }
};
