const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color, Prefix } = require("../../config.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Help Command!",
  usage: "Help | <Command Name>",
  run: async(client, message, args) => {
 
    //   message.delete();
    
    let embed = new MessageEmbed()
    .setColor(Color)
    .setTitle(`${client.user.username} Commands!`)
    .setDescription(`Help Rabbit Bot` + 
    "\n\n**Fun**\n`Avatar, Coinflip, Howgay, Meme, Rate, 8ball, Dicksize, Ascii, Choose, Hack, Randomnumber`" + "\n\n" + "**Moderation**\n`Clear, Mute, Unmute, Tempmute, Kick, Ban, Unban, Tempban, Warn, Warnings, ResetWarns`" + "\n\n"+
    "**Information**\n`Help, Covid, Weather, Userinfo, Serverinfo, Ping` " + "\n\n" + "**text Command**\n`text1, text2, text3, text4`")
    .setFooter(`Requested By ${message.author.username}`)
    .setImage(`https://media.discordapp.net/attachments/790836700561670145/823722035678281758/image0.gif`)
    .setTimestamp();
    message.react(`✅`)
 
    
    if (!args.length) return message.channel.send(embed);

    let cmd =
      client.commands.get(args[0].toLowerCase()) ||
      client.commands.get(client.aliases.get(args[0].toLowerCase()));

    let embed2 = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${cmd.name} Information!`)
      .addField(`Aliases`, cmd.aliases || "None!")
      .addField(`Usage`, cmd.usage || "No Usage")
      .addField(`Description`, cmd.description || "No Description!")
      
      .setTimestamp();

    if (cmd) {
      return message.channel.send(embed2);
    } else {
      return message.channel.send(embed);
    }
  }
};