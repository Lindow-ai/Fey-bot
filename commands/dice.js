  
const { MessageEmbed } = require("discord.js")
const randomDice = () => Math.floor(Math.random() * 6) + 1

module.exports = {
  name: 'dice',
  description: 'Renvoie la valeur de plusieurs dés!',
  execute(client, message, args) {
    const embed = new MessageEmbed()
      .setColor("#d54e12")
      .setTitle("Random Dice")
      .setThumbnail('https://themerkle.com/wp-content/uploads/2017/05/kingdice-pr.jpg')
      .addFields(
        { name: "Random dice #1", value: randomDice(), inline: true },
      )
    message.channel.send(embed)
  }
}