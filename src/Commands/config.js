const Discord = require('discord.js');
const sql = require('sqlite');
sql.open('./src/databases/database.sqlite');
exports.run = function(ayane, msg, args) {
  sql.get(`SELECT * FROM guilds WHERE guildID ='${msg.guild.id}'`).then(guild => {
	 if (!guild) {
	  sql.run('INSERT INTO guilds (guildID, prefix) VALUES (?, ?)', [msg.guild.id, 'a;'],
   };
   let embed = new Discord.RichEmbed()
     .setAuthor(`${ayane.user.username} Config! (finally)`, ayane.user.displayAvatarURL)
	 .setDescription("Heyo! :wave: You can change any configuration, `disableAnnouncements` is coming soon! This is the prototype of the config; So this is not the	'final' command")
	 .addField("`guild.setPrefix`", guild.prefix, true)
	 msg.channel.send({embed})
	 
	 if(msg.content.toLowerCase().includes(` prefix`)) {
	   let setprefix = args.slice(1).join(' ');
	   if (!setprefix) return msg.reply("You must include a prefix!")
	sql.run(`UPDATE guilds SET prefix = '${setprefix}' WHERE guildID = ${message.guild.id}`)
	  msg.channel.send(`**Successfully** changed your prefix to \`${setprefix}\``)
	};
  } else {
   msg.channel.send({embed})
    };
  });
};
