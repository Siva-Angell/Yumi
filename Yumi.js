const YumiCore = require('discord.js');
const settings = require('./src/Settings/config.json');
const yumi = new YumiCore.Client();

yumi.on('ready', () => {
    yumi.user.setGame(`y/help  | Shard: ${yumi.shard.id} | [${yumi.guilds.size} / ${yumi.users.size}]`)
    console.log("[Ready] Ready, now spamming logs.")
});

yumi.on("message", msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(config.prefix)) return;

  const args = msg.content.split(" ");
  const command = args.shift().slice(config.prefix.length)

  try {
    let commandFile = require(`./src/Commands/${command}.js`)
    commandFile.run(yumi, msg, args)
  } catch (err) {
    console.error(err)
  }
});

yumi.on('guildCreate', guild => {
  postServerStats();
    yumi.channels.get('333638048283623435').send(`<:robotAdd:326804186262142977> **Joined** a guild!\n**Guild Name**: ${guild.name}!\n**Guild Owner**: ${guild.owner} (${guild.owner.id})`)
    console.log("[Guild Create Triggered] Joined a server!")
});

yumi.on('guildDelete', guild => {
  postServerStats();
    yumi.channels.get('333638048283623435').send(`<:robotRemove:326804186932969472> **Left** a guild!\n**Guild Name**: ${guild.name}\n**Guild Owner**: ${guild.owner} (${guild.owner.id})`)
    console.log("[Guild Delete Triggered] Left a server :<")
});

let snekfetch = require('snekfetch');
function postServerStats() {
  // post to discordbots.org!
  snekfetch.post(`https://discordbots.org/api/bots/${yumi.user.id}/stats`)
    .set("Authorization", `dBotsToken`)
    .send({
      server_count: yumi.guilds.size
    })
    .then(console.log("Posted discordbots.org count."))

    // post to bots.discord.pw
    snekfetch.post(`https://bots.discord.pw/api/bots/${yumi.user.id}/stats`)
    .set("Authorization", `TOKEN`)
    .send({
      server_count: yumi.guilds.size
    })
    .then(console.log("Posted bots.discord.pw count."))
}


yumi.on('error', (e) => console.error(e));
yumi.on("warn", (e) => console.warn(e));
yumi.on('debug', (e) => console.info(e));

yumi.login(settings.discord_token);
