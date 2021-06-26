const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Prefix } = require("../../config.js");

module.exports = {
  name: "textenglish",
  aliases: ["te", "teng", "englisht"],
  description: "Show text",
  usage: "text",
  run: async (client, message, args) => {
    
    
    let replies = ["Never bend your head. Always hold it high. Look the world straight in the eye. - Helen Keller","A year later you wish you had started today","°It will be morning tonight, be patient°","Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein","It is during our darkest moments that we must focus to see the light.","Believe you can and you're halfway there. - Theodore Roosevelt","Some people look for a beautiful place. Others make a place beautiful. - Hazrat Inayat Khan","I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean","Spread love everywhere you go. - Mother Teresa","Gods decide is out of our hindsight power but it is always beneficial for us.","When you have a dream, you've got to grab it and never let go.","When you are not well, memories come to you sooner than anyone else.","If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely. - Roald Dahl","When you catch in a calumny, you know your real friends.","Let us make our future now, and let us make our dreams tomorrow's reality. - Malala Yousafzai","A successful man is one who can lay a firm foundation with the bricks others have thrown at him","In order to succeed, your desire for success should be greater than your fear of failure","If size mattered the elephant would be the king of jungle","You will reap what you plant in your minds farm","No matter what you're going through, there's a light at the end of the tunnel. - Demi Lovato"];

    let Member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.member;

    let result = Math.floor((Math.random() * replies.length));

    message.channel.send(replies[result]).then(message => {
			message.react('🥺').then(r => {
				message.react('🖤');
           });
          });
      }
}
