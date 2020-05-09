module.exports.run = (client, message, args) => {
    message.channel.send(args.join(' '))
    message.delete()
  }
  
  module.exports.help = {
    name: "say",
    aliases: ['repeat', 'rep'],
    category: 'misc',
    description: "Répéte le message d'un utilisateur",
    cooldown: 10,
    usage: '<votre_message>',
    isUserAdmin: false,
    permissions: false,
    args: true
  }