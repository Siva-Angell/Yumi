const snekfetch = require('snekfetch');
exports.run = function(ayane, msg) {
msg.channel.send("Trying to post server stats!").then(mes => {
	  setTimeout(() => {
  snekfetch.post(`https://discordbots.org/api/bots/317145148901556234/stats`)
  .set(`Authorization`, `TOKEN`)
  .send({
    server_count: ayane.guilds.size
  })
  .then(mes.edit(`Succesfully updated all guilds on discordbots.org`))
}, 500)
});
};
