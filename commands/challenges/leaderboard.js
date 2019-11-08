const eco = require('discord-economy');
const { RichEmbed } = require('discord.js');
const ascii = require("ascii-table");
const emote = require('../../emojis.json');

module.exports = {
    name: "leaderboard",
    aliases: ["lb", "top"],
    category: "challengers",
    description: "Check the leaderboard!",
    run: async (bot, message, args, prefix) => {
    message.channel.send("link to challenge leaderboard: https://docs.google.com/spreadsheets/d/1SlVtzBB0jfQIczm2bL55tDj_OVJMbR1HZrkc-QmZOJ4/edit?usp=sharing")

        }
      }
