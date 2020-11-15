const { MessageEmbed } = require('discord.js')
const fetch = require('node-fetch')
const { MESSAGES } = require('../../util/constants')

module.exports.run = async (client, message, args) => {
    const smile = await fetch('https://api.tenor.com/v1/search?platform=web&key=JJHDC7UK73EH&locale=en&anonid=MjA4ODAwNDc2Mw&q=anime%20punch&limit=50')
    .then(res => res.json())
    .then(json => json.results)

    const img = smile[Math.floor(Math.random() * smile.length)]

        const embed = new MessageEmbed()
        .setImage(img.media[0].tinygif.url)
        .setFooter('produced by hacking the api of tenor')
        .setDescription(img.h1_title)

        message.channel.send(embed)
    }

module.exports.help = MESSAGES.COMMANDS.ACTION.PUNCH