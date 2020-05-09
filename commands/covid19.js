const discord = require('discord.js')
const axios = require('axios')

function numberWithCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2")
    return x
}

exports.run = (bot, message, args) => {
    if (!args[0]) {
        axios.get(`https://coronavirus-19-api.herokuapp.com/all`).then(res => {
            console.log(res.data)
            const e = new discord.MessageEmbed()
                .setColor('#36393f')
                .setTitle(':map: Global information about COVID-19')
                .addField(':briefcase: Cases', numberWithCommas(res.data.cases), true)
                .addField(':skull_crossbones: Deaths', numberWithCommas(res.data.deaths), true)
                .addField(':sparkles: Recovered', numberWithCommas(res.data.recovered), true)
                .setFooter('© flatsoda | Made by minota#4433', 'https://media.discordapp.net/attachments/708469833754345535/708558255022014484/cup-with-straw_1f964.png')
                .setTimestamp()
            return message.channel.send(e)
        })
    }
    if (args[0]) {
        axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${args[0]}`).then(res => {
            if (res.data == 'Country not found') {
                const e = new discord.MessageEmbed()
                    .setTitle(':x: Invalid country')
                    .setColor('#36393f')
                    .setDescription('You require a valid country to search thru data.')
                    .setFooter('© flatsoda | Made by minota#4433', 'https://media.discordapp.net/attachments/708469833754345535/708558255022014484/cup-with-straw_1f964.png')
                    .setTimestamp()
                return message.channel.send(e)
            } else {
                const e = new discord.MessageEmbed()
                    .setTitle(`:map: ${res.data.country}'s COVID-19 Data`)
                    .setColor('#36393f')
                    .addField(':briefcase: Total Cases', numberWithCommas(res.data.cases), true)
                    .addField(':briefcase: Today\'s Cases', numberWithCommas(res.data.todayCases), true)
                    .addField(':skull_crossbones: Total Deaths', numberWithCommas(res.data.deaths), true)
                    .addField(':skull_crossbones: Total Deaths', numberWithCommas(res.data.deaths), true)
                    .addField(':sparkles: Recovered', numberWithCommas(res.data.recovered), true)
                    .addField(':white_check_mark: Active', numberWithCommas(res.data.active), true)
                    .addField(':exclamation: Critical', numberWithCommas(res.data.critical), true)
                    .addField(':briefcase: Cases Per 1 mil', numberWithCommas(res.data.casesPerOneMillion), true)
                    .addField(':test_tube: Total Tests', numberWithCommas(res.data.totalTests), true)
                    .addField(':test_tube: Tests Per 1 Mil', numberWithCommas(res.data.testsPerOneMillion), true)
                    .addField(':skull_crossbones: Deaths Per 1 Mil', numberWithCommas(res.data.casesPerOneMillion), true)
                    .setFooter('© flatsoda | Made by minota#4433', 'https://media.discordapp.net/attachments/708469833754345535/708558255022014484/cup-with-straw_1f964.png')
                    .setTimestamp()
                return message.channel.send(e)
            }
            
        }) 
    }
}

exports.help = {
  name: 'covid19',
  aliases: ['coronavirus', 'corona', 'corona-virus', 'covid-19', 'covid']
}