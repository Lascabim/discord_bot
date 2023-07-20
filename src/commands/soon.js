// advertising.js

const soonMessage = async (client, message) => {
    const { EmbedBuilder } = require('discord.js');
  
    const lascaId = '326836813215956994';
  
    const embed = new EmbedBuilder()
      .setTitle('**Feature Coming Soon**')
      .setThumbnail(
        'https://media.discordapp.net/attachments/942450101073358928/1130973075115094016/profil.jpg?width=662&height=662'
      )
      .setColor('#008cff')
      .setDescription(`This feature is **being worked on**.

Best regards, **Sylox**.
  
|| @everyone ||`);
  
    if (message.author.id === lascaId) {
      const channel = message.channel;
  
      message.delete();
      const sentMessage = await channel.send({ embeds: [embed] });  
    }
};
  
 module.exports = { soonMessage };  