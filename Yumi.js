const { Client } = require('discord.js');
const chalk = require('chalk');
const config = require('./src/Settings/config.json');
const client = new Client();

client.on('ready', async() => {
  client.user.setGame(`y/help | Shard: ${client.shard.id} | [${client.guilds.size} / ${client.users.size}]`)
  console.log(chalk.blue('-----------------'))
  console.log(chalk.green('Now loading stats about ' + client.user.username + ' (' + client.user.id + ')'))
  console.log(chalk.yellow('Guilds on ' + client.shard.id + ',' + client.guilds.size + '.'))
  console.log(chalk.yellow('Users on ' + client.shard.id + ',' + client.users.size + '.'))
  console.log(chalk.green("Completed Stats, Now loading ping stats. I loaded the Sharder.js before! <3"))
});

client.on('guildCreate', async(guild) => {
    const guilds = await client.shard.fetchClientValues('guilds.size')
    const count = guilds.reduce((prev, val) => prev + val, 0)

    snekfetch
        .post('https://bots.discord.pw/api/bots/317145148901556234/stats')
        .set('Authorization', config.dBots)
        .send({
            'server_count': count,
            'shard_count': client.shard.count
        })
        .then(console.log('Updated dbots.pw status.'))

    snekfetch
        .post('https://discordbots.org/api/bots/317145148901556234/stats')
        .set('Authorization', config.oliyBots)
        .send({
            'server_count': count,
            'shard_count': client.shard.count
        })
        .then(console.log('Updated dbots.org status.'))
});
client.on('guildDelete', async(guild) => {
    const guilds = await client.shard.fetchClientValues('guilds.size')
    const count = guilds.reduce((prev, val) => prev + val, 0)

    snekfetch
        .post('https://bots.discord.pw/api/bots/317145148901556234/stats')
        .set('Authorization', config.dBots)
        .send({
            'server_count': count,
            'shard_count': client.shard.count
        })
        .then(console.log('Updated dbots.pw status.'))

    snekfetch
        .post('https://discordbots.org/api/bots/317145148901556234/stats')
        .set('Authorization', config.oliyBots)
        .send({
            'server_count': count,
            'shard_count': client.shard.count
        })
        .then(console.log('Updated dbots.org status.'))
        yumi.channels.get('333638048283623435').send(`<:robotAdd:326804186262142977> **Joined** a guild!\n**Guild Name**: ${guild.name}!\n**Guild Owner**: ${guild.owner} (${guild.owner.id})`)
        console.log("[Guild Create Triggered] Joined a server!")
});

client.on('disconnect', (event) => {
    console.log(`[Shard Disconnection] Shard ${client.shard.id} disconnected with Code ${event.code}.`);
    process.exit(0);
});

client.on("message", async(msg) => {
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

client.login(config.discord_token)

client.on('error', (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
