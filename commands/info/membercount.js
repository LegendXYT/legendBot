const Discord = require("discord.js");
const emote = require("../../emojis.json")
module.exports = {
    name: "membercount",
    category: "Info",
    description: "Returns the member count information of the server.",
    permissions: "members",
    run: async (bot, message, args, prefix) => {
      let unverifiedRole = message.guild.roles.find("name", "Unverified");
      let verifiedRole = message.guild.roles.find("name", "Member");
      const statues = ["online", "dnd", "idle"];
      let memberCount = new Discord.RichEmbed()
      .setColor("#00ff00")
      .addField("Total", `:beginner:${message.guild.members.size}`, true)
      .addField("Humans", `${emote.user}${message.guild.members.filter(member => !member.user.bot).size}`, true)
      .addField("Online", `${emote.online}${message.guild.members.filter(m => statues.includes(m.user.presence.status)).size}`, true)
      .addField("Verified Users", `${emote.tick}${verifiedRole.members.size}`, true)
      .addField("Unverified Users", `${emote.cross}${unverifiedRole.members.size}`, true)
      .addField("Bots", `:robot:${message.guild.members.filter(member => member.user.bot).size}`, true)

      message.channel.send(memberCount)

    }
}
