const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json").guild || require("../../botconfig.json").info
const serverownerID = botconfig.ownerID;
const rulesChannel = botconfig.rulesChanID
const emote = require("../../emojis.json")
module.exports = {
  name: "rule4",
  category: "rules",
  description: "Returns rule 4",
  permissions: "members",
  run: async (bot, message, args, prefix) => {


      message.channel.send("**DON'T START TROUBLE**: we dont want any toxic people in this server. be supportive and greatful of one another. report all toxic people to a staff member")
  }
}
