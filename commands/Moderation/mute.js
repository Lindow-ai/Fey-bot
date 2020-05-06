const ms = require("ms")
const { MessageEmbed } = require("discord.js")

module.exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.users.first())
  let muteRole = message.guild.roles.cache.find(r => r.name === 'En cour de reprogrammation 👾')
  let removeRole = message.guild.roles.cache.find(r => r.name === 'Citoyens de Valnuit 🌃')
  let addRole = message.guild.roles.cache.find(r => r.name === 'Citoyens de Valnuit 🌃')
  let muteTime = (args[1] || '60s')

  if (!muteRole) {
    muteRole = await message.guild.roles.create({
      data: {
        name: 'En cour de reprogrammation 👾',
        color: '#000',
        permissions: []
      }
    })

    message.guild.channels.cache.forEach(async (channel, id) => {
      await channel.updateOverwrite(muteRole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false,
        CONNECT: false
      })
    })
  }

  await user.roles.add(muteRole.id)
  await user.roles.remove(removeRole.id)
  message.channel.send(`<@${user.id}> est muté pour ${ms(ms(muteTime))}.`)

  setTimeout(() => {
    user.roles.remove(muteRole.id)
  }, ms(muteTime))

  await user.roles.add(addRole.id)

  
  const embed = new MessageEmbed()
  .setAuthor(`${user.user.username} (${user.id})`)
  .setColor("#ffa500")
  .setDescription(`**Action**: mute\n**Temps**: ${ms(ms(muteTime))}`)
  .setThumbnail(user.user.avatarURL())
  .setTimestamp()
  .setFooter(message.author.username, message.author.avatarURL())

  client.channels.cache.get('685819141524946954').send(embed)
}
  
  module.exports.help = {
    name: "mute",
    aliases: ['mute'],
    category: 'moderation',
    description: "Mute un utilisateur",
    cooldown: 10,
    usage: '<@user> <time>',
    isUserAdmin : true,
    permissions: true,
    args: true
  }