const { MessageEmbed } = require('discord.js')

module.exports.run = (client, message, args) => {
    const graphisteRole = message.guild.roles.cache.get('683651985794269214')
    const photographeRole = message.guild.roles.cache.get('683652085040152610')
    const dessinateurtriceRole = message.guild.roles.cache.get('683652205760479243')
    const écrivainneRole = message.guild.roles.cache.get('683652396416630789')
    const musiciensRole = message.guild.roles.cache.get('683652654584430698')
    const joueureuseRole = message.guild.roles.cache.get('683652792493015042')
    const sportifveRole = message.guild.roles.cache.get('683652892200271914')

    const embed = new MessageEmbed()
    .setTitle('Rôles')
    .setDescription("Votre musique, vos paroles, la prose de plomb de votre vie prouve que tout ce que vous êtes et ce que vous n'êtes pas, les structures que vous vous construisez pour donner à la futilité un sens. Pour l'instant et pour toujours, par la volonté des dieux morts et mourants. Vous resterez à jamais ce que vous avez décidez d'être.")
    .setColor('#dc143c')
    .addField(
        "Les rôles disponibles:",
        `
        🖍️ - ${graphisteRole.toString()}
        📸 - ${photographeRole.toString()}
        🎨 - ${dessinateurtriceRole.toString()}
        🖋️ - ${écrivainneRole.toString()}
        🎼 - ${musiciensRole.toString()}
        🎮 - ${joueureuseRole.toString()}
        ⚽ - ${sportifveRole.toString()}
        `
    )
    client.channels.cache.get('685819141524946954').send(embed).then(async msg => {
        await msg.react('🖍️')
        await msg.react('📸')
        await msg.react('🎨')
        await msg.react('🖋️')
        await msg.react('🎼')
        await msg.react('🎮')
        await msg.react('⚽')
    })
  };
  
  module.exports.help = {
    name: "allroles",
    aliases: ['allroles'],
    category: 'reactions',
    description: "Renvoie un message avec des réactions!",
    cooldown: 10,
    usage: '',
    permissions: true,
    isUserAdmin: false,
    args: false
  };