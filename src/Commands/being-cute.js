exports.run = function(client, msg, args) {
  if (args.length < 1) return msg.reply("Mention someone (@mention) or tag someome (Augu)")
  msg.channel.send(`${msg.author.tag} is being cute to ${args.join(', ')}.`)
  msg.channel.sendFile('../YumiBot/src/Images/being-cute.gif')
};
