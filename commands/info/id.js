const { RichEmbed } = require("discord.js");
const { getMember } = require("../../functions.js");
const emote = require("../../emojis.json")

module.exports = {
  name: "id",
  category: "info",
  description: "get the id of a user",
  permissions: "member",
  usage: "[username | id | mention]",
  example1: `id <@632371763489275906>`,
  run: async (bot, message, args, prefix) => {
    // if a user is tagged
      const member = getMember(message, args.join(" "));

      message.channel.send(`${member.displayName}'s ID: \`${member.user.id}\`.`);
    }
}
