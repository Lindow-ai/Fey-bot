const { MESSAGES } = require('../../util/constants')

module.exports.run = (client, message, args) => {
    const user = message.guild.member(message.mentions.users.first())
    const expToAdd = parseInt(args[1])
    if (isNaN(expToAdd)) return message.reply('Faut enter un nombre yippee-ki-yay!')
    client.removeExp(client, user, expToAdd)
    message.channel.send(`Vous avez ajouté avec succès ${expToAdd} points d'expérience à l'utilisateur ${user} !`)
}

module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.ADDEXPERIENCE