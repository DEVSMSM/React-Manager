const { Client ,Partials, GatewayIntentBits } = require("discord.js")
require('./server.js')
const colors = require('colors')
const { readdirSync } = require("node:fs")
const client = new Client({ partials: [Partials.Channel, Partials.Message, 
Partials.User,
Partials.GuildMember, Partials.DirectMessages,
Partials.Reaction, ], intents: [
GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.GuildMessageReactions,
GatewayIntentBits.GuildEmojisAndStickers,
GatewayIntentBits.MessageContent,
GatewayIntentBits.GuildMembers,
GatewayIntentBits.DirectMessages,
GatewayIntentBits.DirectMessageTyping,
GatewayIntentBits.GuildInvites,
GatewayIntentBits.GuildVoiceStates,
GatewayIntentBits.GuildScheduledEvents,
]})








global.config = require("./config.json")
readdirSync('./handlers').map(handler => {
require(`./handlers/${handler}`)(client)
})





  


process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error.message);
});



client.login(config.token)
  