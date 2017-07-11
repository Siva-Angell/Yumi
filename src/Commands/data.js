const sql = require('sqlite')
sql.open('./databases/database.sqlite')
exports.run = function(ayane, msg) {
    sql.get(`SELECT * FROM database WHERE guildId ='${msg.guild.id}'`).then(row => {
    if (!row) {
      sql.run('INSERT INTO database (guildId, prefix) VALUES (?, ?)', [msg.guild.id, "y/"]);
      msg.reply("Your guild is now in our database!")
    } else {
      msg.reply("Sorry, but your guild has already used this command!")
    }
  }).catch(() => {
    console.error;
    sql.run('CREATE TABLE IF NOT EXISTS database (guildId TEXT, prefix TEXT)').then(() => {
      sql.run('INSERT INTO database (guildId, prefix) VALUES (?, ?)', [msg.guild.id, "y/"]);
    });
  });
}
