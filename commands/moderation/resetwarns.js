const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "resetwarns",
  aliases: ["resetwarnings", "resetwarning", "resetwarn"],
  description: "Reset User Warnings!",
  usage: "Resetwarns <Mention User> | <Reason>",
  run: async (client, message, args) => {
    //Start
    message.delete();

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!Member) return message.channel.send(`Please Mention A User!`);

    let Reason = args.slice(1).join(" ");

    client.db.set(`Warnings_${message.guild.id}_${Member.user.id}`, null);

    let Warnings = client.db.get(
      `Warnings_${message.guild.id}_${Member.user.id}`
    );

    let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`Member Warnings Resetted!`)
      .setDescription(`${Member.user.username} Warnings Has Been Resetted Successfully!`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
