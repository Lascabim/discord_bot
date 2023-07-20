// karma.js

const nolifePartner = async (client, message) => {
    const { EmbedBuilder } = require('discord.js');
  
    const lascaId = '326836813215956994';
  
    const embed = new EmbedBuilder()
      .setTitle('**NoLife PVP**')
      .setThumbnail(
        'https://media.discordapp.net/attachments/942450101073358928/1130973075115094016/profil.jpg?width=662&height=662'
      )
      .setColor('#008cff')
      .setDescription(`https://discord.gg/wtfnGNSa7m
  
|| @everyone ||`);
  
    if (message.author.id === lascaId) {
      const channel = message.channel
  
      message.delete();
     const sentMessage = await channel.send({ embeds: [embed] });  
    }
};
  
 module.exports = { nolifePartner };  