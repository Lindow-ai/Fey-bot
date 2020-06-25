const { MESSAGES } = require('../../util/constants')
const { Collection } = require('mongoose')

module.exports.run = (client, message, args) => {
    const filter = reaction => reaction.emoji.name === '⭐'

    message.react('⭐')
      .then(() => {
          message.awaitReactions(filter, { time: 10000 })
            .then(collected => message.channel.send(`${collected.size} réaction collectée`))
      })
}

module.exports.help = MESSAGES.COMMANDS.COLLECTORS.REACTCOLLECTOR