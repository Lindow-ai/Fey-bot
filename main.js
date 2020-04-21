const { Client } = require('discord.js')
const { TOKEN, PREFIX } = require('./config')
const client = new Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', message => {
  if (!message.content.startsWith(PREFIX) || message.author.bot) return
  const args = message.content.slice(PREFIX.length).split(/ +/)
  console.log(args)
  // [bla, bla, bla]
  // ?user bla bla bla
  const command = args.shift().toLocaleLowerCase()
  // ?user
  console.log(command)

  if (command === 'salut') message.channel.send('Je suis le bot !')
  if (command === 'ping') message.channel.send('Pong!')
  if (command === 'server') message.channel.send(`Je suis sur le serveur ${message.guild.name}.`)
  if (command === 'user') message.channel.send(`Je suis l'utilisateur ${message.author.tag}.`)
  if (command === 'userinfo' ) {
    const user_mention = message.mentions.users.first()
    message.channel.send(`Voici le tag de la personne mentionné : ${user_mention.tag}`)
  }
})

client.login(TOKEN)