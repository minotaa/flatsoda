const bio = require('discord.bio')
const axios = require('axios')
const discord = require('discord.js')

exports.run = (bot, message, args) => {
  let user = args[0]
  if (!user) {
      user = message.author.id
  }
  axios.get(`https://api.discord.bio/v1/user/details/${user}`).then(res => {
    const e = new discord.MessageEmbed()
    const settings = res.data.payload.settings
    e.setTitle(`${settings.name}'s Profile`)
    e.addField(':name_badge: Username', `${settings.cached_username} (${settings.user_id})`, true)
    if (settings.premium_status == 1) {
        e.addField(':gem: Premium', `Premium!`, true)
    } else {
        e.addField(':gem: Premium', `That person isn't premium!`, true)
    }
    if (settings.verified == 1) {
        e.addField(':white_check_mark: Verified', `Verified!`, true)
    } else {
        e.addField(':white_check_mark: Verified', `That person isn't verified!`, true)
    }    
    e.addField(':map: Location', `${settings.location}`, true)
    e.addField(':scroll: Description', `${settings.description}`, true)
    e.addField(':bust_in_silhouette: Occupation', `${settings.occupation}`, true)
    e.addField(':up: Upvotes', `${settings.upvotes}`)
    if (settings.gender == 0) {
        e.addField(':male_sign: Gender', `Male`, true)
    } else {
        e.addField(':female_sign: Gender', `Gender`, true)
    }    

    e.setImage(settings.banner)
    e.setColor('#36393f')
    message.channel.send(e)
    
  })
}

exports.help = {
  name: 'bio',
  aliases: ['d-bio', 'discord.bio', 'dsc-bio']
}