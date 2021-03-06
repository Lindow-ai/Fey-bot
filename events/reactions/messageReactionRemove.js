module.exports = (client, messageReaction, user) => {
  const message = messageReaction.message
  const member = message.guild.members.cache.get(user.id)
  const emoji = messageReaction.emoji.name
  const channel = message.guild.channels.cache.find(c => c.id === '685819141524946954')
  const graphisteRole = message.guild.roles.cache.get('683651985794269214')
    const photographeRole = message.guild.roles.cache.get('683652085040152610')
    const dessinateurtriceRole = message.guild.roles.cache.get('683652205760479243')
    const écrivainneRole = message.guild.roles.cache.get('683652396416630789')
    const musiciensRole = message.guild.roles.cache.get('683652654584430698')
    const joueureuseRole = message.guild.roles.cache.get('683652792493015042')
    const sportifveRole = message.guild.roles.cache.get('683652892200271914')
    if (member.user.bot) return

  if (['🖍️', '📸', '🎨', '🖋️', '🎼', '🎮', '⚽'].includes(emoji) && message.channel.id === channel.id) {
    switch (emoji) {
      case '🖍️':
        member.roles.remove(graphisteRole)
        message.channel.send(`Le rôle ${graphisteRole.name} a été supprimé avec succès!`)
        break
      case '📸':
        member.roles.remove(photographeRole)
        message.channel.send(`Le rôle ${photographeRole.name} a été supprimé avec succès!`)
        break
      case '🎨':
        member.roles.remove(dessinateurtriceRole)
        message.channel.send(`Le rôle ${dessinateurtriceRole.name} a été supprimé avec succès!`)
        break
      case '🖋️':
          member.roles.remove(écrivainneRole)
          message.channel.send(`Le rôle ${écrivainneRole.name} a été supprimé avec succès!`)
          break
      case '🎼':
            member.roles.remove(musiciensRole)
            message.channel.send(`Le rôle ${musiciensRole.name} a été supprimé avec succès!`)
            break
      case '🎮':
              member.roles.remove(joueureuseRole)
              message.channel.send(`Le rôle ${joueureuseRole.name} a été supprimé avec succès!`)
              break
      case '⚽':
                member.roles.remove(sportifveRole)
                message.channel.send(`Le rôle ${sportifveRole.name} a été supprimé avec succès!`)
                break
    }
  }
}