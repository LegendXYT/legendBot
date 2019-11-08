const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json").guild || require("../../botconfig.json").info
const serverownerID = botconfig.ownerID;
const rulesChannel = botconfig.rulesChanID
const emote = require("../../emojis.json")
module.exports = {
  name: "rule7",
  category: "rules",
  description: "Returns rule 7",
  permissions: "members",
  run: async (bot, message, args, prefix) => {


      message.channel.send("**NO ROLE PINGS:** if you are found to role ping, you will be punished as these role pings are for announcing purposes only!")
  }
}
