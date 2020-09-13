const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");
const covid = require("novelcovid");

module.exports = {
  name: "covid-19",
  aliases: ["corona", "covid", "coronavirus"],
  category: "fun",
  description: "Show Status Of Covid-19!",
  usage: "covid-19",
  accessableby: "everyone",
  run: async (client, message, msg, args) => {
    message.delete();
    const covidStats = await covid.all();
    const Covid19Embed = new MessageEmbed()
      .setTitle("Covid-19 Stats!")
      .setColor(Color)
      .addFields(
        {
          name: `Cases`,
          value: covidStats.cases.toLocaleString(),
          inline: true
        },
        {
          name: `Cases Today`,
          value: covidStats.todayCases.toLocaleString(),
          inline: true
        },
        {
          name: `Deaths`,
          value: covidStats.deaths.toLocaleString(),
          inline: true
        },
        {
          name: `Deaths today`,
          value: covidStats.deaths.toLocaleString(),
          inline: true
        },
        {
          name: `Recovered`,
          value: covidStats.recovered.toLocaleString(),
          inline: true
        },
        {
          name: `Recovered Today`,
          value: covidStats.todayRecovered.toLocaleString(),
          inline: true
        },
        {
          name: `Currently Infected`,
          value: covidStats.active.toLocaleString(),
          inline: true
        },
        {
          name: `Critical Condition`,
          value: covidStats.critical.toLocaleString(),
          inline: true
        },
        {
          name: `Tested`,
          value: covidStats.tests.toLocaleString(),
          inline: true
        }
      );
    message.channel.send(Covid19Embed);
  }
};