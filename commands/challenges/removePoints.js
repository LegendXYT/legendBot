const eco = require('discord-economy');
const { RichEmbed } = require('discord.js');
const emote = require('../../emojis.json');
module.exports = {
    name: "removepoints",
    aliases: ["remove-points", "pointsremove", "remove-points"],
    category: "challenges",
    description: "remove points from a user",
    usage: "<user> <amount>",
    run: async (bot, message, args, prefix) => {
      if(message.member.roles.find(r => r.name === "staff")){
      var user = message.mentions.users.first()
      if (!user) return message.channel.send(emote.cross + 'Please specify a user to remove points from!')
      var amount = args[1]
      if (!amount) return message.channel.send(emote.cross + 'Please specify the amount of points to remove!')
      var output = await eco.FetchBalance(user.id)
      if (output.balance < 50) return message.reply(emote.cross + user.username + " has not registered yet!")
      eco.SubtractFromBalance(user.id, amount)
      message.channel.send(emote.tick + `Successfully removed \`${amount}\` from ${user.username}!`)

}  else {
  return message.reply("you are not a staff member!").then(msg => msg.delete(5000))
}

    }
}
