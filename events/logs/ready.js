module.exports = client => {
  console.log(`${client.user.tag} observe les ${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)} utilisateurs du serveur !`)
  client.channels.cache.get('676543889016094720').send('Le bot est opérationnel !')

  let activites = ['$help', `avec ${client.guilds.cache.map(g => g.memberCount).reduce((a, b) => a + b)} utilisateurs`, 'éclairer les valnuitains', 'Contemple les grands ancien', `sur ${client.guilds.cache.size.toString()} serveurs`], i = 0

  setInterval(() => client.user.setPresence({ activity: { name: `${activites[i++ % activites.length]}`, type: 'PLAYING' }, status: 'online' }), 3000)
}
