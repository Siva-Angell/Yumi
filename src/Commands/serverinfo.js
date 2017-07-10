let Discord = require('discord.js');
exports.run = function(yumi, msg) {
  let guild = msg.guild
   let embed = new Discord.RichEmbed()
     .setTitle(guild.name)
	 .setThumbnail(guild.iconURL)
	 .addField("Server Members:", guild.memberCount)
	 .addField("Server Owner:", guild.owner)
	 .addField("Server Region:", guild.region)
     .addField("Server Roles:", guild.roles.map(r => r.name).join(",  "));
  msg.channel.send({embed})
};