// invite.js

const inviteMessage = async (client, message) => {
    const { EmbedBuilder } = require('discord.js');
  
    const lascaId = '326836813215956994';
  
    const embed = new EmbedBuilder()
      .setTitle('**Invite Link**')
      .setThumbnail(
        'https://media.discordapp.net/attachments/942450101073358928/1130973075115094016/profil.jpg?width=662&height=662'
      )
      .setColor('#008cff')
      .setDescription(`Here are our permanent **links**.
      
**Tebex**: https://sylox.tebex.io/
**Discord**: https://discord.gg/N3NcQrcEzY

Best regards, **Sylox**.
  
|| @everyone ||`);
  
    if (message.author.id === lascaId) {
      const channelId = '969700871749373952'; // Replace with your desired channel ID
      const channel = client.channels.cache.get(channelId);
  
      message.delete();
  
      if (channel) {
        const sentMessage = await channel.send({ embeds: [embed] });  
      } else {
        console.log(`Invalid channel ID: ${channelId}`);
      }
    }
};
  
 module.exports = { inviteMessage };  