const db = require('quick.db')
const discord = require('discord.js')

// TODO: Make function to get specific server settings.

exports.run = (bot, message, args) => {
    if (!args[0]) {
        let prefix = db.get(`${message.guild.id}.prefix`)
        if (!prefix) {
            prefix = "f!"
        }
        message.channel.send(`Edit any setting using \`${prefix}settings edit <name> <value>\`.`)
        const e = new discord.MessageEmbed()
            .setTitle(':wrench: Settings')
            .setColor('#36393f')
            .addField(':abcd: Prefix', `Value: \`${prefix}\` - Modify the bot's prefix using \`prefix\`.`, true)
            .setFooter('© flatsoda | Made by minota#4433', 'https://media.discordapp.net/attachments/708469833754345535/708558255022014484/cup-with-straw_1f964.png')
            .setTimestamp()
        message.channel.send(e)
    }
    if (args[0] == 'edit') {
        if (args[1] == 'prefix') {
            if (!args[2]) {
                const e = new discord.MessageEmbed()
                    .setTitle(':x: No value')
                    .setColor('#36393f')
                    .setDescription('You require a value to set your **prefix** to.')
                    .setFooter('© flatsoda | Made by minota#4433', 'https://media.discordapp.net/attachments/708469833754345535/708558255022014484/cup-with-straw_1f964.png')
                    .setTimestamp()
                return message.channel.send(e)
            } else {
                db.set(`${message.guild.id}.prefix`, args[2])
                const e = new discord.MessageEmbed()
                    .setTitle(':capital_abcd: Prefix set!')
                    .setDescription(`Your **prefix** has been set to \`${args[2]}\`. You may now start your commands with your new prefix.`)
                    .setColor('#36393f')
                    .setFooter('© flatsoda | Made by minota#4433', 'https://media.discordapp.net/attachments/708469833754345535/708558255022014484/cup-with-straw_1f964.png')
                    .setTimestamp()
                message.channel.send(e)
            }
        }
        if (!args[1]) {
            const e = new discord.MessageEmbed()
                .setTitle(':x: No name')
                .setColor('#36393f')
                .setDescription('You require a name to change your value.')
                .setFooter('© flatsoda | Made by minota#4433', 'https://media.discordapp.net/attachments/708469833754345535/708558255022014484/cup-with-straw_1f964.png')
                .setTimestamp()
            message.channel.send(e)
        }
    }
}

exports.help = {
  name: 'settings',
  aliases: ['config']
}
