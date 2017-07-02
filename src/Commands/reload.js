exports.run = (ayane, msg, args) => {
  if(!args || args.size < 1) return msg.channel.send("Please specify a command. (EXAMPLE: `h;reload help.js`)");
  delete require.cache[require.resolve(`./${args[0]}.js`)];
  msg.channel.send(`The command ${args[0]} has been reloaded`);
};
