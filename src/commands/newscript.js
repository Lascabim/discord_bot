// advertising.js

const newscriptMessage = async (client, message) => {
    const { EmbedBuilder } = require('discord.js');
  
    const lascaId = '326836813215956994';
  
    const NewScriptmessage = (`**NEW SCRIPT AVAILABLE !!**

**Links:**
Tebex: https://sylox.tebex.io/package/5853293
Youtube: https://www.youtube.com/watch?v=zC8vDnMlUkc&t=7s
Cfx: https://forum.cfx.re/t/esx-paid-airdrop-lootbox-script/5159256
    
**Open ticket for a discount!**
Ticket Channel: https://discord.com/channels/966050034816782366/1131561694854914118

|| @everyone ||`);
  
    if (message.author.id === lascaId) {
      const channelId = '966050035441750019'; // Replace with your desired channel ID
      const channel = client.channels.cache.get(channelId);
  
      message.delete();
  
      if (channel) {
        const sentMessage = await channel.send(NewScriptmessage);
      } else {
        console.log(`Invalid channel ID: ${channelId}`);
      }
    }
};
  
 module.exports = { newscriptMessage };  