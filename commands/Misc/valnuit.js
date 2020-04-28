module.exports.run = (client, message, args) => {
    message.channel.send({files: [{
        attachment: './valnuit.mp3',
        name: 'valnuit.mp3'
    }]
})
  }
  
  module.exports.help = {
    name: "valnuit",
    description: "Valnuit présentation",
    cooldown : 10,
    args: false
  }
