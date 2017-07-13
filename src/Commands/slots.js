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
const snekfetch = require('snekfetch'); //npm install snekfetch (Come with Discord.js <3)
exports.run = function(ayane, msg) {
 let updoots = snekfetch.get("https://discordbots.org/api/bots/${id}/votes")
     .set(`Authorization`, `TOKEN`)
     .then(r => {
        r.body.length
     });
  if (!updoots) return msg.reply(`You must upvote on discordbots.org to use this command! `Developers` have access to it lol.\n**Upvotes**: ${updoots}`);
  msg.channel.send("**Slots**! Let's see the result\n" + slots[Math.floor(Math.random() * 3) +1]))
};
