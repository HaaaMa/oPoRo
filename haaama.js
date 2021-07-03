const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const { Prefix, Token, Color } = require("./config.js");
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.db = require("quick.db");
client.login('ODE0NjA4NzA3NDEyMjk1Nzgw.YDgVeg.G6j6CiNgwFZYb2gPNQy5i9MaAX8');
const prefix = "1";



client.on("ready", async () => {
  console.log(`ready!`);
  client.user
       .setActivity(`${Prefix}help | ${client.guilds.cache.size} Server`, { type: "PLAYING" })
       .setActivity(`HaaaMa`)
    .catch(error => console.log(error));
});

client.on("message", async message => {
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  if (message.content.match(new RegExp(`^<@!?${client.user.id}>`))) {
    return message.channel.send(`My Prefix is \`${Prefix}\``);
  }
});

let modules = ["fun", "info", "moderation", "gif", "photo", "text"];

modules.forEach(function(module) {
  fs.readdir(`./commands/${module}`, function(err, files) {
    if (err)
      return new Error(
        "Missing Folder Of Commands! Example : Commands/<Folder>/<Command>.js"
      );
    files.forEach(function(file) {
      if (!file.endsWith(".js")) return;
      let command = require(`./commands/${module}/${file}`);
      console.log(`${command.name} Command Has Been Loaded - ✅`);
      if (command.name) client.commands.set(command.name, command);
      if (command.aliases) {
        command.aliases.forEach(alias =>
          client.aliases.set(alias, command.name)
        );
      }
      if (command.aliases.length === 0) command.aliases = null;
    });
  });
});

client.on("message", async message => {
  if (message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  if (!message.content.startsWith(Prefix)) return;

  const args = message.content
    .slice(Prefix.length)
    .trim()
    .split(" ");
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command =
    client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));

  if (!command) return;

  if (command) {
    if (!message.guild.me.hasPermission("MEMBER"))  /// changed
      return message.channel.send(
        "I Don't Have Enough Permission To Use This Or Any Of My Commands | Require : Member"
      );
    command.run(client, message, args);
  }
  console.log(
    `User : ${message.author.tag} (${message.author.id}) Server : ${message.guild.name} (${message.guild.id}) Command : ${command.name}`
  );
});


const channelid = "843947526432096286"    //id channele vc
client.on("ready", () => {
    const channel = client.channels.cache.get(channelid);
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
        console.log("Successfully connected.");
    }).catch(e => {
        console.error(e);
    });
}); 





client.on("message", message => {
  if (message.content === prefix + "lock") {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
   

    if (!message.channel.guild) return;

    let bwan = new Discord.MessageEmbed()

      .setFooter("Channel Locked 🔒")
      .setColor("RANDOM")
      .setTitle("Locked");
      message.react("🔒")
    message.channel.send(bwan);

    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: false
    });
  }
});

//////////////////////////////////////////////////////////////////

client.on("message", message => {
  if (message.content === prefix + "unlock") {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
   

    if (!message.channel.guild) return;

    let bwan = new Discord.MessageEmbed()

      .setFooter("Channel unlock 🔓")
      .setColor("RANDOM")
      .setTitle("Channel unlcoked 🔓");

    message.channel.updateOverwrite(message.guild.id, {
      SEND_MESSAGES: true
    });
  }
});



client.on("message", message => {
  if (message.content.startsWith(prefix + "listem", "listemoji")) {
    let Emojis = "";
    let EmojisAnimated = "";
    let EmojiCount = 0;
    let Animated = 0;
    let OverallEmojis = 0;
    function Emoji(id) {
      return client.emojis.cache.get(id).toString();
    }
    message.guild.emojis.cache.forEach(emoji => {
      OverallEmojis++;
      if (emoji.animated) {
        Animated++;
        EmojisAnimated += Emoji(emoji.id);
      } else {
        EmojiCount++;
        Emojis += Emoji(emoji.id);
      }
    });
    let Embed = new Discord.MessageEmbed()
      .setTitle(`Emojis in ${message.guild.name}.`)
      .setDescription(
        `**Animated [${Animated}]**:\n${EmojisAnimated}\n\n**Standard [${EmojiCount}]**:\n${Emojis}\n\n**All Emoji [${OverallEmojis}]**`
      )
      .setColor(`RANDOM`);
    message.channel.send(Embed);
  }
});



client.on("message", function(message) {
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  if (message.content.startsWith(prefix + "say")) {
    if (!message.member.hasPermission("MANAGE_MESSAGE")) if (!args) return;
    message.channel.send(`** ${args}**`);
  }
});



client.on("message", async message => {
  if (message.content.startsWith(prefix + "uptime")) {
    let day = Math.floor(client.uptime / 86400000);
    let oclock = Math.floor(client.uptime / 3600000) % 24;
    let minte = Math.floor(client.uptime / 60000) % 60;
    let second = Math.floor(client.uptime / 1000) % 60;

    return message.channel.send(
      `__Uptime:__\n${day}d ${oclock}h ${minte}m ${second}s`
    );
  }
});


///
///
///
///


