module.exports = {
  name: "apply",
  category: "clash of clans",
  description: "Apply for our clan",
  permissions: "everyone",
  run: async (bot, message, args, prefix) => {
    message.delete()
    let role = message.guild.roles.get("635380963731308545");

    if(message.member.roles.has(role)) {
      message.member.send("You already are applying silly!").then(msg => msg.delete(5000))
    } else {
      message.member.send("Be sure to check <#637899554494087169> and <#635383284708278293>\n Good luck with the application!")
    }
    message.member.addRole(role).catch(console.error);

  }
}
