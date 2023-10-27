const { EmbedBuilder , Events } = require('discord.js')
const { channels } = require('../config.json')

module.exports = {
  name: Events.MessageReactionRemove,
async execute(reaction, user, client) {
try{

const message = reaction.message
const react = reaction.message.channel;
const guild = reaction.message.guild;
if(channels.includes(react.id)) {
 // console.log(guild)
  const channel = await  guild.channels.fetch("1097115438980268052");
const member = await guild.members.fetch(user)
let embed = new EmbedBuilder()
.setTitle(`Reaction Removed`)
.setTimestamp()
.setColor('Red')
.addFields([
  {name: "User", value: `**\`${member.user.tag}\`**`, inline: true
  },
  {
  name: 'Channel', value: `${react}`, inline: true
},
{
 name: 'Message', 
  value: `[Link](https://discord.com/channels/${guild.id}/${react.id}/${message.id})`, inline: true
},
{
  name: 'Emoji',
  value: `${reaction.emoji}`,
  inline: true
}])
  channel.send({embeds: [embed]});
}
  } catch (err) {
    console.log(err)
}



  }
}