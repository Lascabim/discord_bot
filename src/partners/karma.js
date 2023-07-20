// karma.js

const karmaPartner = async (client, message) => {
    const { EmbedBuilder } = require('discord.js');
  
    const lascaId = '326836813215956994';
  
    const embed = new EmbedBuilder()
      .setTitle('**Karma Leaks**')
      .setThumbnail(
        'https://media.discordapp.net/attachments/942450101073358928/1130973075115094016/profil.jpg?width=662&height=662'
      )
      .setColor('#008cff')
      .setDescription(`📌 ➥ Error resolution
      ⏰ ➥ Citizens updated 
      🧨 ➥ Cheats & Mods 
      ⚒️ ➥ 24/7 online support 
      🌉 ➥ Karma Leaks
      📩 ➥ https://discord.gg/mVuJVjnFkx
  
|| @everyone ||`);
  
    if (message.author.id === lascaId) {
      const channel = message.channel
  
      message.delete();
     const sentMessage = await channel.send({ embeds: [embed] });  
    }
};
  
 module.exports = { karmaPartner };  