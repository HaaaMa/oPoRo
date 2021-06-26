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
    .setTitle(`Help oPoRo!`)

    .setDescription(`
<a:infooporo:823333203459702836> | **Info**
\`help\`, \`ping\`, \`serverinfo\`,
\`userinfo\`, \`invite\`

<a:modoporo:858281897096118272> | **Moderation**
\`ban\`, \`unban\`, \`kick\`,
\`mute\`, \`unmute\`, \`clear\`

<a:funnyoporo:803086992044589096> | **Funny**
\`ascii\`, \`avatar\`, \`dicksize\`,
\`howgay\`, \`rate\`

<a:gifoporo:854036186868088872> | **Gifs**
\`boy\`, \`girl\`, \`anime\`,
\`animal\`, \`baby\`, \`couple\`,
\`emoji\`

<a:photooporo:854036253778247742> | **Photos**
\`picboy\`, \`picgirl\`, \`picanime\`,
\`picanimal\`, \`picbaby\`, \`piccouple\`,
\`picemoji\`

<a:textoporo:823650640541909012> | **Texts**
\`textkurdish\`, \`textenglish\`, \`textarabic\`


[invite](https://discord.com/api/oauth2/authorize?client_id=814608707412295780&permissions=8&scope=bot)
[Server](https://discord.gg/VWuQfQfjc9)

`)
    .setFooter(`${message.author.username}`)
    .setImage(``)
    .setTimestamp();
    message.react(`✅`)
 
      return message.channel.send(embed);
    
  }
};
