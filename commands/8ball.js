const discord = require('discord.js')

function doMagic8BallVoodoo() {
    var rand = ['Yes', 'No', 'Why are you even trying?', 'If you believe hard enough, it will happen', 'Try again', 'What do you think? NO', 'Maybe', 'Never', 'Yep', 'Definitely']
    return rand[Math.floor(Math.random()*rand.length)]
}

exports.run = (bot, message, args) => {
    if (!args[0]) {
        const e = new discord.MessageEmbed()
                .setTitle(':x: No question')
                .setColor('#36393f')
                .setDescription('Well, the 8-ball is completely random, but let\'s give into the illusion being real by asking a question.')
                .setFooter('© flatsoda | Made by mino#1308', 'https://media.discordapp.net/attachments/708469833754345535/708558255022014484/cup-with-straw_1f964.png')
                .setTimestamp()
        return message.channel.send(e)
    }
    const e = new discord.MessageEmbed()
        .setTitle(`:8ball: **8-Ball** The 8-ball says: ${doMagic8BallVoodoo()}`)
    message.channel.send(e)
}

exports.help = {
  name: '8ball',
  aliases: ['8b', '8bal', '8-ball']
}