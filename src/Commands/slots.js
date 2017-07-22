const slots = [
	":trophy:**|**:trophy:**|**:trophy:\nDamn! You win, You must be lucky",
	":shit:**|**:trophy:**|**:trophy\nNice, 2!",
	":shit:**|**:shit:**|**:trophy\nLost? xD",
	":shit:**|**:shit**|**:shit:\nDAMN You didn't win trophies!",
	":rosette:**|**:rosette:**|**:rosette:\nYou won!",
	":rosette:**|**:rosette:**|**:shit:\nYou lost, Just 1 shit?",
	":rosette:**|**:shit:**|**:shit:\nYou lost, 2 shits? xD",
	":shit:**|**:shit:**|**:shit:\nDamn, You lost!"
];
const config = require('../Settings/config.json');
const snekfetch = require('snekfetch'); //npm install snekfetch (Come with Discord.js <3)
exports.run = function(yumi, msg) {
	let updoots = snekfetch.get(`https://discordbots.org/api/bots/${yumi.user.id}/votes`)
		.set(`Authorization`, config.oliyBots)
		.then(r => {
				if (!r.body.includes(msg.author.id)) returnmsg.reply(`You must upvote on discordbots.org to use this command!\n**Total Upvotes**: ${r.body.length}`);
				msg.channel.send("**Slots**! Let's see the result\n" + slots[Math.floor(Math.random() * 3) + 1]))
		});

};
