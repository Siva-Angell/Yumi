exports.run = function(client, msg, args) {
  if (args.length < 1) return msg.reply("You need to mention (<@280158289667555328>) or tag them (August)!")
    msg.channel.send(`${msg.author.tag} wants ${args.join(' ')} to defeat hades!`)
    msg.channel.sendFile('../YumiBot/src/Images/DefeatHades.gif') // It has to be in your folder where the /Images/ is!
}; 
