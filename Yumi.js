var YumiCore = require('discord.js');
var yumi = new YumiCore.Client();

yumi.on('ready', () => {
    ayane.user.setGame(`y/help | 404'ed it! | [${yumi.guilds.size} / ${yumi.users.size}]`)
    console.log("Connected.")
});

var prefix = "y/";
yumi.on("message", msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;

  const args = msg.content.split(" ");
  const command = args.shift().slice(prefix.length)

  try {
    let commandFile = require(`./src/commands/${command}.js`)
    commandFile.run(ayane, msg, args)
  } catch (err) {
    console.error(err)
  }
});

yumi.on('error', (e) => console.error(e));
yumi.on("warn", (e) => console.warn(e));
yumi.on('debug', (e) => console.info(e));

yumi.login('TOKEN');
