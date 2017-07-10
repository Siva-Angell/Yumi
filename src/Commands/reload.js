const settings = require('../../settings.json');
exports.run = (yumi, msg, args) => {
  if(!args || args.size < 1) return msg.channel.send("Please specify a command! (**Example**: `y/reload <command>`)");
if(!isDeveloper(msg.author.id)) return msg.reply("**You** Don't have permission to reload my commands! **Rip** you.")
  delete require.cache[require.resolve(`./${args[0]}.js`)];
  msg.channel.send(`The command ${args[0]} has been reloaded`);
};

var devs = settings.devID

function isDeveloper(id) {
  return (devs.indexOf(id) > -1);
}
