const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "text",
  aliases: ["text1", "textkurdish", "tk"],
  description: "Show Member text!",
  usage: "text <Mention Member>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let sizes = [
      "Text1",
      "Text2",
      "Text3",
      "Text3",
      "Text4",
      "Text5",
      "Text6",
      "Text7",
      "Text8",
      "Text9",
      "Text10",
      "Text11",
      "Text12",
      "Text13",
      "Text14",
      "Text15",
      "Text16",
      "Text17"
    ];

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