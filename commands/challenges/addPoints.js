const eco = require('discord-economy');
const { RichEmbed } = require('discord.js');
const emote = require('../../emojis.json');
module.exports = {
    name: "addpoints",
    aliases: ["add-points", "points-add", "pointsadd"],
    category: "challengers",
    description: "add points to a user",
    usage: "<user> <amount>",
    run: async (bot, message, args, prefix) => {
      if(message.member.roles.find(r => r.name === "staff")){
      let user = message.mentions.users.first()
      if (!user) return message.channel.send(emote.cross + 'Please specify a user to add points to!')
      let amount = args[1]
      if (!amount) return message.channel.send(emote.cross + 'Please specify the points to add!')
      var output = await eco.FetchBalance(user.id)
      if (output.balance < 50) return message.reply(emote.cross + user.username + ` didn't register yet \`${prefix}register\` to get started!`)
      message.channel.send(emote.tick + `Successfully added \`${amount}\` points to ${user.username}!`)
      eco.AddToBalance(user.id, amount)

}  else {
  return message.reply("Your not a staff member!").then(msg => msg.delete(5000))
}

    }
}
