const Discord = require('discord.js');
exports.run = function(yumi, msg, args) {
  let embed1 = new Discord.RichEmbed()
     .setTitle("Yumi | __Suggestions__")
     .setDescription(":x: | Missing Arguments!\nDo `y/suggestion [suggestion]`!")
  if (args.length < 1) return msg.channel.send({embed: embed1});
    var suggestion = yumi.channels.get("333466836538490881")
    let embed2 = new Discord.RichEmbed()
      .setTitle("Yumi | __Suggestions__")
      .setDescription(":white_check_mark: | Suggestion added!")
      .addField("Thanks for suggesting!", "Thanks for suggesting! Your suggestion is in #suggestion-2!")
    msg.channel.send({embed: embed2})
    suggestion.send(`${msg.author} has suggested something! Here is the suggestion:\n${args.join(' ')}`)
};
