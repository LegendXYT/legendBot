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

        //If you use discord-economy guild based you can use the filter() function to only allow the database within your guild
        //(message.author.id + message.guild.id) can be your way to store guild based id's
        //filter: x => x.userid.endsWith(message.guild.id)

        //If you put a mention behind the command it searches for the mentioned user in database and tells the position.
        if (message.mentions.users.first()) {

          var output = await eco.Leaderboard({
            filter: x => x.balance > 0,
            search: message.mentions.users.first().id
          })
          message.channel.send(`The user ${message.mentions.users.first().tag} is number ${output} on the Legends leaderboard!`);

        } else {

          eco.Leaderboard({
            limit: 10, //Only takes top 3 ( Totally Optional )
            filter: x => x.balance > 0 //Only allows people with more than 100 balance ( Totally Optional )
          }).then(async users => { //make sure it is async

            let lbTable = new ascii(`Challenge Leaderboard`);
            lbTable.setHeading("Pos", "User", "Points")

            if (users[0]) var firstplace = await bot.fetchUser(users[0].userid) //Searches for the user object in discord for first place
            if (users[1]) var secondplace = await bot.fetchUser(users[1].userid) //Searches for the user object in discord for second place
            if (users[2]) var thirdplace = await bot.fetchUser(users[2].userid) //Searches for the user object in discord for third place
            if (users[3]) var fourthplace = await bot.fetchUser(users[3].userid) //Searches for the user object in discord for fourth place
            if (users[4]) var fifthplace = await bot.fetchUser(users[4].userid) //Searches for the user object in discord for fifth place
            if (users[5]) var sixthplace = await bot.fetchUser(users[5].userid) //Searches for the user object in discord for sixth place
            if (users[6]) var seventhplace = await bot.fetchUser(users[6].userid) //Searches for the user object in discord for seventh place
            if (users[7]) var eighthplace = await bot.fetchUser(users[7].userid) //Searches for the user object in discord for eighth place
            if (users[8]) var ninethplace = await bot.fetchUser(users[8].userid) //Searches for the user object in discord for nineth place
            if (users[9]) var tenthplace = await bot.fetchUser(users[9].userid) //Searches for the user object in discord for tenth place

if(!firstplace && !secondplace && !thirdplace && !fourthplace && !fifthplace && !sixthplace && !seventhplace && !eighthplace && !ninethplace && !tenthplace){
  lbTable.addRow(`0`, `${firstplace && firstplace.tag || 'Nobody Yet'}`, `${users[0] && users[0].balance || 'None'}`)
} else if(firstplace && !secondplace && !thirdplace && !fourthplace && !fifthplace && !sixthplace && !seventhplace && !eighthplace && !ninethplace && !tenthplace){
  lbTable.addRow(`1`, `${firstplace && firstplace.tag || 'Nobody Yet'}`, `${users[0] && users[0].balance || 'None'}`)
} else if(secondplace && !thirdplace && !fourthplace && !fifthplace && !sixthplace && !seventhplace && !eighthplace && !ninethplace && !tenthplace){
  lbTable.addRow(`1`, `${firstplace && firstplace.tag || 'Nobody Yet'}`, `${users[0] && users[0].balance || 'None'}`)
  lbTable.addRow(`2`, `${secondplace && secondplace.tag || 'Nobody Yet'}`, `${users[1] && users[1].balance || 'None'}`)
} else if(thirdplace && !fourthplace && !fifthplace && !sixthplace && !seventhplace && !eighthplace && !ninethplace && !tenthplace){
  lbTable.addRow(`1`, `${firstplace && firstplace.tag || 'Nobody Yet'}`, `${users[0] && users[0].balance || 'None'}`)
  lbTable.addRow(`2`, `${secondplace && secondplace.tag || 'Nobody Yet'}`, `${users[1] && users[1].balance || 'None'}`)
  lbTable.addRow(`3`, `${thirdplace && thirdplace.tag || 'Nobody Yet'}`, `${users[2] && users[2].balance || 'None'}`)
} else if(fourthplace && !fifthplace && !sixthplace && !seventhplace && !eighthplace && !ninethplace && !tenthplace){
  lbTable.addRow(`1`, `${firstplace && firstplace.tag || 'Nobody Yet'}`, `${users[0] && users[0].balance || 'None'}`)
  lbTable.addRow(`2`, `${secondplace && secondplace.tag || 'Nobody Yet'}`, `${users[1] && users[1].balance || 'None'}`)
  lbTable.addRow(`3`, `${thirdplace && thirdplace.tag || 'Nobody Yet'}`, `${users[2] && users[2].balance || 'None'}`)
  lbTable.addRow(`4`, `${fourthplace && fourthplace.tag || 'Nobody Yet'}`, `${users[3] && users[3].balance || 'None'}`)
} else if(fifthplace && !sixthplace && !seventhplace && !eighthplace && !ninethplace && !tenthplace){
  lbTable.addRow(`1`, `${firstplace && firstplace.tag || 'Nobody Yet'}`, `${users[0] && users[0].balance || 'None'}`)
  lbTable.addRow(`2`, `${secondplace && secondplace.tag || 'Nobody Yet'}`, `${users[1] && users[1].balance || 'None'}`)
  lbTable.addRow(`3`, `${thirdplace && thirdplace.tag || 'Nobody Yet'}`, `${users[2] && users[2].balance || 'None'}`)
  lbTable.addRow(`4`, `${fourthplace && fourthplace.tag || 'Nobody Yet'}`, `${users[3] && users[3].balance || 'None'}`)
  lbTable.addRow(`5`, `${fifthplace && fifthplace.tag || 'Nobody Yet'}`, `${users[4] && users[4].balance || 'None'}`)
} else if(sixthplace && !seventhplace && !eighthplace && !ninethplace && !tenthplace){
  lbTable.addRow(`1`, `${firstplace && firstplace.tag || 'Nobody Yet'}`, `${users[0] && users[0].balance || 'None'}`)
  lbTable.addRow(`2`, `${secondplace && secondplace.tag || 'Nobody Yet'}`, `${users[1] && users[1].balance || 'None'}`)
  lbTable.addRow(`3`, `${thirdplace && thirdplace.tag || 'Nobody Yet'}`, `${users[2] && users[2].balance || 'None'}`)
  lbTable.addRow(`4`, `${fourthplace && fourthplace.tag || 'Nobody Yet'}`, `${users[3] && users[3].balance || 'None'}`)
  lbTable.addRow(`5`, `${fifthplace && fifthplace.tag || 'Nobody Yet'}`, `${users[4] && users[4].balance || 'None'}`)
  lbTable.addRow(`6`, `${sixthplace && sixthplace.tag || 'Nobody Yet'}`, `${users[5] && users[5].balance || 'None'}`)
} else if(seventhplace && !eighthplace && !ninethplace && !tenthplace){
  lbTable.addRow(`1`, `${firstplace && firstplace.tag || 'Nobody Yet'}`, `${users[0] && users[0].balance || 'None'}`)
  lbTable.addRow(`2`, `${secondplace && secondplace.tag || 'Nobody Yet'}`, `${users[1] && users[1].balance || 'None'}`)
  lbTable.addRow(`3`, `${thirdplace && thirdplace.tag || 'Nobody Yet'}`, `${users[2] && users[2].balance || 'None'}`)
  lbTable.addRow(`4`, `${fourthplace && fourthplace.tag || 'Nobody Yet'}`, `${users[3] && users[3].balance || 'None'}`)
  lbTable.addRow(`5`, `${fifthplace && fifthplace.tag || 'Nobody Yet'}`, `${users[4] && users[4].balance || 'None'}`)
  lbTable.addRow(`6`, `${sixthplace && sixthplace.tag || 'Nobody Yet'}`, `${users[5] && users[5].balance || 'None'}`)
  lbTable.addRow(`7`, `${seventhplace && seventhplace.tag || 'Nobody Yet'}`, `${users[6] && users[6].balance || 'None'}`)
} else if(eighthplace && !ninethplace && !tenthplace){
  lbTable.addRow(`1`, `${firstplace && firstplace.tag || 'Nobody Yet'}`, `${users[0] && users[0].balance || 'None'}`)
  lbTable.addRow(`2`, `${secondplace && secondplace.tag || 'Nobody Yet'}`, `${users[1] && users[1].balance || 'None'}`)
  lbTable.addRow(`3`, `${thirdplace && thirdplace.tag || 'Nobody Yet'}`, `${users[2] && users[2].balance || 'None'}`)
  lbTable.addRow(`4`, `${fourthplace && fourthplace.tag || 'Nobody Yet'}`, `${users[3] && users[3].balance || 'None'}`)
  lbTable.addRow(`5`, `${fifthplace && fifthplace.tag || 'Nobody Yet'}`, `${users[4] && users[4].balance || 'None'}`)
  lbTable.addRow(`6`, `${sixthplace && sixthplace.tag || 'Nobody Yet'}`, `${users[5] && users[5].balance || 'None'}`)
  lbTable.addRow(`7`, `${seventhplace && seventhplace.tag || 'Nobody Yet'}`, `${users[6] && users[6].balance || 'None'}`)
  lbTable.addRow(`8`, `${eighthplace && eighthplace.tag || 'Nobody Yet'}`, `${users[7] && users[7].balance || 'None'}`)
} else if(ninethplace && !tenthplace){
  lbTable.addRow(`1`, `${firstplace && firstplace.tag || 'Nobody Yet'}`, `${users[0] && users[0].balance || 'None'}`)
  lbTable.addRow(`2`, `${secondplace && secondplace.tag || 'Nobody Yet'}`, `${users[1] && users[1].balance || 'None'}`)
  lbTable.addRow(`3`, `${thirdplace && thirdplace.tag || 'Nobody Yet'}`, `${users[2] && users[2].balance || 'None'}`)
  lbTable.addRow(`4`, `${fourthplace && fourthplace.tag || 'Nobody Yet'}`, `${users[3] && users[3].balance || 'None'}`)
  lbTable.addRow(`5`, `${fifthplace && fifthplace.tag || 'Nobody Yet'}`, `${users[4] && users[4].balance || 'None'}`)
  lbTable.addRow(`6`, `${sixthplace && sixthplace.tag || 'Nobody Yet'}`, `${users[5] && users[5].balance || 'None'}`)
  lbTable.addRow(`7`, `${seventhplace && seventhplace.tag || 'Nobody Yet'}`, `${users[6] && users[6].balance || 'None'}`)
  lbTable.addRow(`8`, `${eighthplace && eighthplace.tag || 'Nobody Yet'}`, `${users[7] && users[7].balance || 'None'}`)
  lbTable.addRow(`9`, `${ninethplace && ninethplace.tag || 'Nobody Yet'}`, `${users[8] && users[8].balance || 'None'}`)
} else if(tenthplace){
  lbTable.addRow(`1`, `${firstplace && firstplace.tag || 'Nobody Yet'}`, `${users[0] && users[0].balance || 'None'}`)
  lbTable.addRow(`2`, `${secondplace && secondplace.tag || 'Nobody Yet'}`, `${users[1] && users[1].balance || 'None'}`)
  lbTable.addRow(`3`, `${thirdplace && thirdplace.tag || 'Nobody Yet'}`, `${users[2] && users[2].balance || 'None'}`)
  lbTable.addRow(`4`, `${fourthplace && fourthplace.tag || 'Nobody Yet'}`, `${users[3] && users[3].balance || 'None'}`)
  lbTable.addRow(`5`, `${fifthplace && fifthplace.tag || 'Nobody Yet'}`, `${users[4] && users[4].balance || 'None'}`)
  lbTable.addRow(`6`, `${sixthplace && sixthplace.tag || 'Nobody Yet'}`, `${users[5] && users[5].balance || 'None'}`)
  lbTable.addRow(`7`, `${seventhplace && seventhplace.tag || 'Nobody Yet'}`, `${users[6] && users[6].balance || 'None'}`)
  lbTable.addRow(`8`, `${eighthplace && eighthplace.tag || 'Nobody Yet'}`, `${users[7] && users[7].balance || 'None'}`)
  lbTable.addRow(`9`, `${ninethplace && ninethplace.tag || 'Nobody Yet'}`, `${users[8] && users[8].balance || 'None'}`)
  lbTable.addRow(`10`, `${tenthplace && tenthplace.tag || 'Nobody Yet'}`, `${users[9] && users[9].balance || 'None'}`)
}



    //         message.channel.send(`Global leaderboard:
    //
    // 1 - ${firstplace && firstplace.tag || 'Nobody Yet'} : ${users[0] && users[0].balance || 'None'}
    // 2 - ${secondplace && secondplace.tag || 'Nobody Yet'} : ${users[1] && users[1].balance || 'None'}
    // 3 - ${thirdplace && thirdplace.tag || 'Nobody Yet'} : ${users[2] && users[2].balance || 'None'}
    // 4 - ${fourthplace && fourthplace.tag || 'Nobody Yet'} : ${users[3] && users[3].balance || 'None'}
    // 5 - ${fifthplace && fifthplace.tag || 'Nobody Yet'} : ${users[4] && users[4].balance || 'None'}
    // 6 - ${sixthplace && sixthplace.tag || 'Nobody Yet'} : ${users[5] && users[5].balance || 'None'}
    // 7 - ${seventhplace && seventhplace.tag || 'Nobody Yet'} : ${users[6] && users[6].balance || 'None'}
    // 8 - ${eighthplace && eighthplace.tag || 'Nobody Yet'} : ${users[7] && users[7].balance || 'None'}
    // 9 - ${ninethplace && ninethplace.tag || 'Nobody Yet'} : ${users[8] && users[8].balance || 'None'}
    // 10 - ${tenthplace && tenthplace.tag || 'Nobody Yet'} : ${users[9] && users[9].balance || 'None'}`)
    message.channel.send(`\`\`\`fix\n${lbTable}\n\`\`\``)


          })

        }

        }
      }
