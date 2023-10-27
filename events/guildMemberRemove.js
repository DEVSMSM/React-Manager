const { Events, AuditLogEvent, EmbedBuilder, ChannelType } = require("discord.js")

module.exports = {
  name: Events.GuildMemberRemove,
  async execute(member, client) {
    try {

      const channels = await member.guild.channels.fetch();  
      channels.forEach(async (channel) => {
        if (channel.type === ChannelType.GuildText) {
          const messages = await channel.messages.fetch({ limit: 100 });
          messages.forEach(async (message) => {
            message.reactions.cache.forEach(async (reaction) => {

              
 await client.users.fetch(member.id).then(async(user) => {
await reaction.users.remove(user.id)
 }).catch(() => {
   
 })
                                  
    });
          });
        }
      });
    } catch (err) {
    console.log(err.message);
    }
let channel = await client.channels.fetch('1097115438980268052')
let embed = new EmbedBuilder()
.setTitle('Reaction Removed')
.setColor('Red')  
.addFields([{
  name: "User",
  value: `**\`${member.user.tag}\`**`,
  inline: true
},
{
name: "Reason",
value: `**Because User left Server**`,
inline: true
}
  ])
  channel.send({embeds: [embed]})
  }
}