const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json").guild || require("../../botconfig.json").info
const serverownerID = botconfig.ownerID;
const rulesChannel = botconfig.rulesChanID
const emote = require("../../emojis.json")
module.exports = {
  name: "rule2",
  category: "rules",
  description: "Returns rule 2",
  permissions: "members",
  run: async (bot, message, args, prefix) => {


      message.channel.send("**DONT DISRESPECT OTHER MEMBERS**: (with threats, insults, impostering others, inappropriate nicknames or any other traits)")
  }
}
