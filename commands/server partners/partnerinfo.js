const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json").guild
const serverownerID = botconfig.ownerID;

module.exports = {
  name: "partnerinfo",
  category: "server partners",
  description: "Returns partner information",
  permissions: "Server Owner",
  run: async (bot, message, args, prefix) => {
  if(message.author.id != serverownerID) return
  message.delete()
  var server_name = [
    'Server Name'
  ]
  var terms_of_service = [
    'Discord Terms of Service'
  ]

  var community_guidlines = [
    'Community Guidelines'
  ]

  var discord_link1 = server_name[Math.round(Math.random() * (server_name.length - 1))];
  var discord_link2 = terms_of_service[Math.round(Math.random() * (terms_of_service.length - 1))];
  var discord_link3 = community_guidlines[Math.round(Math.random() * (community_guidlines.length - 1))];

  let partnerEmbed = new Discord.RichEmbed()

    .setTitle(`**All these servers are a partner of Legend X or the LEGENDS Community, so be sure to check them out!**`)
    .setDescription(`**To become a partner you must have the following:**
      - Be part of eSports or a competive clan for a game or a server dedicated to a streamer/YouTuber
      - The applier **MUST** be the owner/admin of the server
      - Have a good relationship with this server/Legend X
      - Have over 250 members in the server
      - Server must obey the [${discord_link2}](https://discordapp.com/terms) and [${discord_link3}](https://discordapp.com/guidelines)

      if you think you are worthy of getting this partnership please Direct Message **@Legend Mail#7827** to get started!

      **Rewards:**
      - Your server and information will be placed here!
      - 2 special roles for you and one of your admins
      - Secret channel
      - Special perimissions
      `)
      // [${discord_link1}](discord server link)`)

   // .setFooter(`Come and Join gand say hello!`, iconLink)
   message.channel.send(`**Welcome to Partnerships! here are the partners that with are apart of/similar to.**`)
   message.channel.send(partnerEmbed)


  }
}
