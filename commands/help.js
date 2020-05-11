const discord = require('discord.js')

exports.run = (bot, message, args, perms) => {
    console.log(perms)
    const e = new discord.MessageEmbed()

    if (perms == 5) {
        e.setDescription(`:cup_with_straw: **Help!** List o' commands | **Bot Owner**`)
    } else {
        e.setDescription(`:cup_with_straw: **Help!** List o' commands`)
    }
    
    e.setColor('#36393f')
    e.addField(':question: Not categorized.', '`xkcd`, `covid19`, `http.cat`, `bot`, `bio [slug/id]`, `8ball <???>`, `yo-momma`, `settings`')
    e.setFooter(`© flatsoda | Made by mino#1308`, 'https://media.discordapp.net/attachments/708469833754345535/708558255022014484/cup-with-straw_1f964.png')
    e.setTimestamp()
    message.channel.send(e)
}

exports.help = {
  name: 'help',
  aliases: ['cmds', 'commands', 'command-list']
}