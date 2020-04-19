const { Client } = require('discord.js')
const client = new Client({ disableMentions: 'everyone' })

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content === 'ping') msg.channel.send('Pong!')
  if (msg.content === 'everyone') msg.channel.send('@everyone, salut à tous !', { disableMentions : false })
  if (msg.content === 'noteveryone') msg.channel.send('@everyone (noteveryone), salut à tous !')
})

client.login('NTcwMjk5NDM5MjM5OTIxNzk1.XpsPVA.d8JWvC9HCcQ53hdzjJH8Ap4rXJA')