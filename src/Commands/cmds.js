const Discord = require('discord.js');
exports.run = function(client, msg, args) {
  let error = new Discord.RichEmbed()
    .setTitle("Yumi | Commands")
    .setDescription("Do `y/cmds [category]` to choose a category!")
    .addField(":rofl: Fun & Games", 'Do `y/cmds fun`')
    .addField(":gear: Developer & Owner Only", 'Do `y/cmds dev`')
    .addField(":pencil: Utility", 'Do `y/cmds utility`')
    .addField(":frame_photo: Image Commands", 'Do `y/cmds imgs` for Image cmds!')
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
      .addField("`y/discrim`", "Description: Searches up a discriminator all around of Discord!\nUsage: `y/discrim [discrim]`")
      .addField("`y/raffle`", "Description: Finds a random person and someone wins something? xD\nUsage: `y/raffle`")
      .addField("`y/waddle`", "Description: waddle waddle\nUsage: `y/waddle`")
      return msg.channel.send({embed: fun})
  }
  if (msg.content.toLowerCase().includes(` dev`)) {
    let action = new Discord.RichEmbed()
      .setTitle(":gear: Developer Commands")
      .setDescription("Displays Developer commands.")
      .addField("`y/eval`", "Evaluates Javascript code.\nUsage: `y/eval [JS_CODE]`")
      .addField("`y/exec`", "Description: Evalualtes Command Terminal code.\nUsage: `y/exec [BASH_CODE]`")
    return msg.channel.send({embed: action})
  }
  if (msg.content.toLowerCase().includes(` utility`)) {
    let util = new Discord.RichEmbed()
       .setTitle(":pencil: Utility")
       .setDescription("Displays Utility commands..")
       .addField("`y/say`", "Description: You give the bot anything to say, and it will repeat it self\nUsage: `y/say [SOMETHING_TO_SAY]`")
       .addField("`y/prefix`", "Description: Sets the prefix or sets another prefix for that guild / server\nUsage: `y/prefix [new_prefix]`")
       .addField("`y/serverinfo`", "Description: Gives infomation about that guild / server\nUsage: `y/serverinfo`")
    msg.channel.send({embed: util})
  }
  if (msg.content.toLowerCase().includes(` imgs`)) {
    let imgs = new Discord.RichEmbed()
      .setTitle(":frame_photo: Image")
      .setDescription("Shows image stuff commands!")
      .addField('`y/hades`', "Description: C'mon! Defeat hades already~!")
      .setFooter("More coming soon ;) <3")
    msg.channel.send({embed: imgs});
  }
}
