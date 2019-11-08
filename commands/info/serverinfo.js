const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const { formatDate } = require("../../functions.js");
const emote = require("../../emojis.json") //true

module.exports = {
  name: "serverinfo",
  category: "info",
  description: "Shows information about the server",
  permissions: "members",
  run: async (bot, message, args, prefix) => {

    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
        "brazil": ":flag_br: Brazil",
        "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa"
    };
const created = formatDate(message.guild.createdAt);
const statues = ["online", "dnd", "idle"];
let unverifiedRole = message.guild.roles.find("name", "Unverified");
let verifiedRole = message.guild.roles.find("name", "Member");
let staffRole = message.guild.roles.find("name", "staff");
let lpxRole = message.guild.roles.find("name", "Legends Party X");
let vipRole = message.guild.roles.find("name", "⭐VIP⭐");

const embed = new RichEmbed()

        .setAuthor(`${message.guild.name}`, message.guild.iconURL)
        .setFooter(`ID: ${message.guild.id} | Server Creation: `)
        .setThumbnail(message.guild.iconURL)
        .setColor('#3d6af0')

        .addField('👑 Server information:', stripIndents`**Name:** ${message.guild.name}
        **Server ID:** ${message.guild.id}
        **Owner:** <@${message.guild.owner.user.id}>
        **Region:** ${region[message.guild.region]}
        **Creation date:** ${created}
        **Verification level:** ${verifLevels[message.guild.verificationLevel]}`, true)

        .addField(':gear: Settings Information:', stripIndents`**Roles:** ${message.guild.roles.size}
        **Total Channels:** ${message.guild.channels.size}
        **Categories:** ${message.guild.channels.filter(c => c.type == "category").size}
        **Text:** ${message.guild.channels.filter(c => c.type == "text").size}
        **Voice:** ${message.guild.channels.filter(c => c.type == "voice").size}`, true)

        .addField(`${emote.user} Member Information`, stripIndents`**Total members:** ${message.guild.members.size}
        **Total humans:** ${message.guild.members.filter(member => !member.user.bot).size}
        **Total bots:** ${message.guild.members.filter(member => member.user.bot).size}
        **Members online:** ${message.guild.members.filter(m => statues.includes(m.user.presence.status)).size}`, true)

        .addField(`:scales: Role Information`, stripIndents`**Verified members:** ${verifiedRole.members.size}
        **Unverified Members:** ${unverifiedRole.members.size}
        **Total Staff:** ${staffRole.members.size}
        **Total LPX members:** ${lpxRole.members.size}
        **Total VIP members:** ${vipRole.members.size}`, true)

        .setTimestamp(message.guild.createdAt)

        message.channel.send(embed);
  }
}
// .setAuthor(member.user.tag, member.user.displayAvatarURL)
// .setDescription(`<@${member.user.id}>`)
// .setFooter(`ID: ${mess}`)
// .setThumbnail(member.user.displayAvatarURL)
// .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)
//
// .addField(':beginner:Member information:', stripIndents`**> Display name:** ${member.displayName}
// **> Joined at:** ${joined}
// **> Join postion:** ${memberPos}
// **> User role count:** ${member.roles.size} roles`, true)
//
// .addField(`${emote.user}User information:`, stripIndents`**> ID:** ${member.user.id}
// **> Username**: ${member.user.tag}
// **> Status**: ${status[member.user.presence.status]}
// **> Created at**: ${created}
// ${botI}`, true)
//
// .setTimestamp()
