const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "textpersian",
  aliases: ["tp", "tpersian", "persiant"],
  description: "Show text",
  usage: "text",
  run: async (client, message, args) => {
    
    
    let replies = ["راه خودتونو با ذهن خودتون بسازید!", "ازونایی بترس که فکر میکنی خوبن چون نمیدونی چقدر بدن! - HaaaMa", "گاهی مرگ شوخی می کند و در چهره ی دلتنگی ظاهر میشود - HaaaMa", "وقتی حالت خوب نيست خاطره ها زود تر از همه ميان به عيادتت.", "‌دلداری دادناتون بوی مخ زدن میده! - HaaaMa", "درختی به ‌دور از ‌جنگل!", "‌وقتي همه پا ميدن خوب كراش ديگه چيه؟! - HaaaMa", "کاش بعضیا یاد میگرفتن با خراب کردن اینو اون، خودشون درست نمیشن :) - HaaaMa", "آنقدر مرگ را زندگی کرده ام که بوی کفن میدهد پیراهنم... - HaaaMa", "‏آدما میرن و منم وسط راه ایستادم و به رفتنشون نگاه میکنم چون میدونم هرگز قرار نیست دوباره برگردن.", "همیشه کسانی هستند که پرواز تو را نمی خواهند ببینند، تو به پرواز فکر کن، نه به آنها - HaaaMa", "~بجنگ واسه ارزوهایت", "شازده ڪوچولو : میگن بعضے عشق‌ها، عشق نیست دیوانگیہ ! روباه : عشقے ڪہ توش دیوانگے نباشہ، عشق نیست ؛ فقط حس عادتہ ...!", "‏کاش اطرافیانم بفهمن وقتی هندزفری تو گوشمه کمتر باهام حرف بزنن :)", "ب بعضیا باس گفت: تو با کی نبودی؟ اینو بگو؟(: ", "وقتی حالت خوب نيست خاطره ها زود تر از همه ميان به عيادتت."];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let result = Math.floor((Math.random() * replies.length));

    message.channel.send(replies[result]).then(message => {
			message.react('💙').then(r => {
				message.react('🦑');
           });
          });
      }
}
