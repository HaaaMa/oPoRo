const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "textarabic",
  aliases: ["textArabic"],
  description: "Show text",
  usage: "text",
  run: async (client, message, args) => {
    
    
    let sizes = ["إذا زارتک شدّه فاعلم أنّها سحابه صیف عن قلیل تقشع، ولا یخیفک رعدها، ولا یرهبک برقها، فربّما کانت محمّلهً بالغیث","چنت اعاتب بالوكت عرفني بيك :broken_heart: :exclamation:","أخاف أفگد طعم باچر يالمتانيك:wilted_rose:","اسألني واني اختصر لعيونك المده :wilted_rose:","وأستحيت من الله حيل ، وآنه سآجد مر ذكرهم والتهيت :wilted_rose:","ما خربتني وياك غير اليكولون:wilted_rose:","شگلّك يالعلي تسأل.. انا التيهت كلشي وكلشي ما اندل:wilted_rose:","هي مسؤولية من تحبلك انسان :broken_heart: "];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let Result = sizes[Math.floor(Math.random() * sizes.length)];

    message.channel.send(replies[result]).then(message => {
			message.react('🥺').then(r => {
				message.react('🖤');
           });
          });
      }
}
