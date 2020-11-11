const { MESSAGES } = require('../../util/constants')

module.exports.run = async (client, message, args) => {
    if(!message.member.voice.channel) return message.channel.send('Vous devez être dans un channel de musique pour stopper la musique')
    message.member.voice.channel.leave()
    return undefined
}

module.exports.help = MESSAGES.COMMANDS.PLAYER.STOP