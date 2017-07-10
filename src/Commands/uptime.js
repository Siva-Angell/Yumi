let moment = require('moment');
require('moment-duration-format');
exports.run = function(yumi, msg) {
  let uptime = moment.duration(yumi.uptime).format('d[ days], h[ hours], m[ minutes, and ]s[ seconds]')
  msg.channel.send(`**Uptime on Shard: ${yumi.shard.id}** is: __**${uptime}**__`)
}
