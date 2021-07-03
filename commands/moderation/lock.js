const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "lock",
  aliases: ["lock", "Lock", "lk"],
  description: "locked channel!",
  usage: "locked",
  run: async (client, message, args) => {


   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("You don't have enough Permissions")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("")
   .setTimestamp()
   .setThumbnail(message.author.avatarURL({dynamic: "true"}))
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setDescription(`
🔒 **__Locked Channel__**
**Channel Name**: <#${message.channel.id}>
**Locked By**: <@${message.author.id}>
**Channel Status**: Send Message <a:emoji_21:791254445261455382>
`)
   .setColor("BLACK");
   await message.channel.send(embed);
}
}
