const Discord = require('discord.js');
exports.run = function(yumi, msg, args) {
  let error = new Discord.RichEmbed()
    .setTitle("Yumi | Commands")
    .setDescription("Do `y/cmds [category]` to choose a category!")
    .addField(":rofl: Fun & Games", 'Do `y/cmds fun`')
    .addField(":gear: Developer & Owner Only", 'Do `y/cmds dev`')
  if (args.length < 1) return msg.channel.send({embed: error})
  if (msg.content.toLowerCase().includes(` fun`)) {
    let fun = new Discord.RichEmbed()
      .setTitle("Yumi | Commands")
      .setDescription(":rofl: Fun & Games:")
      .addField("`y/cat`", "Description: Shows random cat facts.\nUsage: `y/cat`")
      .addField("`y/shrug`", "Description: Does a shrug.\nUsage: `y/shrug`")
      .addField("`y/slots`", "Description: Play a game of slots:tm:.\nUsage: `y/slots`")
      .addField("`y/anime`", "Description: Searches up anime.\nUsage: `y/anime [anime]` **||** Pick a number.")
      .addField("`y/manga`", "Description: Searches up manga.\nUsage: `y/manga [manga]` **||** Pick a number.")
      .addField("`y/discrim`", "Description: Searches up a discriminator all around of Discord!\nUsage: `y/discrim [discrim]")
      .addField("`y/raffle`", "Description: Finds a random person and someone wins something? xD\nUsage: `y/raffle`")
      .addField("`y/waddle`", "Description: waddle waddle\nUsage: `y/waddle`")
      return msg.channel.send({embed: fun})
  }
  if (msg.content.toLowerCase().includes(` dev`)) {
    let action = new Discord.RichEmbed()
      .setTitle(":gear: Developer Commands")
      .setDescription("Displays Developer commands.")
      .addField("`y/eval`", "Evaluates Javascript code.\nUsage: `y/eval [JS_CODE]`")
    return msg.channel.send({embed: action})
  }
}
