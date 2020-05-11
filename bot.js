const discord = require('discord.js')
const fs = require('fs')
const chalk = require('chalk')
const db = require('quick.db')

const bot = new discord.Client()
var permissions = new db.table('permissions')

bot.commands = new discord.Collection()
bot.aliases = new discord.Collection()
require('dotenv').config()

const cmdFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for (const file of cmdFiles) {
  const command = require(`./commands/${file}`)
  bot.commands.set(command.help.name, command)
  command.help.aliases.forEach(alias => {
    bot.aliases.set(alias, command.help.name)
  })
}

bot.on('message', async message => {
  let prefix = db.get(`${message.guild.id}.prefix`)
  if (!prefix) {
      prefix = 'f!'
  }
  if (!message.content.startsWith(prefix)) return
  const command = message.content.split(' ')[0].slice(prefix.length)
  const args = message.content.split(' ').slice(1)
  let cmd
  if (bot.commands.has(command)) {
    cmd = bot.commands.get(command)
  } else if (bot.aliases.has(command)) {
    cmd = bot.commands.get(bot.aliases.get(command))
  }
  console.log(`[${message.guild.name}] ${message.author.username}#${message.author.discriminator} > ${prefix}${command} ${args.toString().replace(/,/gi, ' ')}`)
  var perms = permissions.get(`${message.author.id}.permissions`)
  cmd.run(bot, message, args, perms)
})

bot.on('ready', () => {
  console.log(chalk.bgGreen('[EVENT]') + ` Ready! Logged in with ${bot.user.username}#${bot.user.discriminator}`)
})

bot.login(process.env.TOKEN)
