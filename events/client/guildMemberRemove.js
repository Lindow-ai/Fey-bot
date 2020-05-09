const { MessageEmbed } = require('discord.js')

module.exports = (client, member) => {
    const embed = new MessageEmbed()
      .setAuthor(`${member.displayName} (${member.id})`)
      .setTitle("Adieu Valnuit !")
      .setDescription("NOUS... Ils, Ô DIEU MISÉRICORDIEU ! SES VICTIMES SONT LÉGION MAIS CE SOIR, ILS NE SONT PAS NOUS NOUS PRENONS DES RESPIRATIONS RECONNAISSANTE DE L'AIR DE L'OMBRE DE LA NUIT DES RESPIRATIONS SOUFFLÉES, DES RESPIRATIONS EFFRAYANTES MAIS RESPIREZ PROFONDÉMENT - IL N'Y A RIEN LÀ LA ILS SONT PARTIE MAIS ALORS, PAS POUR TOUJOURS ILS ATTENDENT DERRIÈRE LES PORTES ET AU BOUT DES COULOIRS SOMBRES ILS NE SUIVENT AUCUNE LOGIQUE, ILS N'EXISTE QUE POUR LE DÉPIT MAIS VOUS ÊTES EN SÉCURITÉ POUR L'INSTANT, CHER VALNUITAINS,")
      .setColor('#dc143c')
      .setThumbnail(member.user.displayAvatarURL())
      .setImage('https://thumbs.gfycat.com/CoolGlamorousKoalabear-small.gif')
      .setFooter('BONNE NUIT!')
      .setTimestamp()

    client.channels.cache.get('674013879742758927').send(embed)
  }