exports.run = function(yumi, msg, args) {
   if (!args[0]) { 
     return msg.reply("You didn't add what you want me to say !!!")
   }
   msg.channel.send(args.join(' '));
};