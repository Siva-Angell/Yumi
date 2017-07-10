let chalk = require('chalk');
let Discord = require('discord.js');
let Yumi = new Discord.Client();
let Manager = new Discord.ShardingManager('./Yumi.js');
Manager.spawn();
console.log(chalk.green(`Filename: {${__filename}}: `, chalk.yellow(`Shard has been connected, now loading some shit.`)))
