const discord = require('discord.js')
const yomomma = require('yo-mamma').default

exports.run = (bot, message, args) => {
    let insult
    if (!args[0]) {
        insult = yomomma()
        const e = new discord.MessageEmbed()
            .setTitle(':clown: your mom joke maker 3000')
            .setDescription(insult)
            .setFooter('© flatsoda | Made by minota#4433', 'https://media.discordapp.net/attachments/708469833754345535/708558255022014484/cup-with-straw_1f964.png')
            .setTimestamp()
        message.channel.send(e)
    }
}

exports.help = {
  name: 'yo-momma',
  aliases: ['yo-mamma', 'yourmom', 'yourmomma']
}