
module.exports.run = (client, message, args) => {
  message.channel.send("Pong!");
};

module.exports.help = {
  name: "ping",
  aliases: ['ping'],
  category: 'misc',
  description: "Renvoie pong!",
  cooldown: 10,
  usage: '',
  permissions: false,
  args: false
};