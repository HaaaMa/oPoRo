const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "showemoji",
  aliases: ["se", "Se"],
  description: "get Emojiserver!",
  usage: "se <emoji>",
  run: async (client, message, args) => {



    const emoji = args[0];
    if (!emoji) return message.channel.send(`Please Give Me A Emoji!`);

    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;
      
      const Added = new MessageEmbed()
        .setTitle("Emoji Converter")
        .setColor("#146DF6")
        .addField('<a:waitting:823649927556628481>```Link```', `[Click Me](${Link})`)
        .setImage(Link
        );
      return message.channel.send(Added);
    } else {
      let CheckEmoji = (emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        return message.channel.send(`Please Give Me A Valid Emoji!`);
      message.channel.send(
        `You Can Use Normal Emoji Without Adding In Server!`
      );
    }
  }
};

