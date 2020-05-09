const discord = require('discord.js')

exports.run = (bot, message, args) => {
    const e = new discord.MessageEmbed()
        .setDescription(`:cup_with_straw: **Hey!** Thanks for doing this command.`)
        .addField('<:gh:708613389273923584> Repo', '[Here\'s where I\'m coded!](https://github.com/xMinota/flatsoda) You\'re allowed to use any code snippets as reference, but you\'re not allowed to copy code.', true)
        .addField('<:djs:708614747796275261> Discord.js Version', discord.version)
        .setColor('#36393f')
        .setThumbnail('https://media.discordapp.net/attachments/708469833754345535/708558255022014484/cup-with-straw_1f964.png')
        .setFooter(`© flatsoda | Made by minota#4433`, 'https://media.discordapp.net/attachments/708469833754345535/708558255022014484/cup-with-straw_1f964.png')
        .setTimestamp()
    message.channel.send(e)
}

exports.help = {
  name: 'bot',
  aliases: ['botinfo', 'bi', 'bot-info']
}