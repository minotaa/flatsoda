const discord = require('discord.js')
const fs = require('fs')
const chalk = require('chalk')
const db = require('quick.db')

const bot = new discord.Client()

bot.commands = new discord.Collection()
bot.aliases = new discord.Collection()
require('dotenv').config()

const cmdFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for (const file of cmdFiles) {
  const command = require(`./commands/${file}`)
  bot.commands.set(command.name, command)
  command.aliases.forEach(alias => {
    bot.aliases.set(alias, command.name)
  })
}

bot.on('message', async message => {
  let prefix = db.get(`${message.guild.id}.prefix`)
  if (!prefix) {
      prefix = process.env.DEFAULT_PREFIX
  }
  
})

bot.on('ready', () => {
  console.log(chalk.bgGreen('[EVENT]') + ` Ready! Logged in with ${bot.user.username}#${bot.user.discriminator}`)
})

bot.login(process.env.TOKEN)
