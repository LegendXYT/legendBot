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
    
    message.channel.send("link to challenge leaderboard: https://docs.google.com/spreadsheets/d/1SlVtzBB0jfQIczm2bL55tDj_OVJMbR1HZrkc-QmZOJ4/edit?usp=sharing")

        }
      }
