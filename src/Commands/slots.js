const slots = [
   ":rosette:**|**:rosette:**|**:rosette: - You won!",
   ":rosette:**|**:rosette:**|**:shit: - You lost, Just 1 shit?",
   ":rosette:**|**:shit:**|**:shit: - You lost, 2 shits? xD",
   ":shit:**|**:shit:**|**:shit: - Damn, You lost!"
  ];
exports.run = function(ayane, msg) {
  msg.channel.send("**Slots**! Let's see the result")
  msg.channel.send(slots[Math.floor(Math.random() * 3) +1]);
};
