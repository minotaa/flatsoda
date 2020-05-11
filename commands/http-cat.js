const discord = require('discord.js')

exports.run = (bot, message, args) => {
    const e = new discord.MessageEmbed()
        .setDescription(`[${args[0]}](https://http.cat/${args[0]})`)
        .setImage(`https://http.cat/${args[0]}.jpg`)
        .setFooter('© flatsoda | Made by mino#1308', 'https://media.discordapp.net/attachments/708469833754345535/708558255022014484/cup-with-straw_1f964.png')
        .setTimestamp()
    message.channel.send(e)
}

exports.help = {
  name: 'http.cat',
  aliases: ['httpcat', 'http-cat', 'https-cat', 'httpscat']
}