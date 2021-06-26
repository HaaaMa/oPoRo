const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "textturk",
  aliases: ["tt", "tturk", "turkt"],
  description: "Show text",
  usage: "text",
  run: async (client, message, args) => {
    
    
    let replies = ["Çok düşünme seni mutlu eden şeyi yap.", "Gerçek Aşk Bedel Ister Beden Diğil ....!!", "Yok bir sitemim hayata,her şey kısmet...", "Adini kalbimi yazdim", "Önle Kolaysa Gel Başimdan , Kaldir At Sevdani", "şimdi ! Bıçağın üstüne gidip şarkı söylerim Ölüm bile seni sevdiğimi biliyor ..", "Seni Gizlice Seviyorum", "Ben bu kadar çok şey öğrendim ve sen yoksun", "Güzel Şeyler Hiç Bitmesin Mesela Senin Sevgin", "Sadece ölüm kavuşmamamız için sebeptir...!", "Güzel Şeyler Hiç Bitmesin Mesela Senin Sevgin", "Güzel Şeyler Hiç Bitmesin Mesela Senin Sevgin", "Anne, ben diyar diyar umudun savaşçısı,Bir tutam sevgi için dağladım gözlerimi.", "büyüdüm anne şimdi senden habersiz ağlıyorum...", "Güzel Şeyler Hiç Bitmesin Mesela Senin Sevgin", "İnsanlar incinecek ve mutlu ol diyecekler.", "Bir gün birini delmemeyi öğreneceğim,Kendim bile değil ..."];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let result = Math.floor((Math.random() * replies.length));

    message.channel.send(replies[result]).then(message => {
			message.react('🤍').then(r => {
				message.react('🥺');
           });
          });
      }
}
