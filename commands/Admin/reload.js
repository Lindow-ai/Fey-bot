const { MESSAGES } = require('../../util/constants')

module.exports.run = async (client, message, args) => {
    await message.delete()
    await client.channels.cache.get('685819141524946954').send('Le bot redémarre!')
    process.exit()
}

module.exports.help = MESSAGES.COMMANDS.ADMIN.RELOAD