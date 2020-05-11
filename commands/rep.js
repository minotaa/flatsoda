const discord = require('discord.js')
const db = require('quick.db')

var rep = new db.table('reputation')

exports.run = (bot, message, args, perms) => {
    let prefix = db.get(`${message.guild.id}.prefix`)
    if (!prefix) {
        prefix = "f!"
    }
    if (!rep.get(`${message.guild.id}.enabled`)) {
        message.channel.send(`Server reputation isn't enabled in this server. What a shame, enable it with \`${prefix}rep enable\`.`)
    } else {
        console.log('hallo')
    }
}

exports.help = {
  name: 'reputation',
  aliases: ['rep', 'server-rep', 'rep-server']
}