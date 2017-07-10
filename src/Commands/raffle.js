exports.run = function(yumi, msg) {
   let user = msg.guild.members.filter(u => !u.user.bot).random().user;
   msg.channel.send(":tickets: " user.username + "#" + user.discriminator);
};