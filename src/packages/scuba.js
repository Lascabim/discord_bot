// advertising.js

const scubaMessage = async (client, message) => {
    const { EmbedBuilder } = require('discord.js');
  
    const lascaId = '326836813215956994';
  
    const embed = new EmbedBuilder()
      .setTitle('**Scuba Diver Job**')
      .setThumbnail(
        'https://media.discordapp.net/attachments/942450101073358928/1130973075115094016/profil.jpg?width=662&height=662'
      )
      .setColor('#008cff')
      .setDescription(`
      [EN]

      Advanced scuba diving job 
      
      Optimized 0,0ms
      
      **With the possibility to change:**
      
      Job Locations
      Selling Methods
      Currencys
      Blips
      Items (Price, Limit and Description)
      Job Complete Uniform

      **Compatibility:**
      Es_Extended with limit
      
      **Dependencies:**
      Es_Extended
      
      **Available Languages:**
      English
      Portuguese
      French
      Russian
      
      
      [PT]
      
      Emprego avançado de mergulho
      
      Otimizado 0,0ms
      
      **Com possibilidade de alteração:**
      
      Localizações do trabalho
      Métodos de Pagamento
      Blips
      Items (Preço, Limite e Descrição)
      Uniforme completo do trabalho
      
      **Compatibilidade:**
      Es_Extended com limite
      
      **Dependencias:**
      Es_Extended

      **Idiomas Incluídos:**
      Inglês
      Português
      Francês
      Russo
      
      **Store:** https://sylox.tebex.io/package/5790503
      
      All **scripts are available** in our shop.
      https://sylox.tebex.io/`);

    const embed2 = new EmbedBuilder()
        .setTitle('**Preview**')
        .setThumbnail(
            'https://media.discordapp.net/attachments/942450101073358928/1130973075115094016/profil.jpg?width=662&height=662'
        )
        .setColor('#008cff')
        .setDescription(`**Link**: https://www.youtube.com/watch?v=VoplimTsnEM&t=1s
        
        Best regards, **Sylox**.
    
    || @everyone ||`);
  
    if (message.author.id === lascaId) {
      const channelId = '969681917588938843'; // Replace with your desired channel ID
      const channel = client.channels.cache.get(channelId);
  
      message.delete();
  
      if (channel) {
        const sentMessage = await channel.send({ embeds: [embed] });  
        const sentMessage2 = await channel.send({ embeds: [embed2] });  
      } else {
        console.log(`Invalid channel ID: ${channelId}`);
      }
    }
};
  
 module.exports = { scubaMessage };  