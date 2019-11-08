const eco = require('discord-economy');
const { RichEmbed } = require('discord.js');
const emote = require('../../emojis.json');

module.exports = {
    name: "points",
    aliases: ["score"],
    category: "challenges",
    description: "check your score or another users points score",
    usage: "[user]",
    example1: "points",
    example2: "points <@513571036688547871>",
    run: async (bot, message, args, prefix) => {

 let member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.guild.members.find(x => x.displayName == args[0]) || message.member
 var output = await eco.FetchBalance(member.id)
 if (output.balance < 50) return message.reply(emote.cross + member.displayName + ` didn't register yet \`${prefix}register\` to get started!`)
              const embed = new RichEmbed()
                  .setColor("#2964bd")
                  .setDescription(`:gem:  **${member.displayName + " has" || 'You have'} **\`${output.balance}\` Points!`)
                  .setAuthor(member.displayName, member.user.displayAvatarURL)
              message.channel.send(embed)


        }
      }
