const { MessageEmbed } = require('discord.js')

module.exports.run = (client, message, args) => {
    message.channel.send({files: [{
        attachment: './valnuit.mp3',
        name: 'valnuit.mp3'
    }]
})
    const embed = new MessageEmbed()
      .setColor('bb0b0b')
      .setTitle("Bienvenue à Valnuit !")
      .setAuthor("Osiris")
      .setDescription("Une communauté reculée mais amicale, où le Soleil est chaleureux, la Lune magnifique, et où de mystérieuses lumières passent au dessus de nos têtes quand nous faisons tous semblant de dormir.\n")
      .setThumbnail('https://zupimages.net/up/20/17/k14d.png')
      .addField("Ainsi, différents sujets restent à votre disposition",
      "> Aucune phrase ajoutée.")
      .addField("Au plaisir de vous retrouver sur notre serveur,",
            "Le Conseil de Valnuit.") 
      .setTimestamp()
      .setFooter("Coded by Osiris");

    message.channel.send(embed)
  }
  
  module.exports.help = {
    name: "valnuit",
    description: "Valnuit présentation",
    cooldown : 10,
    usage: '<votre_message>',
    isUserAdmin: false,
    permissions: false,
    args: false
  }
