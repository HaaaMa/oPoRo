const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "piccouple",
  aliases: [],
  description: "Show Photo",
  usage: "Photo",
  run: async (client, message, args) => {
   
    let replies = ["https://cdn.discordapp.com/attachments/697145837062455411/854655847089831946/7485_server_boost.png","https://cdn.discordapp.com/attachments/697145837062455411/854505360550133790/blushed.png","https://cdn.discordapp.com/attachments/697145837062455411/854505304099389491/tumblr_bee.png","https://cdn.discordapp.com/attachments/697145837062455411/854442800149954560/4542_green_heartbreak.png","https://cdn.discordapp.com/attachments/697145837062455411/854442627334930482/4523_demonithonl.png","https://cdn.discordapp.com/attachments/697145837062455411/854442510776795166/4516_googlefire.png","https://cdn.discordapp.com/attachments/697145837062455411/854442356928675880/4506_smiley_bean.png"];

    let result = Math.floor((Math.random() * replies.length));
    
    let photoembed = new Discord.MessageEmbed()

    .setTitle("Couple Photo")
    
      .setColor("black")
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(replies[result]);

    message.channel.send(photoembed);

   
  }
};
