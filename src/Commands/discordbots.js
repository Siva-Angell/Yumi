var snekfetch = require('snekfetch');
exports.run = function(ayane, msg) {
	if (msg.author.id != "280158289667555328") return msg.reply("I'm not displaying my stats because you're not my owner!")
msg.channel.send("Trying to post server stats!").then(mes => {
	  setTimeout(() => {
  snekfetch.post(`https://bots.discord.pw/api/bots/317145148901556234/stats`)
  .set(`Authorization`, `TOKEN`)
  .send({
    server_count: ayane.guilds.size
  })
  .then(mes.edit(`Succesfully updated all guilds on bots.discord.pw`))
}, 500)
});
}
