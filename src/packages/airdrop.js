// advertising.js

const airdropMessage = async (client, message) => {
    const { EmbedBuilder } = require('discord.js');
  
    const lascaId = '326836813215956994';
  
    const embed = new EmbedBuilder()
      .setTitle('**Airdrop/Lootbox Script**')
      .setThumbnail(
        'https://media.discordapp.net/attachments/942450101073358928/1130973075115094016/profil.jpg?width=662&height=662'
      )
      .setColor('#008cff')
      .setDescription(`
      [EN]

      Advanced airdrop/lootboxs script fully configuralable.

      Optimized 0,0ms

      **With the possibility to change:**

      Everything

      **Dependencies:**
      es_extended
      oxmysql/mysql-async

      **Available Languages:**
      English
      Portuguese
      French
      Russian
      Spanish
      German


      [PT]

      Script de airdrop/lootboxs totalmente configurável

      Otimizado 0,0ms

      Com possibilidade de alteração:

      Tudo

      **Dependencias:**
      es_extended
      oxmysql/mysql-async

      **Idiomas Incluídos:**
      Inglês
      Português
      Francês
      Alemão
      Espanhol
      Russo
      
      **Store:** https://sylox.tebex.io/package/5853293
      
      All **scripts are available** in our shop.
      https://sylox.tebex.io/`);

    const youtubeLink = (`**Link**: https://www.youtube.com/watch?v=zC8vDnMlUkc&t=7s
|| @everyone ||`);
  
    if (message.author.id === lascaId) {
      const channelId = '1139924822147747840'; // Replace with your desired channel ID
      const channel = client.channels.cache.get(channelId);
  
      message.delete();
  
      if (channel) {
        const sentMessage = await channel.send({ embeds: [embed] });  
        const sentMessage2 = await channel.send(youtubeLink);  
      } else {
        console.log(`Invalid channel ID: ${channelId}`);
      }
    }
};
  
 module.exports = { airdropMessage };  