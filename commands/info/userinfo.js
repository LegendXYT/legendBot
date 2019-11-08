const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { getMember, formatDate } = require("../../functions.js");
const emote = require("../../emojis.json")

module.exports = {
  name: "userinfo",
  aliases: ["who", "user", "whois"],
  description: "Returns user information",
  permissions: "members",
  usage: "[username | id | mention]",
  example1: `userinfo <@632371763489275906>`,
  run: async (bot, message, args, prefix) => {
    // if a user is tagged
      const member = getMember(message, args.join(" "));
// -----------------------------
      // Member variables
// -----------------------------
      // user join date
      const joined = formatDate(member.joinedAt);
      // what roles does the user have
      const roles = member.roles
          .filter(r => r.id !== message.guild.id)
          .map(r => r).join(", ") || 'none';
      // user join postion
      const sortedMembers = message.guild.members.array().sort((a, b) => a.joinedTimestamp - b.joinedTimestamp);
      const memberPos = sortedMembers.findIndex(e => e.id === member.id) + 1;
// ---------------------------------
      // User variables
// ---------------------------------
      // creation date of user
      const created = formatDate(member.user.createdAt);
      // if the user is a bot
      let botI;
      if (member.user.bot)
        botI = `**> Is Bot**: True`
      if (!member.user.bot)
        botI = ""
        // user status
        const status = {
                 online: `${emote.online} Online`,
                 idle: `${emote.idle} Idle`,
                 dnd: `${emote.dnd} Do Not Disturb`,
                 offline: `${emote.offline} Offline/Invisible`
               }
        // embed
      const embed = new RichEmbed()
          .setAuthor(member.user.tag, member.user.displayAvatarURL)
          .setDescription(`<@${member.user.id}>`)
          .setFooter(`ID: ${member.user.id}`)
          .setThumbnail(member.user.displayAvatarURL)
          .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

          .addField(':beginner:Member information:', stripIndents`**Display name:** ${member.displayName}
          **Joined at:** ${joined}
          **Join postion:** ${memberPos}
          **User role count:** ${member.roles.size} roles`, true)

          .addField(`${emote.user}User information:`, stripIndents`**ID:** ${member.user.id}
          **Username**: ${member.user.tag}
          **Status**: ${status[member.user.presence.status]}
          **Created at**: ${created}
          ${botI}`, true)

          .setTimestamp()

      if (member.user.presence.game)
          embed.addField(':video_game: Currently playing', stripIndents`**Name:** ${member.user.presence.game.name}`);

      message.channel.send(embed);
  }
}
