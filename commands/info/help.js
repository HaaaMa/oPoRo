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
    .setColor("RANDOM")
    .setTitle(`Help oPoRo!`)

    .setDescription(`
 
<a:infooporo:823333203459702836> **Info** <a:infooporo:823333203459702836>
\`help\`, \`ping\`, \`serverinfo\`,
\`userinfo\`, \`invite\`

<a:modoporo:858281897096118272> **Moderation** <a:modoporo:858281897096118272>
\`ban\`, \`unban\`, \`kick\`,
\`mute\`, \`unmute\`, \`clear\`

<a:funnyoporo:803086992044589096> **Funny** <a:funnyoporo:803086992044589096>
\`ascii\`, \`avatar\`, \`dicksize\`,
\`howgay\`, \`rate\`

<a:gifoporo:854036186868088872> **Gifs** <a:gifoporo:854036186868088872>
\`boy\`, \`girl\`, \`anime\`,
\`animal\`, \`baby\`, \`couple\`,
\`emoji\`

<a:photooporo:854036253778247742> **Photos** <a:photooporo:854036253778247742>
\`Pboy\`, \`Pgirl\`, \`Panime\`,
\`Panimal\`, \`Pbaby\`, \`Pcouple\`,
\`Pemoji\`

<a:textoporo:823650640541909012> **Texts** <a:textoporo:823650640541909012>
\`textkurdish\` (tk) , \`textenglish\` (te) , \`textarabic\` (ta)
\`textturkish\` (tt) , \`textpersian\` (tp)


[invite](https://discord.com/api/oauth2/authorize?client_id=814608707412295780&permissions=8&scope=bot) - [Server](https://discord.gg/VWuQfQfjc9)

`)
    .setFooter(`${message.author.username}`)
    .setImage(``)
  //  .setTimestamp();
    message.react(`✅`)
 
      return message.channel.send(embed);
    
  }
};
