const { MessageEmbed } = require('discord.js')

module.exports = async (client, member, message) => {

    

    const embed = new MessageEmbed()
      .setAuthor(`${member.displayName} (${member.id})`)
      .setTitle("Bienvenue à Valnuit !")
      .setDescription("Une communauté reculée mais amicale, où le Soleil est chaleureux, la Lune magnifique, et où de mystérieuses lumières passent au dessus de nos têtes quand nous faisons tous semblant de dormir. Pensez à vous présenter dans le salon salle archive pour avoir accès à l'ensemble du serveur\n")
      .setColor('#35f092')
      .setThumbnail(member.user.displayAvatarURL())
      .setImage('https://i.pinimg.com/originals/d6/dc/23/d6dc23f1f0b4d95998ada2aada3a05a2.gif')
      .setFooter("Ténèbres de velours. Lumière soyeuse. La toile de jute rugueuse du soir. Le coton effiloché de l'aube.")
      .setTimestamp()

      member.createDM().then(channel => {
        channel.send({
            files: [{
              attachment: './valnuit.mp3',
              name: 'valnuit.mp3'
            }]
        })
        channel.send(embed)
    })

   

    client.channels.cache.get('674013879742758927').send(embed)
  
      await client.createUser({
        guildID: member.guild.id,
        guildName: member.guild.name,
        userID: member.id,
        username : member.user.tag,
      })
    }
    