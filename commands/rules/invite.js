const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json").guild || require("../../botconfig.json").info
const serverownerID = botconfig.ownerID;
const rulesChannel = botconfig.rulesChanID
const emote = require("../../emojis.json")
module.exports = {
  name: "invite",
  category: "rules",
  description: "Returns server invite",
  permissions: "members",
  run: async (bot, message, args, prefix) => {

      message.channel.send("<https://discord.gg/J6zsD9f>")
  }
}
