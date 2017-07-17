const imgursearch = require('imgur-search')
exports.run = function(client, msg, args) {
var imgur = new imgursearch("1e027a0bbc59aec")
  if (args.length < 1) return msg.reply("Boi, You didn't put shit.")
  msg.channel.send("Searching...").then(m => {
imgur.getRandomFromSearch(args.join(" ")).always(function (resp) {
    if(resp.title === undefined){
        return m.edit("**No Image was found**")
    }
    if(msg.channel.nsfw === true){
    m.edit(`**Title**: \`${resp.title}\` \n**Description**: \`${resp.description}\`\n**Section**: \`\`\`\n${resp.section}\`\`\`\n**Views**: \`${resp.views}\`\n**Link**: ${resp.link}\n**NSFW**: \`${resp.nsfw}\``)
        return
    }
    if(resp.nsfw === true) return m.edit(`${msg.author}, The image your searched up was **NSFW** (Not safe for work). Use it in a #nsfw channel!`)
    m.edit(`**Title**: \`${resp.title}\`\n**Description**: \`${resp.description}\`\n**Section**: \`\`\`\n${resp.section}\`\`\`\n**Views**: \`${resp.views}\`\n**Link**: ${resp.link}\n**NSFW**: \`${resp.nsfw}\``)
    })
  })
};
