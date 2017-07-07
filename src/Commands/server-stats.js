const Discord = require('discord.js');
exports.run = function(ayane, msg) {
        var bot_farms = ayane.guilds.filter(g => ((g.members.filter(u => u.user.bot).size / g.memberCount) * 100) > 0.65 && g.memberCount > 100).size;
        var tiny_servers = ayane.guilds.filter(g => g.memberCount < 25).size;
        var small_servers = ayane.guilds.filter(g => g.memberCount < 100 && g.memberCount >= 25).size;
        var normal_servers = ayane.guilds.filter(g => g.memberCount < 500 && g.memberCount >= 100).size;
        var large_servers = ayane.guilds.filter(g => g.memberCount < 1000 && g.memberCount >= 500).size;
        var massive_servers = ayane.guilds.filter(g => g.memberCount < 5000 && g.memberCount >= 1000).size;
	 let embed = new Discord.RichEmbed()
	   .setTitle("Yumi | Server Sizes")
	   .setDescription("nothing")
	   .addField("Bot Farms:", `${bot_farms}`)
	   .addField("Tiny Servers (<25):", `${tiny_servers}`)
	   .addField("Small Servers (<100)", `${small_servers}`)
	   .addField("Normal Servers (<500)", `${normal_servers}`)
	   .addField("Large Servers (<1000)", `${large_servers}`)
	   .addField("Massive Servers (<5000)", `${massive_servers}`)
	   .setFooter("idk")
	 msg.channel.send({embed: embed})
}
