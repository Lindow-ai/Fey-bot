module.exports = client => {
  console.log(`Logged in as ${client.user.tag}!`)
  client.channels.cache.get('676543889016094720').send('Le bot est opérationnel!')
  client.user.setPresence({ activity: { name: 'éclairer les valnuitains', type: 'PLAYING' }, status: 'dnd' })
}