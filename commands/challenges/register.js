const eco = require('discord-economy');
const { RichEmbed } = require('discord.js');
const emote = require('../../emojis.json');
module.exports = {
    name: "register",
    category: "challenges",
    description: "register yourself in the current season",
    run: async (bot, message, args, prefix) => {

      var output = await eco.FetchBalance(message.author.id)
      if(output.balance < 51){
        message.channel.send(`Welcome ${message.author.username} Here is \`50\` points just to get you started\ndo ${prefix}points to check how many points you got\nto get started do \`${prefix}challenges\` to see what is the current challenges for the week,\nfor more commands check \`${prefix}help\``)
        eco.SetBalance(message.author.id, 50)
      } else {
        return message.channel.send("Your already registered silly!")
    }

   }
}
