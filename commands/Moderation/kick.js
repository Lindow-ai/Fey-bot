const { MessageEmbed } = require('discord.js')
const { MESSAGES } = require('../../util/constants')

module.exports.run = (client, message, args) => {
    const user = message.mentions.users.first() 
    const reason = (args.splice(1).join(' ') || 'Acunne raison spécifiée')
    user ? message.guild.member(user).kick(reason) : message.channel.send("L'utilisateur n'existe pas !")

    const embed = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`)
    .setColor("#ffa500")
    .setDescription(`**Action**: kick\n**Raison**: ${reason}`)
    .setThumbnail(user.avatarURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL())

    client.channels.cache.get('685819141524946954').send(embed)
  }
  
  module.exports.help = MESSAGES.COMMANDS.MODERATION.KICK