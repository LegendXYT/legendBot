const Discord = require("discord.js")
const botconfig =  require("../../botconfig.json").guild;
const rm = require('discord.js-reaction-menu');
const serverownerID = botconfig.ownerID;

module.exports = {
    name: "help",
    category: "Utility",
    aliases: ["commands", ""],
    description: "get all of the bots commands!",
    permissions: "members",
    run: async (bot, message, args, prefix) => {
      // If there's an args found
           // Send the info of that command found
           // If no info found, return not found embed.
           if (args[0]) {
               return getCMD(prefix, bot, message, args[0]);
           } else {
               // Otherwise send all the commands available
               // Without the cmd info
               return getAll(bot, message, prefix);
           }
       }
   }
   function getAll(bot, message, prefix) {

      let max;
      if(message.author.id != serverownerID) {
        max = '4'
      }
      if(message.author.id == serverownerID) {
        max = '5'
      }
      // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      // home page
        let home = new Discord.RichEmbed()
        .setAuthor("Legend Bot - Help", bot.user.displayAvatarURL)
        .setDescription(`Hello ${message.author.username} my name is ${bot.user.username}, this is the home page of the help menu!
          \nMy prefix is **${prefix}**\n\nTo find more information on a command use **${prefix}help <command>**
          Not touching the reactions for 1 minute will remove the reactions!
          Only the user who triggers this command may navigate through the pages!
          \n **|** = or\n**<>** = required\n**[]** = optional
          \n\nTo navigate through the pages react to the emojis below!
          ⏪ = go back to this page right here!
          ◀ = go to the previous page
          ▶ = go to the next page
          ⏩ = skip all the pages and go to the last page
          :stop_button: = cancel the help command and this will remove all reactions!
      `)
        .setFooter(`Page 1 of ${max} • Requested by ${message.author.username}`, message.author.displayAvatarURL)
        .setTimestamp()
        // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        // page 2
        let page2 = new Discord.RichEmbed()
        .setAuthor("Legend Bot - Help Information", bot.user.displayAvatarURL)
        .setDescription(`Information Commands:\n
          **Help**
            brings up this document!
              --> help [command] gives more information on a command

          **serverinfo**
            shows information about this server!

          **userinfo**
            shows information about a certain user (if there is no mention then it will be your information)

          **membercount**
            displays the servers membercount status!

          **ping**
            shows how fast the bots response is.

          **id**
            gets the id of a user.

          **avatar**
            gets the avatar of a user.

          **Applications**
            get the link to the server applications for roles

      `)
        .setFooter(`Page 2 of ${max} • ${prefix}help [command] for more information`)
        .setTimestamp()

        // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          // page 5
            let page3 = new Discord.RichEmbed()
            .setAuthor("Legend Bot - Help Information", bot.user.displayAvatarURL)
            .setDescription(`Rules Commands:\n
            **rules**
              lists the servers rules

            **rule1**
              lists rule 1

            **rule2**
              lists rule 2

            **rule3**
              lists rule 3

            **rule4**
              lists rule 4

            **rule5**
              lists rule 5

            **rule6**
              lists rule 6

            **rule7**
              lists rule 7

          `)
            .setFooter(`Page 3 of ${max} • ${prefix}help [command] for more information`)
            .setTimestamp()
            // page 4
            let page4 = new Discord.RichEmbed()
            .setAuthor("Legend Bot - Help Information", bot.user.displayAvatarURL)
            .setDescription(`Special Commands:\n
              **lpx**
                disables or enables to see if you want to see just LPX stuff or LPX and Legends community stuff. (lpx members only)

              **points**
                check how much points you got.

              **challenge**
                check this weeks challenges

              **leaderboard**
                see who is on top of the challenge leaderboard!

          `)
            .setFooter(`Page 4 of ${max} • ${prefix}help [command] for more information`)
            .setTimestamp()
            // page 5
              let page5 = new Discord.RichEmbed()
              .setAuthor("Legend Bot - Help Information", bot.user.displayAvatarURL)
              .setDescription(`Server Partner Commands:\n
                **partnerinfo**
                  sends the message of how to be partnered with Legends

                **titans**
                  sends a message of a partner -- TITANS SERVER!

            `)
              .setFooter(`Page 5 of ${max} • ${prefix}help [command] for more information`)
              .setTimestamp()


                  if (message.author.id != serverownerID) {
                  new rm.menu(message.channel, message.author.id, [home, page2, page3, page4], 60000)

                  }

                  if (message.author.id == serverownerID) {
                  new rm.menu(message.channel, message.author.id, [home, page2, page3, page4, page5], 60000)

                }
  }
      // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      function getCMD(prefix, bot, message, input) {
          const embed = new Discord.RichEmbed()

          // Get the cmd by the name or alias
          const cmd = bot.commands.get(input.toLowerCase()) || bot.commands.get(bot.aliases.get(input.toLowerCase()));

          let info = `No information found for command **${input.toLowerCase()}**`;

          // If no cmd is found, send not found embed
          if (!cmd) {
              return message.channel.send(embed.setColor("RED").setDescription(info));
          }

          // Add all cmd info to the embed
          if (cmd.name) info = `**Name**: ${cmd.name}`;
          if (cmd.category) info += `\n**category**: ${cmd.category}`;
          if (cmd.aliases) info += `\n**Aliases**: ${cmd.aliases.map(a => `\`${a}\``).join(", ")}`;
          if (cmd.description) info += `\n**Description**: ${cmd.description}`;
          if (cmd.usage) {
              info += `\n\n**Usage**: ${cmd.usage}`;
              embed.setFooter(`Syntax: <> = required, [] = optional, || = or`);
          }
          if (cmd.permissions) info += `\n**permissions**: ${cmd.permissions}`;
          if (cmd.example1) info += `\n**Example 1**: ${prefix}${cmd.example1}`;
          if (cmd.example2) info += `\n**Example 2**: ${prefix}${cmd.example2}`;

          return message.channel.send(embed.setColor("GREEN").setDescription(info).setTitle(`${cmd.name.toUpperCase()} Command`).setThumbnail(message.guild.iconURL));
      }
