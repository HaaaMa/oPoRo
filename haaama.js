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




//////////////////////////////////////////////////////////////////




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
      return message.channel.send("You need role to this");
    }
    if (!message.guild.me.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("need Manage_Nickname Role");
    }
    let haaama = message.mentions.members.first();
    if (!haaama) return message.reply(`mention someone!`);

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

client.on("message", storm => {
  if (storm.content.startsWith(prefix + "uinvite")) {
    storm.guild.fetchInvites().then(invs => {
      let user = storm.mentions.users.first() || storm.author;
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      storm.channel.send(`${user} has ${inviteCount} invites.`);
    });
  }
});

///be connected///

client.on("message", storm => {
  if (storm.content.startsWith(prefix + "ninvite")) {
    storm.guild.fetchInvites().then(invs => {
      let user = storm.mentions.users.first() || storm.author;
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      storm.channel.send(`${user} has ${inviteCount} invites.`);
    });
  }
});

////
////
////
////

client.on("message", message => {
  if (message.content.toLowerCase() === prefix + "roles") {
    let roles = message.guild.roles.cache.map(r => `> ${r.name}  `).join("\n");
    let embed = new Discord.MessageEmbed()
      .setTitle("Server Roles")
      .setDescription(" ```javascript\n" + roles + "``` ");
    message.channel.send(embed);
  }
  if (message.content.toLowerCase() === prefix + "help roles") {
    let roles = new Discord.MessageEmbed()
      .setTitle(`Command: roles `)
      .addField("Usage", `${prefix}roles`)
      .addField("Information", "Show All Roles For Server");
    message.channel.send(roles);
  }
});


////
////
////

client.on("message", message => {
  if (message.content.startsWith(prefix + "stats")) {
    message.channel.send({
      embed: new Discord.MessageEmbed()
        .addField("Uptime", timeCon(process.uptime()), true)
        .addField(
          "RAM Usage",
          `${(process.memoryUsage().rss / 1048576).toFixed()}MB`,
          true
        )
        .addField("Guild Count", client.guilds.cache.size, true)
    });
  }
});

function timeCon(time) {
  let days = Math.floor((time % 31536000) / 86400);
  let hours = Math.floor(((time % 31536000) % 86400) / 3600);
  let minutes = Math.floor((((time % 31536000) % 86400) % 3600) / 60);
  let seconds = Math.round((((time % 31536000) % 86400) % 3600) % 60);
  days = days > 9 ? days : "0" + days;
  hours = hours > 9 ? hours : "0" + hours;
  minutes = minutes > 9 ? minutes : "0" + minutes;
  seconds = seconds > 9 ? seconds : "0" + seconds;
  return `${days > 0 ? `${days}:` : ""}${
    (hours || days) > 0 ? `${hours}:` : ""
  }${minutes}:${seconds}`;
}

////
////
////

client.on("message", message => {
  if (message.content === prefix + "hide") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("You Dont Have Perms `MANAGE CHANNELS` :x:");
    message.channel.createOverwrite(message.guild.id, {
      VIEW_CHANNEL: false
    });
    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setTitle("**__Channel hided__**")
      .addField("**Server name**", message.guild.name)
      .addField("**Channel**", message.channel.name)
      .addField("**Moderation**", `<@${message.author.id}>`, true)
      .setColor("RANDOM");
    message.channel.send(embed).then(message => {
      message.react("😶‍🌫️");
    });
  }
});
client.on("message", message => {
  if (message.content === prefix + "unhide") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
      return message.reply("You dont have Perms `MANAGE CHANNELS`:x:");
    message.channel.createOverwrite(message.guild.id, {
      VIEW_CHANNEL: true
    });
    const embed = new Discord.MessageEmbed()
      .setThumbnail(message.author.avatarURL())
      .setTitle("**__Channel unhided__**")
      .addField("**Server name**", message.guild.name)
      .addField("**Channel**", message.channel.name)
      .addField("**Moderation**", `<@${message.author.id}>`, true)
      .setColor("RANDOM");
    message.channel.send(embed).then(messgae => {
      message.react("🤗");
    });
  }
});



////
////
/////

 





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Haaama /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

     ////     Token     ////




     ///    Prefix    ///



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// Haaama /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa /// HaaaMa 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





