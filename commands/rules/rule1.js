const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json").guild || require("../../botconfig.json").info
const serverownerID = botconfig.ownerID;
const rulesChannel = botconfig.rulesChanID
const emote = require("../../emojis.json")
module.exports = {
  name: "rule1",
  category: "rules",
  description: "Returns rule 1",
  permissions: "members",
  run: async (bot, message, args, prefix) => {

      message.channel.send("**NO FANNING LEGEND X**:  This includes tagging him, friending him, and DMing him. He is just like everyone else and is very busy.")
  }
}
