const Discord = require('discord.js');
exports.run = function(ayane, msg, args) {
   if (!args) {
	 msg.reply("You need a argument! Canceled command...");  
   };
	let announce = new Discord.RichEmbed()
	  .setTitle("The owner has an announcement!")
	  .setDescription("The Owner has an announcement, If your a Discord Bots server.. I'm sorry.")
	  .addField("My owner sent an announcement, here it is:", `${args.join(' ')}`)
	  .setFooter("Thanks for listening to the announcement! | Self destruct in 30 seconds!")
	if (msg.author.id != "280158289667555328") return msg.reply("You thought I am gonna let you?")
   ayane.guilds.forEach(r => {
    r.defaultChannel.send({embed : announce}).then(ms => { ms.delete(30000)});
  });
};
