let Discord = require('discord.js');
exports.run = function(ayane, msg, args) {
if (!args) {
	msg.reply("Please mention a user!");
  }
  let embed = new Discord.RichEmbed()
     .setTitle("Yumi | Userinfo")
	 .setThumbnail(`${msg.author.avatarURL}`)
	 .setDescription(`User: ${msg.author.username}#${msg.author.discriminator}`)
	 .addField("Currently:", `${msg.author.presence.status.toUpperCase()}`, true)
	 .addField("Playing:", `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
	 .addField("Current Roles:", `${msg.member.roles.filter(r => r.name).size}`)
	 .addField("Is Bot?", `${msg.author.bot.toString().toUpperCase()}`)
	 .setFooter("Yumi, made by AugvstxD#1793")
	 .setTimestamp()
  msg.channel.send({embed})
};