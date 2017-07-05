let slots = require('../Settings/slots.json');
exports.run = function(ayane, msg) {
  msg.channel.send("**Slots**! Let's see the result")
  msg.channel.send(slot[Math.floor(Math.random() * 3) +1]);
};
