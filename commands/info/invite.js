const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "invite",
  aliases: ["inv", "Invite"],
  description: "Support invite",
  usage: "Invite",
  run: async(client, message, args) => {
 
    
    
    let embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`Invite`)

    .setDescription(`
[click here](https://discord.com/api/oauth2/authorize?client_id=814608707412295780&permissions=8&scope=bot)    ////haaaaMa
`)
    .setFooter(`${message.author.username}`)
    .setImage(``)
    .setTimestamp();
    message.react(`✅`)
 
      return message.channel.send(embed);
    
  }
};
