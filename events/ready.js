const { ActivityType, Events } = require("discord.js")
const colors = require("colors")
const ms = require('ms')
module.exports = {
    name: Events.ClientReady,
    once: true,
   async execute(client) {
      try{

client.user.setStatus("idle")
console.log(`${client.user.tag} Ready On ${client.guilds.cache.size} Guild!!`.cyan)

  client.user.setActivity({name: `Reaction 👀`, type: ActivityType.Watching})




  } catch (err) {
    console.log(err)
}
    }

}


