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
    message.delete();
    let sizes = ["https://cdn.discordapp.com/attachments/608711476219478045/854727282261884950/Man_PP_Gif_66.gif","https://cdn.discordapp.com/attachments/608711476219478045/854725792176013312/Gif12.gif"];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = sizes[Math.floor(Math.random() * sizes.length)];

    let embed = new MessageEmbed()
      .setColor(Color)
  //    .setTitle(`Pp v2 Machine`)
      .setDescription(`\n${Result}`)
 //     .setFooter(`Requested by ${message.author.username}`)
//      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
