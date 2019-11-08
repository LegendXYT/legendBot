module.exports = {
    name: "ping",
    category: "Utility",
    description: "Returns latency and API ping",
    permissions: "members",
    run: async (bot, message, args, prefix) => {
      let ping = message.createdTimestamp - message.createdTimestamp
      let choices = [":ping_pong: Ping Pong", "I don't wanna see my ping", "Is my ping bad?", "How fast is my security?"]
      let response = choices[Math.floor(Math.random() * choices.length)]

         message.channel.send("Pinging ...")  // Placeholder for pinging ...
         .then((msg) => { // Resolve promise
            msg.edit("Pong!")
            .then((msg) => {
              msg.edit(`${response}: Bot Latency: ` + "`" + `${ping}` + "`" + ` API Latency: ` + "`" + `${Math.round(bot.ping)}` + "`")
            }) // Edits message with current timestamp minus timestamp of message
          });

    }
}
