// advertising.js

const postMessage = async (client, message) => {
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

      This is a Postman/Mail Job script that is fully automatically. When your in service working, the script searches for letterboxes in the distance selected in the config.lua.

      Each letterbox after being interacted is unavailable for 5 minutes.
      
      Optimized 0,0ms
      
      **With the possibility to change:**
      
      Job Name
      Align Location
      Reward Type (cash or bank)
      Blips
      Items
      Job Uniform
      Notifications
      
      **Dependencies:**
      Es_Extended
      Oxmysql/Mysql-async
      
      **Available Languages:**
      English
      Portuguese
      French
      Russian
      German
      
      
      [PT]
      
      Este é um script de correios totalmente automático. Quando estás em serviço, o script procura caixas de correio na distância selecionada no config.lua.

      Cada caixa de correio depois de sofrer alguma interação fica indisponível por 5 minutos.
      
      Otimizado 0,0ms
      
      **Com possibilidade de alteração:**
      
      Nome do Emprego
      Alinhamento do Menu
      Método de Pagamento (dinheiro or banco)
      Blips
      Items
      Uniforme do Emprego
      Notificações
      
      **Dependencias:**
      Es_Extended
      Oxmysql/Mysql-async

      **Idiomas Incluídos:**
      Inglês
      Português
      Francês
      Russo
      Alemão
      
      **Store:** https://sylox.tebex.io/package/5847349
      
      All **scripts are available** in our shop.
      https://sylox.tebex.io/`);

    const embed2 = new EmbedBuilder()
        const finalMessage = (`
    **Link**: https://www.youtube.com/watch?v=Ss6n7hl_6DI

|| @everyone ||`);
  
    if (message.author.id === lascaId) {
      const channelId = '1138958629614133359'; // Replace with your desired channel ID
      const channel = client.channels.cache.get(channelId);
  
      message.delete();
  
      if (channel) {
        const sentMessage = await channel.send({ embeds: [embed] });  
        const sentMessage2 = await channel.send(finalMessage);  
      } else {
        console.log(`Invalid channel ID: ${channelId}`);
      }
    }
};
  
 module.exports = { postMessage };  