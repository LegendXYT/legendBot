const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json").slowmodes
const advirse = botconfig.advirtisementChanID;
module.exports = {
  name: "rule5",
  category: "rules",
  description: "Returns rule 5",
  permissions: "members",
  run: async (bot, message, args, prefix) => {

let adChan = `<#${advirse}>`
      message.channel.send(`**DON'T SELF ADVERTISE**: no promotions of media or discord servers in channels, only place this is allowed is ***${adChan}***.`)
  }
}
