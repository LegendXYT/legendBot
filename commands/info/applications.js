const { RichEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");
const emote = require("../../emojis.json")

module.exports = {
  name: "applications",
  aliases: ["apps", "application"],
  category: "info",
  description: "the application link for server roles!",
  permissions: "member",
  usage: "<application_name>",
  example1: `avatar <@632371763489275906>`,
  run: async (bot, message, args, prefix) => {

    if(!args[0]){
      let errorEmbed = new RichEmbed()
      .setColor("#f03e17")
      .setDescription(emote.cross + "Incorrect arguments\n" + "The applications for this server are:\n\n\`staff\`\n\`developer\`\ncontent creator \`(cc)\`/twitch streamer/youtuber etc\n\`LPX admin (lpa)\` for LPX members only! (clash of clans)\n\`community manager (cm)\`\n\`system manager (sm)\`")
      .setTimestamp()
      message.channel.send(errorEmbed)
    } else {

      if(args[0] === "content" && args[1] === "creator" || args[0] === "youtuber" || args[0] === "streamer"){
        message.channel.send(`use \`${prefix}apps cc\` instead`)
      } else if(args[0] === "lpx" && args[1] === "admin") {
        message.channel.send(`use \`${prefix}apps lpa\` instead`)
      } else if(args[0] === "community" && args[1] === "manager") {
        message.channel.send(`use \`${prefix}apps cm\` instead`)
      } else if(args[0] === "system" && args[1] === "manager") {
        message.channel.send(`use \`${prefix}apps sm\` instead`)
      } else {
        let embed = new RichEmbed()
        embed.setColor("#4143e4")
        embed.setFooter(`From the ${message.guild.name} Moderators`)
        embed.setTimestamp()
        if(args[0] === "staff"){
          embed.setDescription(`:warning: Staff Applications: [Click Here!](https://docs.google.com/forms/d/e/1FAIpQLSebw8MPWcXTB_uJUkv0OU4s0hJyZReRSQ7tIKygySBjUGVN_w/viewform)`)
        } else if(args[0] === "developer" || args[0] === "dev"){
          embed.setDescription(`:desktop: Developer Applications: [Click Here!](https://docs.google.com/forms/d/e/1FAIpQLSebw8MPWcXTB_uJUkv0OU4s0hJyZReRSQ7tIKygySBjUGVN_w/viewform)`)
        } else if(args[0] === "cc"){
          embed.setDescription(`:video_camera: Content Creator Applications: [Click Here!](https://docs.google.com/forms/d/e/1FAIpQLSebw8MPWcXTB_uJUkv0OU4s0hJyZReRSQ7tIKygySBjUGVN_w/viewform)`)
        } else if(args[0] === "lpa"){
          embed.setDescription(`:crossed_swords: LPX Administrator Applications: [Click Here!](https://docs.google.com/forms/d/e/1FAIpQLSebw8MPWcXTB_uJUkv0OU4s0hJyZReRSQ7tIKygySBjUGVN_w/viewform)`)
        } else if(args[0] === "cm"){
          embed.setDescription(`:spy: Community Manager Applications: [Click Here!](https://docs.google.com/forms/d/e/1FAIpQLSebw8MPWcXTB_uJUkv0OU4s0hJyZReRSQ7tIKygySBjUGVN_w/viewform)`)
        } else if(args[0] === "sm"){
          embed.setDescription(`:gear: System Manager Applications: [Click Here!](https://docs.google.com/forms/d/e/1FAIpQLSebw8MPWcXTB_uJUkv0OU4s0hJyZReRSQ7tIKygySBjUGVN_w/viewform)`)
        }

        message.channel.send(embed)
      }


    }


    }
}
