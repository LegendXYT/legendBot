const emote = require("../../emojis.json");
module.exports = {
  name: "lpx",
  category: "clash of clans",
  description: "disable or enable viewing the channels that isnt apart of LPX",
  usage: "enable | disable",
  permissions: "everyone",
  run: async (bot, message, args, prefix) => {
    if(message.channel.id === "635381334033825812"){
    let role = message.guild.roles.get("637903806763368449");
    if(!args[0] || !args === "enable" && !args === "disable") return message.channel.send(`Do you want to enable or disable your viewing? usage: \`${prefix}lpx disable\` or \`${prefix}lpx enable\``)
    if(args[0] === "enable"){
      message.channel.send("You now have access to view everything that isnt LPX related")
      message.member.removeRole(role).catch(console.error);
    } else if(args[0] === "disable"){
      message.channel.send("You now removed your access to view everything that isnt LPX related")
      message.member.addRole(role).catch(console.error);
    } else {
      message.channel.send(`${emote.cross} An error occured, please contact <@539300557916209162> or server owner`)
    }
  } else {
    message.channel.send("This command can only be done in <#635381334033825812>")
  }
  }
}
