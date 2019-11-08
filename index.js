const { Client, Collection, RichEmbed } = require("discord.js");
const { config } = require("dotenv");
const fs = require('fs');
const botconfig = require("./botconfig.json");
const bot = new Client({
    disableEveryone: false
})

// Collections
bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = fs.readdirSync("./commands/");
config({
    path: __dirname + "/.env"
});

// Run the command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});
let file = JSON.parse(fs.readFileSync('./botconfig.json')) // test

bot.on("ready", () => {
    console.log(`${bot.user.username} is now online`)
    bot.user.setPresence({
        status: "online",
        game: {
            name: `Legend X on YouTube`,
            type: "WATCHING"
        }
    });
})

bot.on("message", async message => {
  // suggestions for the suggestions channel
  if (message.channel.id === file.other.suggestionsChanID) {
   await message.react('✅')
   await message.react('❌')
 }
 // updateLogs for server
 if (message.channel.id === file.other.updateLogsChanID) {
  await message.react(':tick:623401802985111552')
  await message.react(':cross:623401791819874324')
}
if (message.channel.id === file.other.legendTVChanID) {
  await message.react(':rollingSmile:505341357985103914')
  await message.react(':200IQ:561365644357140501')
  await message.react(':coolDog:561365614682308608')
  await message.react(':heartbeat:505341385604333589')
  await message.react(':LegendX:494859740392980500')
  await message.react(':CatDanceFast:505347346075353088')
}
    let prefix = botconfig.prefix
    // if bot is mentioned
    if(message.content == `<@${bot.user.id}>`) {
          message.reply(`My prefix is ` + "`" + `${prefix}` + "`" + `\nfor help type ` + "`" + `${prefix}help` + "`")
        }
        // if message is from bot
    if (message.author.bot) return;
    // if message is in non guild
    if (!message.guild) return;
    // if message doesnt start with prefix
    if (!message.content.startsWith(prefix)) return;


    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    // Get the command
    let command = bot.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));

    if (command)
        command.run(bot, message, args, prefix);

});

bot.login(process.env.TOKEN);
