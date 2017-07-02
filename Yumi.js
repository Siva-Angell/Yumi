var Yumi = require('discord.js');
var yumi = new Yumi.Client();

yumi.on('ready', () => {
    ayane.user.setGame(`Ew Splashes || a;help || [${ayane.guilds.size}]`)
    console.log("[Ayane-Ready] Hello :D")
});

var prefix = "a;";
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
