const slots = [
   ":trophy:**|**:trophy:**|**:trophy:\nDamn! You win, You must be lucky",
   ":shit:**|**:trophy:**|**:trophy\nNice, 2!",
   ":shit:**|**:shit:**|**:trophy\nLost? xD",
   ":shit:**|**:shit**|**:shit:\nDAMN You didn't win trophies!",
   ":rosette:**|**:rosette:**|**:rosette:\nYou won!",
   ":rosette:**|**:rosette:**|**:shit:\nYou lost, Just 1 shit?",
   ":rosette:**|**:shit:**|**:shit:\nYou lost, 2 shits? xD",
   ":shit:**|**:shit:**|**:shit:\nDamn, You lost!"
  ];
exports.run = function(ayane, msg) {
  msg.channel.send("**Slots**! Let's see the result\n" + slots[Math.floor(Math.random() * 3) +1]))
};
