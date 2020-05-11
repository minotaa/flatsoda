const xkcd = require('xkcd')
const discord = require('discord.js')

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min // The maximum is exclusive and the minimum is inclusive
}

exports.run = (bot, message, args) => {
    if (!args[0]) {
        let id = getRandomInt(0, 2304)
        xkcd(id, function (data) {
            const e = new discord.MessageEmbed()
                .setDescription(`[${data.title}](https://xkcd.com/${data.num})`)
                .setColor('#36393f')
                .setImage(data.img)
                .setFooter(`${data.alt} | © flatsoda | Made by mino#1308`, 'https://media.discordapp.net/attachments/708469833754345535/708558255022014484/cup-with-straw_1f964.png')
                .setTimestamp()
            message.channel.send(e)
        })
    }
}

exports.help = {
  name: 'xkcd',
  aliases: []
}