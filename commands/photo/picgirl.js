const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "picgirl",
  aliases: [],
  description: "Show Photo",
  usage: "Photo",
  run: async (client, message, args) => {
   
    let replies = ["https://cdn.discordapp.com/attachments/608711474952798221/854680023809785896/cuz_226.jpg","https://cdn.discordapp.com/attachments/608711474952798221/854680119804952586/cuz_237.jpg","https://cdn.discordapp.com/attachments/608711474952798221/854680165098979328/cuz_198.png","https://cdn.discordapp.com/attachments/608711474952798221/854680180186021908/cuz_241.jpg","https://cdn.discordapp.com/attachments/608711474952798221/854680201313124372/image0.jpg","https://cdn.discordapp.com/attachments/608711474952798221/854680287064883230/cuz_242.jpg","https://cdn.discordapp.com/attachments/608711474952798221/854680337383817226/cuz_245.jpg","https://cdn.discordapp.com/attachments/608711474952798221/854680400362209280/cuz_248.png","https://cdn.discordapp.com/attachments/608711474952798221/854680401251139625/cuz_249.jpg","https://cdn.discordapp.com/attachments/608711474952798221/854680499993051186/cuz_7.jpg","https://cdn.discordapp.com/attachments/608711474952798221/854680588740984842/cuz_806.jpg","https://cdn.discordapp.com/attachments/608711474952798221/854680611700604958/cuz_249.png","https://cdn.discordapp.com/attachments/608711474952798221/854680613525258250/cuz_250.jpg","https://cdn.discordapp.com/attachments/608711474952798221/854680628821098496/cuz_251.jpg","https://cdn.discordapp.com/attachments/608711474952798221/854680628322369556/cuz_250.png"];

    let result = Math.floor((Math.random() * replies.length));
    
    let photoembed = new Discord.MessageEmbed()

    .setTitle("Girl Photo")
    
      .setColor("black")
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(replies[result]);

    message.channel.send(photoembed);

   
  }
};
