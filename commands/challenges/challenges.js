const eco = require('discord-economy');
const { RichEmbed } = require('discord.js');
const emote = require('../../emojis.json');

module.exports = {
    name: "challenge",
    aliases: ["challenges", "challengers"],
    category: "challenges",
    description: "What is this weeks challenge?",
    usage: "<game>",
    example1: "challenge moomoo.io",
    example2: "challenge brawl stars",
    run: async (bot, message, args, prefix) => {

 let member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.guild.members.find(x => x.displayName == args[0]) || message.member
 var output = await eco.FetchBalance(member.id)
 if (output.balance < 50) return message.reply(emote.cross + `You didn't register yet \`${prefix}register\` to get started!`)


let moomoo = `The [moomoo.io](http://moomoo.io/) challenges are:
\`\`\`fix
Get 50 kills (normal): **25 points**

Obtain ruby crossbow (normals): **30 points**

Reach max age (normal or sandbox): **sandbox: 500 points | normal: 10 000 points**

Get 100 kills with tool hammer (normal): **500 points**

Buy all hats in the game (normal): **150 points**

Create a stone base (normal): **50 points**

Create a roller coaster (sandbox) **250 points**

Get a kill with stick, sheild and boost pads as your setup (normal & cannot be a spawn kill or afk kill): **750 points**

Collect all animals in one area (normal or sandbox) **100 points**

Kill a hacker: **50 points** Bonus +100 if hacker is top killer
\`\`\`
Please supply proof wether its a screenshot or a video recording and post in <#642274286416953344>
`

let krunker = `The [krunker.io](https://krunker.io/) challenges are:
\`\`\`fix
Get 10 kills in a game: **100 points**

Get 5 kills with knife: **400 points**

Dont die at all in a round: **250 points**

Carry your team in point mode: **500 points**

Dont miss a single shot in a round: **750 points**

Obtain a weapon skin: **50 points**
\`\`\`
Please supply proof wether its a screenshot or a video recording and post in <#642274286416953344>
`

let brawlstars = `The [brawl stars](https://apps.apple.com/app/brawl-stars/id1229016807) challenges are:
\`\`\`fix
Get 9 kills in a single showdown game: **500 points**

Complete the trophy road: **100 points**

Get all brawlers above rank 10 **50 points**

Get all brawlers above rank 15 **200 points**

Get all brawlers above rank 20 **500 points**

Get all brawlers above rank 25 **1000 points**

Get all brawlers above rank 30 **5000 points**

Get all brawlers above rank 35 **15000 points**
Dont get hit at all in a showdown game: **500 points**

Dont miss a bullet in a showdown game: **500 points**

Win a game without shooting a single bullet **1000 points**
\`\`\`
Please supply proof wether its a screenshot or a video recording and post in <#642274286416953344>
`
let clashofclans = `The [clash of clans](https://itunes.apple.com/app/clash-of-clans/id529479190?mt=8) challenges are:
\`\`\`fix
Get town hall 12: **250 points**

Max out your account: **500 points**

Get a perfect war: **200 points**

Get a draw in a war: **400 points**

3 star your own town hall level with Noahs ark attack: **500 points**

Get a 6 pack in a war: **250 points**

Complete the goblin map: **150 points**

Obtain o.t.t.o hut: **300 points**

Reach Legends league: **500 points**

Complete friend in need Achievement: **250 points**
\`\`\`
Please supply proof wether its a screenshot or a video recording and post in <#642274286416953344>
`
let other = `The other challenges are:
\`\`\`fix
Be atleast rank 20 in this server: **20 points**

Obtain all of the special Jewels in the server: **50 points**

Put LX in your name: **100 points**

Invite 5 people to the server: **200 points** (check with \`invite rank\` in bot games)

be the person to say 11 000 in counting channel: **1100 points**

Create a Would you rather and get 5 people to react to your message: **100 points**
\`\`\`
Please supply proof wether its a screenshot or a video recording and post in <#642274286416953344>
`


         if(!args[0]){
              message.channel.send(emote.cross + `INCORRECT ARGUMENT!\ndo \`${prefix}challenge categories\` to find out what games are in the database for the challenges\nuse \`${prefix}challenge <category>\` to see what the challengers are!`)
            } else if(args[0] === "categories" || args[0] === "games"){
              message.channel.send(`\`\`\`fix\nThe Challenge categories are:\n\nmoomoo\nkrunker\nbrawl stars\nclash of clans\nother\n\nGood luck in these challengers and may the best person win\nNOTE: that these categories are case sensitve!\`\`\``)
            } else if(args[0] === "moomoo" || args[0] === "moomoo.io"){
              let embed = new RichEmbed()
              .setColor("#0fe67f")
              .setTitle("Legends Challengers")
              .setDescription(`${moomoo}`)
              .setFooter("For any questions dm Legend Mail")
              message.channel.send(embed)
            } else if(args[0] === "krunker" || args[0] === "krunker.io"){
              let embed = new RichEmbed()
              .setColor("#7d4e10")
              .setTitle("Legends Challengers")
              .setDescription(`${krunker}`)
              .setFooter("For any questions dm Legend Mail")
              message.channel.send(embed)
            } else if(args[0] === "brawlstars" || args[0] === "bs" || args[0 === "brawl" && args[1] === "stars"]){
              let embed = new RichEmbed()
              .setColor("#e4e80f")
              .setTitle("Legends Challengers")
              .setDescription(`${brawlstars}`)
              .setFooter("For any questions dm Legend Mail")
              message.channel.send(embed)
            } else if(args[0] === "clashofclans" || args[0] === "coc" || args[0] === "clash" && args[1] === "of" && args[2] === "clans"){
              let embed = new RichEmbed()
              .setColor("##cd2b0e")
              .setTitle("Legends Challengers")
              .setDescription(`${clashofclans}`)
              .setFooter("For any questions dm Legend Mail")
              message.channel.send(embed)
            } else if(args[0] === "other"){
              let embed = new RichEmbed()
              .setColor("#f4f9f6")
              .setTitle("Legends Challengers")
              .setDescription(`${other}`)
              .setFooter("For any questions dm Legend Mail")
              message.channel.send(embed)
            } else {
              message.channel.send(emote.cross + `An error occured: seems like incorrect arguments or something else to see the arugments do \`${prefix}challenge categories\``)
            }
        }
      }
