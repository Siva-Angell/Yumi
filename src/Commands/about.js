const Discord = require('discord.js');
exports.run = function(client, msg) {
  const embed = new Discord.RichEmbed()
   .setTitle("Hello :wave:, I am Yumi! Made by AugvstxD#1793!")
   .setDescription("I am Yumi, I am a multifunctional discord bot made by [AugvstxD](https://keybase.io/AnAuguseh)!")
   .addField("**v3.0.4_1**.", "What does v3.0.4_1 mean?\nWell, 3.0.4 is a version number and the _1 is a build version.")
   .addField("Support Server", "Need the support server? Go to [here](https://discord.gg/T2pyUvf) or do `y/server`!")
   .addField("Upcoming Features & Current Features", `CURRENT: Fun & Utility command\nUpcoming: Music :notes:, Moderation <:blobhammer:316731816146894858>, MORE fun commands..`)
   .setFooter("hi")
msg.channel.send({embed: embed})
}
