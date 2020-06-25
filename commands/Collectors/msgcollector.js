const { MESSAGES } = require('../../util/constants')
const { Collection } = require('mongoose')

module.exports.run = (client, message, args) => {
    const filter = msg => msg.content.includes(args[0])

    message.channel.send(`tapez ${args[0]} afin de pouvoir entrer dans le jeu!`)
    .then(() => {
        message.channel.awaitMessages(filter, { time: 10000 })
        .then(collected => { message.channel.send(`${collected.size} messages collectés.`)})
    })
}

module.exports.help = MESSAGES.COMMANDS.COLLECTORS.MSGCOLLECTOR