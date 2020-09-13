const Discord = require("discord.js");
const ms = require("ms");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "tempban",
  aliases: [],
  description: "Tempban A Member!",
  usage: "Tempban <Mention Member> <Time>",
  run: async (client, message, args) => {
    //Start
    message.delete();
    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        `You Don't Have Permission To Use This Command!`
      );

    let Member = message.mentions.users.first();

    if (!Member)
      return message.channel.send(
        `Please Mention A Member That You Want To Ban!`
      );

    if (!message.guild.members.cache.get(Member.id))
      return message.channel.send(`Please Mention A Valid Member!`);

    if (Member.id === message.author.id)
      return message.channel.send(`You Can't Ban Your Self!`);

    if (Member.id === client.user.id)
      return message.channel.send(`Please Don't Ban Me ;-;`);

    if (Member.id === message.guild.owner.user.id)
      return message.channel.send(`You Can't Ban Owner Of Server!`);

    let User = message.guild.member(Member);

    if (Member.roles) {
      let BotRole = message.guild.member(message.guild.me).roles.highest
        .position;

      let Role = User.roles.highest.position;

      let UserRole = message.member.roles.highest.position;

      if (UserRole <= Role)
        return message.channel.send(
          `I Can't Tempban That Member Because That Member Has Role Position Is Higher Than My Role Or Same Role As You!`
        );

      if (BotRole <= Role)
        return message.channel.send(
          `I Can't Tempban That Member Because That Member Has Role Position Is Higher Than My Role Or Same Role As Me!`
        );
    }

    if (!User.bannable) return message.channel.send(`I Can't Ban That Member!`);

    let Time = args.slice(1).join(" ");

    if (!Time) return message.channel.send(`Please Give Time Example : 1d`);

    try {
      console.log(`Member Is Going To Get Ban!`);
      setTimeout(function() {
        User.ban({ reason: "No Reason Provided!" });
      }, 2000);
      let embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setTitle(`Member Banned!`)
        .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
        .addField(`Banned Member`, `${Member.tag} (${Member.id})`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();
      if (User && Member.bot === false)
        Member.send(
          `You Have Been Banned From **${message.guild.name}** For
            "No Reason Provided!"`
        );
      message.channel.send(embed);
      console.log(
        `User: ${Member.tag} (${Member.id}) Just Got Banned From ${message.guild.name} For No Reason Provided!`
      );
    } catch (error) {
      message.channel
        .send(
          `I Can't Tempban That Member Maybe Member Has Higher Role Than Me & My Role Is Lower Than Member!`
        )
        .then(() => console.log(error));
    }

    let embed2 = new Discord.MessageEmbed()
      .setColor(Color)
      .setTitle(`Member Unbanned!`)
      .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
      .addField(`Unbanned Member`, `${Member.tag} (${Member.id})`)
      .setFooter(`Requested by ${message.author.username}`)
      .setTimestamp();

    setTimeout(function() {
      message.guild.members.unban(Member.id, "No Reason Provided!");
      message.channel.send(embed2);
    }, ms(Time));
    //End
  }
};
