// advertising.js

const leaderMessage = async (client, message) => {
    const { EmbedBuilder } = require('discord.js');
  
    const lascaId = '326836813215956994';
  
    const embed = new EmbedBuilder()
      .setTitle('**Leaderboard**')
      .setThumbnail(
        'https://media.discordapp.net/attachments/942450101073358928/1130973075115094016/profil.jpg?width=662&height=662'
      )
      .setColor('#008cff')
      .setDescription(`
      [EN]

Player leaderboard with 3 timeframes, Lifetime, Month and Today. 

With kills, deaths, KD and ranks.

All the ranks can be edited. 

Can be open by a command, or a key.

Dependencies:
es_extended
oxmysql/mysql-async

Available Languages:
English
Portuguese


[PT]

Leaderboard de todos os players com 3 filtros temporais, Lifetime, Mês e Hoje. 

Com kills, deaths, KD e ranks.

Todos os ranks podem ser editados. 

O menu pode ser aberto através de um comando ou por uma tecla.

Dependencias:
es_extended
oxmysql/mysql-async

Idiomas Incluídos:
Inglês
Português
      
      **Store:** https://sylox.tebex.io/package/5812482
      
      All **scripts are available** in our shop.
      https://sylox.tebex.io/`);
  
    if (message.author.id === lascaId) {
      const channelId = '1132335961221648434'; // Replace with your desired channel ID
      const channel = client.channels.cache.get(channelId);
  
      message.delete();
  
      if (channel) {
        const sentMessage = await channel.send({ embeds: [embed] });  
        const sentMessage2 = await channel.send("**Link**: https://youtu.be/Zc4ZlvG0IKc");  
        const sentMessage3 = await channel.send("||@everyone||");  
      } else {
        console.log(`Invalid channel ID: ${channelId}`);
      }
    }
};
  
 module.exports = { leaderMessage };  