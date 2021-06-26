const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "help",
  aliases: ["h", "Help"],
  description: "Show Help Command",
  usage: "Help",
  run: async(client, message, args) => {
 
    
    
    let embed = new MessageEmbed()
    .setColor("BLACK")
    .setTitle(`Help Commands!`)

    .setDescription(`
**Info**
\`help\`, \`ping\`, \`serverinfo\`,
\`userinfo\`, \`invite\`

**Moderation**
\`ban\`, \`unban\`, \`kick\`,
\`mute\`, \`unmute\`, \`clear\`

**Funny**
\`ascii\`, \`avatar\`, \`dicksize\`,
\`howgay\`, \`rate\`

**Gifs**
\`boy\`, \`girl\`, \`anime\`,
\`animal\`, \`baby\`, \`couple\`,
\`emoji\`

**Photos**
\`picboy\`, \`picgirl\`, \`picanime\`,
\`picanimal\`, \`picbaby\`, \`piccouple\`,
\`picemoji\`

**Texts**
\`textkurdish\`, \`textenglish\`, \`textarabic\`


`)
    .setFooter(`${message.author.username}`)
    .setImage(``)
    .setTimestamp();
    message.react(`✅`)
 
      return message.channel.send(embed);
    
  }
};
