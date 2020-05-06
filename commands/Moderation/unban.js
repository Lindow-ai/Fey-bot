const { MessageEmbed } = require('discord.js')

module.exports.run = async (client, message, args) => {
    const user = await client.users.fetch(args[0]) 
    if (!user) return message.reply("L'utilisateur n'existe pas.")
    message.guild.members.unban(user) 

    const embed = new MessageEmbed()
    .setAuthor(`${user.username} (${user.id})`)
    .setColor("#dc143c")
    .setDescription(`**Action**: unban`)
    .setThumbnail(user.avatarURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL())

    client.channels.cache.get('685819141524946954').send(embed)
  }
  
  module.exports.help = {
    name: "unban",
    aliases: ['unban'],
    category: 'moderation',
    description: "Unban un utilisateur",
    cooldown: 10,
    usage: '<user_id>',
    isUserAdmin : false,
    permissions: true,
    args: true
  }