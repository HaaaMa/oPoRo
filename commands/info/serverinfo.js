const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "serverinfo",
  aliases: ["infoserver", "Server", "server"],
  description: "Show Server Information!",
  usage: "Serverinfo",
  run: async (client, message, args) => {
    
    const guild = message.guild;
    const Emojis = guild.emojis.cache.size || "No Emoji!";
    const Roles = guild.roles.cache.size || "No Roles!";
    const Members = guild.memberCount;
    const Humans = guild.members.cache.filter(member => !member.user.bot).size;
    const Bots = guild.members.cache.filter(member => member.user.bot).size;

    const embed = new MessageEmbed()
      .setTitle(guild.name + " Information!")
      .setColor("RANDOM")
      .setThumbnail(guild.iconURL())
      .addField(`⚠️| **Server Name:**`, guild.name, true)
      .addField(`🔰| **Server ID:**`, `${guild.id}`, true)
      .addField(`👑| **Owner Server:**`, `${guild.owner}`, true)
      .addField(`💮| **Roles Count**`, Roles, true)
      .addField(`📧| **Emojis Count**`, Emojis, true)
      .addField(`🚦| **Members:**`, Members, true)
      .addField(`🌐| **Region**:**`, `${guild.region}`) 
      .addField(`🤖| **Bots Count**`, Bots, true)
      .addField(`✅| **Created:**`, guild.createdAt.toDateString())
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

 

    message.channel.send(embed);

    
  }
};
