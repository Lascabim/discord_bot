// streams.js

const youtMessage = async (client, message) => {
  const { EmbedBuilder } = require('discord.js');

  const lascaId = '326836813215956994';

  const mesAr = message.content.split(" ");
  let youtLink = mesAr[1];

  const embed = new EmbedBuilder()
    .setTitle('**New Youtube Vídeo**')
    .setThumbnail(
      'https://media.discordapp.net/attachments/942450101073358928/1130973075115094016/profil.jpg?width=662&height=662'
    )
    .setColor('#008cff')
    .setDescription(`Check it out, my new Youtube video.`);

  if (message.author.id === lascaId) {
    const channelId = '1131593829657612408'; // Replace with your desired channel ID
    const channel = client.channels.cache.get(channelId);

    message.delete();

    if (channel) {
      const sentMessage = await channel.send({ embeds: [embed] });  
      const sentMessage2 = await channel.send(youtLink);  
      const sentMessage3 = await channel.send(`@everyone`);  
    } else {
      console.log(`Invalid channel ID: ${channelId}`);
    }
  }
};

module.exports = { youtMessage };  