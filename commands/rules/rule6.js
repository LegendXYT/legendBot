const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json").guild || require("../../botconfig.json").info
const serverownerID = botconfig.ownerID;
const rulesChannel = botconfig.rulesChanID
const emote = require("../../emojis.json")
module.exports = {
  name: "rule6",
  category: "rules",
  description: "Returns rule 6",
  permissions: "members",
  run: async (bot, message, args, prefix) => {


      message.channel.send("**DON'T ABUSE THE BOTS**: abusing the bots and using them incorrectly or their allocated channels is not tollerated. report this to a staff member.")
  }
}
