const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json").guild || require("../../botconfig.json").info
const serverownerID = botconfig.ownerID;
const rulesChannel = botconfig.rulesChanID
const emote = require("../../emojis.json")
module.exports = {
  name: "rule3",
  category: "rules",
  description: "Returns rule 3",
  permissions: "members",
  run: async (bot, message, args, prefix) => {


      message.channel.send("**KEEP CHAT TO KID FRIENDLY**: this means no NSFW what so ever or anything inappropriate.")
  }
}
