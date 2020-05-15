const { MessageEmbed } = require('discord.js')

module.exports = (client, message) => {
    const user = message.author
    if (user.bot) return

    const embed = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`)
    .setColor("#ffa500")
    .setDescription(`**Action**: ouverture ticket\n**Raison**: ${message.content}\n**Utilisateur**: ${user}`)
    .setThumbnail(user.avatarURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL())

    user.send('Nous avons reçu votre ticket, on vous répondra dès que possible!')
    client.channels.cache.get('685819141524946954').send(embed)
  }