const { MESSAGES } = require('../../util/constants')
const ytdl = require('ytdl-core')

module.exports.run = async (client, message, args) => {
    const voiceChannel = message.member.voice.channel
    if(!voiceChannel) return message.channel.send("Vous n'êtes pas dans un channel pour jouer de la musique")

    try {
        var connection = await voiceChannel.join()
    } catch (error) {
        console.log(`Il y a eu une erreur pour se connecter sur le channel vocal: ${error}`)
        return message.channel.send(`Il y a eu une erreur pour se connecter sur le channel vocal: ${error}`)
    }

    const dispatcher = connection.play(ytdl(args[0]))
    .on('finish', () => {
        voiceChannel.leave()
    })
    .on('error', error => {
        console.log(error)
    })
    dispatcher.setVolumeLogarithmic(5 / 5)
}

module.exports.help = MESSAGES.COMMANDS.PLAYER.PLAY