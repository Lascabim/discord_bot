// logs.js

const logsMessage = async (client, message) => {
    const { EmbedBuilder } = require('discord.js');
  
    const lascaId = '326836813215956994';
  
    const embed = new EmbedBuilder()
      .setTitle('**Logs Creation**')
      .setThumbnail(
        'https://media.discordapp.net/attachments/942450101073358928/1130973075115094016/profil.jpg?width=662&height=662'
      )
      .setColor('#008cff')
      .setDescription(`Do you need logs to **track your data?** Here is an example of what logs **we can do**.

https://imgur.com/zqm0uXZ

Every script **can have** logs, they just need to be **added**.

Contact us via ticket https://discord.com/channels/966050034816782366/969680226026139679
  
Best regards, **Sylox**.
  
|| @everyone ||`);
  
    if (message.author.id === lascaId) {
      const channelId = '1028424999578644622'; // Replace with your desired channel ID
      const channel = client.channels.cache.get(channelId);
  
      message.delete();
  
      if (channel) {
        const sentMessage = await channel.send({ embeds: [embed] });  
      } else {
        console.log(`Invalid channel ID: ${channelId}`);
      }
    }
};
  
 module.exports = { logsMessage };  