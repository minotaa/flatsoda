const discord = require('discord.js')

exports.run = (bot, message, args) => {
    const e = new discord.MessageEmbed()
        .setDescription(`:cup_with_straw: **Hey!** Thanks for doing this command.`)
        .addField('Repo', '[Here\'s where I\'m coded!](https://github.com/xMinota/flatsoda) You\'re allowed to use any code snippets as reference, but you\'re not allowed to copy code. [I\'m a sign, not a cop, you can do whatever.]', true)
        .addField('Discord.js Version', discord.version)
        .setColor('#36393f')
        .setThumbnail('https://media.discordapp.net/attachments/708469833754345535/708558255022014484/cup-with-straw_1f964.png')
        .setFooter(`© flatsoda | Made by mino#1308`, 'https://media.discordapp.net/attachments/708469833754345535/708558255022014484/cup-with-straw_1f964.png')
        .setTimestamp()
    message.channel.send(e)
}

exports.help = {
  name: 'bot',
  aliases: ['botinfo', 'bi', 'bot-info']
}