const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json").guild || require("../../botconfig.json").info
const serverownerID = botconfig.ownerID;
const rulesChannel = botconfig.rulesChanID
const emote = require("../../emojis.json")
module.exports = {
  name: "rules-clash-apps",
  category: "clash of clans",
  description: "Returns clash apply information",
  permissions: "Server Owner",
  run: async (bot, message, args, prefix) => {
    if(message.author.id != serverownerID) return
    message.delete()

    let embed = new Discord.RichEmbed()
    .setColor("#11429c")
    .setTitle("Recuritment Role")
    .setDescription("You want to apply for LPX? Our clash of clans clan?\nTo get the Recuritment role\nType **+apply**")

message.channel.send(embed)
  }
}
