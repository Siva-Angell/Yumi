const { Client } = require('discord.js');
const chalk = require('chalk');
const config = require('./src/Settings/config.json');
const PackageJSON = require('./package.json')
const client = new Client({
    disabledEvents:['TYPING_START', 'TYPING_STOP']
});

client.on('ready', () => {
  client.user.setGame(`y/help | Version: ${PackageJSON.version} | [${client.guilds.size} / ${client.users.size}]`)
   console.log("Ready to serve " + client.guilds.size + " guilds with " + client.users.size + " users. I am on " + PackageJSON.version + " of Yumi! I really should update my github!")
});

const snekfetch = require('snekfetch');
client.on('guildCreate', guild => {
    snekfetch
        .post('https://bots.discord.pw/api/bots/317145148901556234/stats')
        .set('Authorization', config.dBots)
        .send({
            'server_count': client.guilds.size,
        })
        .then(console.log('Updated dbots.pw status.'))

    snekfetch
        .post('https://discordbots.org/api/bots/317145148901556234/stats')
        .set('Authorization', config.oliyBots)
        .send({
            'server_count': client.guilds.size,
        })
        .then(console.log('Updated dbots.org status.'))
        client.channels.get('333638048283623435').send(`<:robotAdd:326804186262142977> **Joined** a guild!\n**Guild Name**: ${guild.name}!\n**Guild Owner**: ${guild.owner} (${guild.owner.id})`)
        console.log("[Guild Create Triggered] Joined a server!")
});
client.on('guildDelete', guild => {
    snekfetch
        .post('https://bots.discord.pw/api/bots/317145148901556234/stats')
        .set('Authorization', config.dBots)
        .send({
            'server_count': client.guilds.size
        })
        .then(console.log('Updated dbots.pw status.'))

    snekfetch
        .post('https://discordbots.org/api/bots/317145148901556234/stats')
        .set('Authorization', config.oliyBots)
        .send({
            'server_count': client.guilds.size,
        })
        .then(console.log('Updated dbots.org status.'))
        client.channels.get('333638048283623435').send(`<:robotAdd:326804186262142977> **Joined** a guild!\n**Guild Name**: ${guild.name}!\n**Guild Owner**: ${guild.owner.tag} (${guild.owner.id})`)
        console.log("[Guild Create Triggered] Joined a server!")
});

client.on("message", msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(config.prefix)) return;

  const args = msg.content.split(" ");
  const command = args.shift().slice(config.prefix.length)

  try {
    let commandFile = require(`./src/Commands/${command}.js`)
    commandFile.run(client, msg, args)
  } catch (err) {
    console.error(err)
  }
});

client.login(config.discord_token)

client.on('error', (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
