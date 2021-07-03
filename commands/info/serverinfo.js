const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "serverinfo",
  aliases: ["infoserver"],
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
      .addField(`Roles Count`, Roles, true)
      .addField(`Emojis Count`, Emojis, true)
      .addField(`🚦| **Members:**`, Members, true)
      .addField(`🔳| **Channels:**`, ${guild.channels.cache.size}`, true)
      .addField(" 🌐| **Region**:", `${guild.region}`) 
      .addField(`🤖| **Bots Count**`, Bots, true)
      .addField(`✅| **Created:**`, guild.createdAt.toDateString())
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

client.on("message", prof => {
  if (prof.content.startsWith(prefix + "server", "serverinfo", "Server", "infoserver")) {
    var professor = new Discord.MessageEmbed()
      .setAuthor(prof.guild.name)
      .setThumbnail(prof.guild.iconURL())
      .setTitle("**Info Server**")
      .addField("", `${prof.guild.name}`)
      .addField("", `${prof.guild.owner}`)
      .addField("", `${prof.guild.id}`)
      .addField("", `${prof.guild.createdAt.toLocaleString()}`)
      .addField("", `${prof.guild.memberCount}`)
      .addField("", `)
     
      .addField(" **Roles:**", ` ${prof.guild.roles.cache.size}`)
      .setFooter(`Requested | ${prof.author.tag}`, prof.author.avatarURL())
      .setTimestamp();
    prof.channel.send(professor);
  }
});

    message.channel.send(embed);

    
  }
};
