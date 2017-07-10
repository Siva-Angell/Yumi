var table = require('table');
exports.run = function(ayane, msg) {
  let data,
    output;

data = [
    ['Guilds', 'Users', 'Channels'],
    [ayane.guilds.size, ayane.users.size, ayane.channels.size],
];

msg.channel.send("```\n" + ${table.table(data)} + "```")
};
