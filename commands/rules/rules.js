const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json").guild || require("../../botconfig.json").info
const serverownerID = botconfig.ownerID;
const rulesChannel = botconfig.rulesChanID
const emote = require("../../emojis.json")
module.exports = {
  name: "server-rules",
  category: "rules",
  description: "Returns server rules",
  permissions: "Server Owner",
  run: async (bot, message, args, prefix) => {
    let rulesChan = `<#${rulesChannel}>`
    if(message.author.id != serverownerID) return message.channel.send(`The rules for this server: ${rulesChan}`)
    message.delete()
    var tos = [
      'Discord ToS'
    ]

    var guidlines = [
      'Guidelines'
    ]
    let adChan = '<#501315465323347968>'

    var discord1 = tos[Math.round(Math.random() * (tos.length - 1))];
    var discord2 = guidlines[Math.round(Math.random() * (guidlines.length - 1))];

    let embed = new Discord.RichEmbed()

      .setColor("#11429c")
      .setTitle(`${emote.weewoo}**READ AND REACT TO GAIN ACCESS TO REST OF SERVER**${emote.weewoo}\n`)
      .setDescription(`\n1. **NO FANNING LEGEND X**:  This includes tagging him, friending him, and DMing him. He is just like everyone else and is very busy.\n
        2. **DONT DISRESPECT OTHER MEMBERS**: (with threats, insults, impostering others, inappropriate nicknames or any other traits)\n
        3. **KEEP CHAT TO KID FRIENDLY**: this means no NSFW what so ever or anything inappropriate.\n
        4. **DON'T START TROUBLE**: we dont want any toxic people in this server. be supportive and greatful of one another. report all toxic people to a staff member.\n
        5. **DON'T SELF ADVERTISE**: no promotions of media or discord servers in channels, only place this is allowed is ***${adChan}***.\n
        6. **DON'T ABUSE THE BOTS**: abusing the bots and using them incorrectly or their allocated channels is not tollerated. report this to a staff member.\n
        7. **NO ROLE PINGS**: if you are found to role ping, you will be punished as these role pings are for announcing purposes only!\n
        8. **HAVE FUN**\n

        ***ALL [${discord1}](https://discordapp.com/terms) and [${discord2}](https://discordapp.com/guidelines) must be followed at ALL TIMES.***`)

     .setFooter(`Supported by the ${message.guild.name} staff`, message.guild.iconURL)

    //  message.channel.fetchMessages({around: 627288724761214977, limit: 1})
    // .then(msg => {
    //     const fetchedMsg = msg.first();
    //     fetchedMsg.edit(embed);
    // });
     message.channel.send(embed).then(message => {message.channel.send("**INVITE YOUR FRIENDS: <https://discord.gg/J6zsD9f>**")})

  }
}
