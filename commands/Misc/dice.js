const { MessageEmbed } = require('discord.js')
const { MESSAGES } = require('../../util/constants')
const randomDice = () => Math.floor(Math.random() * 6) + 1

module.exports.run = (client, message, args) => {
    const embed = new MessageEmbed()
    .setColor('#ac2d51')
    .setTitle('Lancement des dés')
    .setThumbnail('https://cdn.discordapp.com/attachments/685819141524946954/769253810164989983/istockphoto-859865022-612x612.jpg')
    .addFields(
        { name: "Dés #1", value: randomDice(), inline: true },
        { name: "Dés #2", value: randomDice(), inline: true },
        { name: "Dés #3", value: randomDice(), inline: true },
        { name: "Dés #4", value: randomDice(), inline: true },
        { name: "Dés #5", value: randomDice(), inline: true },
        { name: "Dés #6", value: randomDice(), inline: true }
    )

    embed.setFooter(`Total des dès sur la tables: ${embed.fields.reduce((total, obj) => parseInt(obj.value) + total, 0)}`)
    message.channel.send(embed)
}

module.exports.help = MESSAGES.COMMANDS.MISC.DICE