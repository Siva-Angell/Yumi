var Discord = require('discord.js');
exports.run = function(ayane, msg) {
   const discrim = msg.content.split(' ')[1]
   if (!discrim) return msg.reply("Can't find that discriminator!")
   if (typeof discrim !== 'integer')
   if (discrim.size < 4) return msg.reply("Discrims are 4 numbers!")
   if (discrim.size > 4) return msg.reply("Discrims are 4 numbers!")
	 let members = ayane.users.filter(c=>c.discriminator===discrim).map(c=>c.username).join('\n')
	 if (!members) return msg.reply("No members have that discriminator!")
   let embed = new Discord.RichEmbed()
     .setTitle("Ayane | Discriminator")
	 .setDescription("fun.discrim")
      .addField("Members:", members)
	  msg.channel.send({embed: embed})
};
