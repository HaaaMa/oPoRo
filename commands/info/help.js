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
 
<a:infooporo:823333203459702836>︙**Info** 
\`help\`, \`ping\`, \`Server\`,
\`userinfo\`, \`invite\`, \`uptime\`
\`say\`, \`uinvite\`, \`roles\`
\`stats\`, \`listemoji\`, \`se <emoji>\`,

<a:modoporo:858281897096118272>︙**Moderation** 
\`ban\`, \`unban\`, \`kick\`,
\`mute\`, \`unmute\`, \`clear\`
\`lock\`, \`unlock\`, \`slowmode\`
\`nick\`, \`hide\`, \`unhide\` 

<a:funnyoporo:803086992044589096>︙**Funny**
\`ascii\`, \`avatar\`, \`dicksize\`,
\`howgay\`, \`rate\`, 

\`list_mem\` - \`create_mem\`
\`helpmem\`

<a:gifoporo:854036186868088872>︙**Gifs**
\`boy\`, \`girl\`, \`anime\`,
\`animal\`, \`baby\`, \`couple\`,
\`emoji\`, 

<a:photooporo:854036253778247742>︙**Photos** 
\`Pboy\`, \`Pgirl\`, \`Panime\`,
\`Panimal\`, \`Pbaby\`, \`Pcouple\`,
\`Pemoji\`

<a:textoporo:823650640541909012>︙**Texts**
\`textkurd\` (tk) , \`textenglish\` (te)
\`textarab\` (ta) , \`textturk\` (tt) 
\`textpersian\` (tp)

[Server](https://discord.gg/VWuQfQfjc9) **-** [Invite oPoRo](https://discord.com/api/oauth2/authorize?client_id=814608707412295780&permissions=8&scope=bot)

`)
    .setFooter(`${message.author.username}`)
  //  .setImage(``)
  //  .setTimestamp();
    message.react(`✅`)
 
      return message.channel.send(embed);
    
  }
};
