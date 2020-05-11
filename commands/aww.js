const { KSoftClient } = require('@ksoft/api')
require('dotenv').config()
const ksoft = new KSoftClient(process.env.KSOFT_TOKEN)

exports.run = async (bot, message, args) => {
    const { url } = await ksoft.images.aww()
    message.channel.send(url)
}

exports.help = {
  name: 'random-aww',
  aliases: ['aww', 'r/aww', 'reddit-aww']
}