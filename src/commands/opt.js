// streams.js

const optMessage = async (client, message) => {
  const { EmbedBuilder } = require('discord.js');

  const lascaId = '326836813215956994';

  const embed = new EmbedBuilder()
    .setTitle('**Script Optimization**')
    .setThumbnail(
      'https://media.discordapp.net/attachments/942450101073358928/1130973075115094016/profil.jpg?width=662&height=662'
    )
    .setColor('#008cff')
    .setDescription(`As you can see, this script was optimized by our team.

He was running at 0.10 ms and after our service its only consumming 0.1 ms.

This practice provide more FPS for the players, and stability to the server.

Contact us via Ticket.

Best regards, **Sylox**.

|| @everyone ||`);

  if (message.author.id === lascaId) {
    const channelId = '1129879598574866433'; // Replace with your desired channel ID
    const channel = client.channels.cache.get(channelId);

    message.delete();

    if (channel) {
      const sentMessage = await channel.send({ embeds: [embed] });  
    } else {
      console.log(`Invalid channel ID: ${channelId}`);
    }
  }
};

module.exports = { optMessage };  