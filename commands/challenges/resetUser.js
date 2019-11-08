const eco = require('discord-economy');
const { RichEmbed } = require('discord.js');
const emote = require('../../emojis.json');
module.exports = {
    name: "resetuser",
    category: "economy",
    description: "reset a users earnings",
    usage: "<user>",
    run: async (bot, message, args, prefix) => {
      if(message.author.id == '513571036688547871' || message.author.id == '560004162905964548') {
      var user = message.mentions.users.first()
      if (!user) return message.channel.send(emote.cross + 'Please specify a user I have to delete in my database!')

      var output = await eco.Delete(user.id)
      if (output.deleted == true) return message.channel.send(emote.tick + `Successfully deleted the ${user.username} out of the database!`)

      message.channel.send(emote.cross  + 'Error: Could not find the user in database.')

}  else {
  return message.reply("you are not the server owner!").then(msg => msg.delete(5000))
}

    }
}
