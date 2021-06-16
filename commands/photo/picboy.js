const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "picboy",
  aliases: [],
  description: "Show Photo",
  usage: "Photo",
  run: async (client, message, args) => {
   
    let replies = ["https://cdn.discordapp.com/attachments/608711478496854019/854669202296537098/u.jpg","https://cdn.discordapp.com/attachments/608711478496854019/854668865904443412/222.PNG","https://cdn.discordapp.com/attachments/608711478496854019/854654773626535956/85b2e3abf10ec233d09037ccd132c072.jpg","https://cdn.discordapp.com/attachments/608711478496854019/854636030358978600/66fd46db31337ad6c3ff1f926a12e505.png","https://cdn.discordapp.com/attachments/608711478496854019/854632586399580210/69666257_1074962556227390_6786195240632543660_n_1.jpg","https://cdn.discordapp.com/attachments/608711478496854019/854632572856434688/a545d531b602dafef8050eb909fa1e07.jpg","https://cdn.discordapp.com/attachments/608711478496854019/854632561769971752/ab5f3d8d71ea0deb9b82913192006f4a.jpg","https://cdn.discordapp.com/attachments/608711478496854019/854631059852361738/3396b2405f3be10b0467173bbdcbfaa5.png","https://cdn.discordapp.com/attachments/608711478496854019/854624683365236736/fd171d07d4c36e4665ff24d28427693c.gif","https://cdn.discordapp.com/attachments/608711478496854019/854624605330604052/c8db521dee770bb35cab5416032caa29.jpg","https://cdn.discordapp.com/attachments/608711478496854019/854624590713061426/8f29d28ee43057d3e4677fc23986d606.jpg","https://cdn.discordapp.com/attachments/608711478496854019/854616002359984138/image0.jpg","https://cdn.discordapp.com/attachments/608711478496854019/854615525186469888/image0.jpg","https://cdn.discordapp.com/attachments/608711478496854019/854615509927198730/image0.jpg","https://cdn.discordapp.com/attachments/608711478496854019/854615502562787328/image0.jpg","https://cdn.discordapp.com/attachments/608711478496854019/854615497563308052/image0.jpg","https://cdn.discordapp.com/attachments/608711478496854019/854615483197161472/image0.jpg","https://cdn.discordapp.com/attachments/608711478496854019/854615485844946974/image0.jpg","https://cdn.discordapp.com/attachments/608711478496854019/854613488008822804/a865efe518743c8a677c0b5b90795d7a.jpg"];

    let result = Math.floor((Math.random() * replies.length));
    
    let photoembed = new Discord.MessageEmbed()

    .setTitle("Boy Photo")
    
      .setColor("black")
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(replies[result]);

    message.channel.send(photoembed);

   
  }
};
