const Discord = require('discord.js');
exports.run = function(client, msg, args) {
  if (args.length < 1) return msg.reply("Patreon or Paypal?")

  if (msg.content.toLowerCase().includes(` paypal`)) {
    const embed1 = new Discord.RichEmbed()
       .setTitle("Yumi - Donators (Paypal)")
       .setDescription("You can donate to [Yumi](https://github.com/AnAuguseh/YumiBot) & [Karen](https://github.com/AnAuguseh/KarenBot) by donating!")
       .addField("Current Donators:", '[Melmsie]() who donated $1')
       .addField("Wanna be on this list?", 'Go to my [Paypal](https://paypal.me/YumiBot) to donate and DM me!')
    msg.channel.send({embed: embed1})
  }
  if (msg.content.toLowerCase().includes(` patreon`)) {
    const embed2 = new Discord.RichEmbed()
       .setTitle("Yumi - Donators (Patreon)")
       .setDescription("You can donate to [Yumi](https://github.com/AnAuguseh/YumiBot) & [Karen](https://github.com/AnAuguseh/KarenBot) by donating!")
       .addField("Current Donators:", 'Patreon is a bitch.')
    msg.channel.send({embed: embed2})
  }
}
