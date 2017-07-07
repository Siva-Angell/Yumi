let chalk = require('chalk');
let Discord = require('discord.js');
let Yumi = new Discord.Client();
let Manager = new Discord.ShardingManager('./ayane.js');
Manager.spawn(2);
console.log(chalk.green(`Commands: {${__filename}}: `, chalk.yellow(`Shards has been connected! <3 || Total Shards: ${Manager.totalShards}`)))
