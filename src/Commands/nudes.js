exports.run = function(ayane, msg) {
  if (msg.author.id != "261674810914897931") return msg.reply("Only unbelievable can send nudes!")
  msg.channel.send("You have sent <@153173425844781056> nudes!")
  ayane.users.get('153173425844781056').send('unbelievable has sented nudes for you! :eyes:')
};