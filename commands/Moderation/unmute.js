const { MessageEmbed } = require("discord.js")
const { MESSAGES } = require('../../util/constants')

module.exports.run = (client, message, args) => {
  let user = message.guild.member(message.mentions.users.first())
  let muteRole = message.guild.roles.cache.find(r => r.name === 'En cour de reprogrammation 👾')
  
  if (!user.roles.cache.has(muteRole.id)) return message.reply("L'utilisateur mentionné n'est pas muté !")
  user.roles.remove(muteRole.id)
  message.channel.send(`<@${user.id}> n'est plus muté !`)
  
  const embed = new MessageEmbed()
  .setAuthor(`${user.user.username} (${user.id})`)
  .setColor("#35f092")
  .setDescription(`**Action**: unmute`)
  .setThumbnail(user.user.avatarURL())
  .setTimestamp()
  .setFooter(message.author.username, message.author.avatarURL())

  client.channels.cache.get('685819141524946954').send(embed)
}
  
  module.exports.help = MESSAGES.COMMANDS.MODERATION.UNMUTE