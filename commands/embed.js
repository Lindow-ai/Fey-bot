const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'embed',
    description: 'Renvoie un embed',
    execute(client, message, args) {
        const embed = new MessageEmbed()
        .setColor('#b967ff')
        .setTitle("Titre de l'embed")
        .setURL('https://github.com/Lindow-ai/Fey-bot')
        .setDescription("Description de l'embed")
        .setThumbnail(client.user.displayAvatarURL())
        .addField('Je suis un champ', 'et je suis sa valeur')
        .addFields(
            { name: 'Je suis le champ 1', value: 'et je suis sa valeur', inline: true },
            { name: 'Je suis le champ 2', value: 'et en plus on est aligné !', inline: true }
        )
        .setImage(client.user.displayAvatarURL())
        .setTimestamp()
        .setFooter('Je suis sur le pied du footer')

        message.channel.send(embed)
    }
  }