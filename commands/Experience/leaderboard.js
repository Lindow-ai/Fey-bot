const { MessageEmbed } = require('discord.js')
const { MESSAGES } = require('../../util/constants')

module.exports.run = async (client, message) => {
    const embed = new MessageEmbed()
    .setTitle('Top 10 des utilisateurs sur le serveur')
    .setColor('#35f092')
    .setThumbnail('https://i.pinimg.com/originals/0b/f4/2a/0bf42a03b5209c81191a93e48a7bb65e.jpg')
    .setImage('https://i.pinimg.com/originals/44/39/cd/4439cd3c019028d329f355ae25d43d16.png')
    .setDescription('cHeR cItOyEnS dE vAlNuIt Le NoMbRe De FoIs QuE vOuS mOuRreZ eSt VrAiMeNt TrEs ImPoRtAnT !')
    .setTimestamp()
    .setFooter('Experience')

    await client.getUsers(message.guild).then(p => {
        p.sort((a, b) => (a.experience < b.experience) ? 1 : -1).splice(0, 10).
        forEach(e => {
            embed.addField(e.username, `${e.experience} points d'expérience`)
        })
    })

    message.channel.send(embed)
}

module.exports.help = MESSAGES.COMMANDS.EXPERIENCE.LEADERBOARD