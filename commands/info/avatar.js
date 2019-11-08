const { RichEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");
const emote = require("../../emojis.json")

module.exports = {
  name: "avatar",
  category: "info",
  description: "get the avatar of a user",
  permissions: "member",
  usage: "[username | id | mention]",
  example1: `avatar <@632371763489275906>`,
  run: async (bot, message, args, prefix) => {
    // if a user is tagged
    let msg = await message.channel.send("Generating avatar...");
    let mentionedUser = getMember(message, args.join(" "));


       let embed = new RichEmbed()

       .setImage(mentionedUser.user.displayAvatarURL)
       .setColor("00ff00")
       .setTitle(`${mentionedUser.user.username}'s Avatar`)
       .setFooter("Searched by " + message.author.tag)
       .setDescription("[Avatar URL link]("+mentionedUser.user.displayAvatarURL+")");

       message.channel.send(embed)




msg.delete();

    }
}
