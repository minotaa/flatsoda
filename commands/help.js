const discord = require('discord.js')

exports.run = (bot, message, args) => {
    const e = new discord.MessageEmbed()
        .setDescription(`:cup_with_straw: **Help!** List o' commands`)
        .setColor('#36393f')
        .addField(':question: Not categorized.', '`xkcd`, `covid19`, `http.cat`, `bot`, `bio [slug/id]`, `8ball <???>`, `yo-momma`, `settings`')
        .setFooter(`© flatsoda | Made by minota#4433`, 'https://media.discordapp.net/attachments/708469833754345535/708558255022014484/cup-with-straw_1f964.png')
        .setTimestamp()
    message.channel.send(e)
}

exports.help = {
  name: 'help',
  aliases: ['cmds', 'commands', 'command-list']
}