client.on("message", async message => {
  if (message.content.startsWith(prefix + "nick")) {
    let args = message.content.split(" ").slice(1);

    let hama = args.slice(1).join(" ");

    if (!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("pewist ba role bo anjamdane amkara");
    }
    if (!message.guild.me.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("rolem niya tawakw am kara bkam");
    }
    let haaama = message.mentions.members.first();
    if (!haaama) return message.reply(`kasek mention bka !`);

    const embed = new Discord.MessageEmbed()

      .setColor("RANDOM")
      .setDescription(
        `Done changed nickname  ${haaama.user.username} to ${hama}`
      );

    await message.channel.send(embed);

    haaama.setNickname(hama);
  }
});


///
///
///
///

client.on("message", message => {
  if (!message.channel.guild) return;
  let room = message.content
    .split(" ")
    .slice(1)
    .join(" ");
  let channel =
    message.guild.channels.cache.find(channel => channel.name === `${room}`) ||
    message.mentions.channels.first();
  if (message.content.startsWith(prefix + "set zkr")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room)
      return message.channel.send(
        "**Please Type The Name Channel Or mention**"
      );
    if (!channel) return message.channel.send("**Cant Find This Channel**");
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL())
      .setThumbnail(message.author.avatarURL())
      .setTitle("**✅Done Check The Zkr Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Server", `${message.guild.name}`)
      .addField("Requested By:", `${message.author}`)
      .setColor("RANDOM")
      .setFooter(`${client.user.username}`)
      .setTimestamp();
    message.channel.send(embed)[message.guild.id] = {
      channel: channel.name
    };
    client.writeFile("./zkr.json", JSON.stringify(client), err => {
      if (err) console.error(err);
    });
  }
}); 


/////

client.on("message", message => {
  var az = [
    "**سبحان الله العلي العظيم**",
    "**الحمد لله رب العالمين**",
    "**لا تنسى ذكر الله **",
    "**اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِي العظيم. **",
    "**قل أعوذ برب ٱلفلق، من شر ما خلق، ومن شر غاسق إذا وقب، ومن شر ٱلنفثت فى ٱلعقد، ومن شر حاسد إذا حسد. **",
    "**قل أعوذ برب ٱلناس، ملك ٱلناس، إله ٱلناس، من شر ٱلوسواس ٱلخناس، ٱلذى يوسوس فى صدور ٱلناس، من ٱلجنة وٱلناس **",
    "** أصـبحنا وأصـبح المـلك لله والحمد لله ، لا إله إلا الله وحده لا شريك له، له المـلك وله الحمـد، وهو على كل شيء قدير ، رب أسـألـك خـير ما في هـذا اليوم وخـير ما بعـده ، وأعـوذ بك من شـر ما في هـذا اليوم وشر ما بعـده، رب أعـوذبك من الكسـل وسـوء الكـبر ، رب أعـوذ بك من عـذاب في النـار وعـذاب في القـب**",
    "**اللهـم أنت ربـي لا إله إلا أنت ، خلقتنـي وأنا عبـدك ، وأنا علـى عهـدك ووعـدك ما استـطعـت ، أعـوذبك من شـر ما صنـعت ، أبـوء لـك بنعـمتـك علـي وأبـوء بذنـبي فاغفـر لي فإنـه لا يغـفر الذنـوب إلا أنت . **",
    "**رضيـت بالله ربـا وبالإسلام ديـنا وبمحـمد صلى الله عليه وسلم نبيـا.  **",
    "** اللهـم إنـي أصبـحت أشـهدك ، وأشـهد حملـة عـرشـك ، وملائكتك ، وجمـيع خلـقك ، أنـك أنـت الله لا إله إلا أنـت وحـدك لا شريك لـك ، وأن  محمـدا عبـدك ورسـولـك. **",
    "**حسبـي الله لا إله إلا هو علـيه توكـلت وهو رب العرش العظـيم.  **",
    "**بسـم الله الذي لا يضـر مع اسمـه شيء في الأرض ولا في السمـاء وهـو السمـيع العلـيم. **",
    "**اللهـم بك أصـبحنا وبك أمسـينا ، وبك نحـيا وبك نمـوت وإلـيك النـشور.  **",
    "**اللهم إني أعوذ بك من الهم والحزن، وأعوذ بك من العجز والكسل، وأعوذ بك من الجبن والبخل، وأعوذ بك من غلبة الدين، وقهر الرجال.  **",
    "**أستغفر الله وأتوب إليه  **",
    "**لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير.  **",
    "** اللهم إني أسألك علما نافعا، ورزقا طيبا، وعملا متقبلا.**"
  ];

  if (message.content.startsWith(`${prefix}startzkr`)) {
    if (!message.guild.member(message.author).hasPermission("ADMINISTATOR")) {
      message.channel.send("**You dont Have premission`administrator` **");
    } else {
      setInterval(() => {
        let azkar = az[Math.floor(Math.random() * az.length)];
        let sendrom = message.guild.channels.cache.find(
          channel => channel.name === [message.guild.id].channel
        );
        let embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .setTitle("[ اذكار ]")
          .setDescription(azkar);
        sendrom.send(embed);
      }, 6000);
    }
  }
}); 




















//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Haaama /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

     ////     Token     ////




     ///    Prefix    ///



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Haaama /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





