const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "picemoji",
  aliases: ["pemoji", "Pemoji"],
  description: "Show Photo",
  usage: "Photo",
  run: async (client, message, args) => {
   
    let replies = ["https://media.discordapp.net/attachments/790836700561670145/791251020620496896/image3.png", "https://media.discordapp.net/attachments/790836700561670145/791251044289609738/image1.png", "https://media.discordapp.net/attachments/790836700561670145/791251045036326912/image3.png", "https://media.discordapp.net/attachments/790836700561670145/791251081736749076/image0.png", "https://media.discordapp.net/attachments/790836700561670145/791251124421263400/image6.png", "https://media.discordapp.net/attachments/790836700561670145/791251124249690124/image5.png", "https://media.discordapp.net/attachments/790836700561670145/791251135817056266/image3.png", "https://media.discordapp.net/attachments/790836700561670145/791251356366929930/image0.png", "https://media.discordapp.net/attachments/790836700561670145/791251414935928892/image1.png", "https://media.discordapp.net/attachments/790836700561670145/791251471965487104/image0.png", "https://media.discordapp.net/attachments/697145837062455411/863390162515132446/20210710_135053.jpg", "https://media.discordapp.net/attachments/697145837062455411/863382556694806538/20210710_143334.jpg", "https://media.discordapp.net/attachments/697145837062455411/863377016043864084/gri_kedii.png", "https://media.discordapp.net/attachments/697145837062455411/862460991815942154/images.png", "https://images-ext-1.discordapp.net/external/BTwl4m1quFjGUrZ4iUmomJu8DkWcicdDG0r68jzgueo/https/cdn.discordapp.com/emojis/620285464829624340.png", "https://images-ext-1.discordapp.net/external/Efm1Owr-6f2xANmpWDHLJ6-yYU3SCp3_ewQpLajRW5I/https/cdn.discordapp.com/emojis/811938426928496681.png", "https://images-ext-1.discordapp.net/external/m2xmfrCJWV0sqx-V_fh6qC1VCmBWWMnKVLAeVz8qTaM/https/cdn.discordapp.com/emojis/793964078112440330.png", "https://images-ext-2.discordapp.net/external/Czmq6Hj17d4bUbxUm7WreGhUdnvZiFZrqZRWK7ukeuE/https/cdn.discordapp.com/emojis/701641336272453798.png", "https://images-ext-2.discordapp.net/external/uPpuCF_RoMO_Gym8rjA595JRib1JRK_ZlcYW67V-_Xo/https/cdn.discordapp.com/emojis/739550387845201972.png", "https://images-ext-1.discordapp.net/external/eZI3tSPeFFupPqK1-sUwuMtV5Dq4-bOEpJmUHQCnmF0/https/cdn.discordapp.com/emojis/779664991534972959.png", "https://images-ext-1.discordapp.net/external/CSSKcbMPlBAwlaX6QL-siw8nmzJhd-ey8-gh3PlYhKs/https/cdn.discordapp.com/emojis/593182467620601869.png", "https://images-ext-2.discordapp.net/external/cekcCUrz6mXd2ufqw_Bb48ZN-8IRfOQYMJXS8tY8fwE/https/cdn.discordapp.com/emojis/583741337342443521.png", "https://images-ext-1.discordapp.net/external/ldy1xdt22I2R51H9I1WY3tI2vf0GlkHHYqp5SXO_fTI/https/cdn.discordapp.com/emojis/768584693300854784.png", "https://images-ext-1.discordapp.net/external/2-MQn3zSKUafww7L1iOKxJqnvpm6p2kWwSvvmh-vYpk/https/cdn.discordapp.com/emojis/768584712087273483.png"];

    let result = Math.floor((Math.random() * replies.length));
    
    let photoembed = new Discord.MessageEmbed()

    .setTitle("Emoji Photo")
    
      .setColor("RANDOM")
    .setFooter(`${message.author.tag} `, message.author.avatarURL)
    .setImage(replies[result]);

    message.channel.send(photoembed);

   
  }
};
