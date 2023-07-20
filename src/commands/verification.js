// verification.js

const handleVerification = async (client, message) => {
    const { EmbedBuilder } = require('discord.js');
  
    const lascaId = '326836813215956994';
  
    const embed = new EmbedBuilder()
      .setTitle('**Verification System**')
      .setThumbnail(
        'https://media.discordapp.net/attachments/942450101073358928/1130973075115094016/profil.jpg?width=662&height=662'
      )
      .setColor('#008cff')
      .setDescription(`Welcome to our community **Sylox!** We are here to help you with your **FiveM projects**.
  
What can you expect from our services:
  
About Scripts:
  - **Creation on Demand;**
  - **Optimization;**
  - **Add Discord Logs;**
  
About Servers:
  - **Bundles for Sale;**
  - **Creation on Demand;**
  
About Bugs:
  - **Bug Correction;**
  
Support on Sundays may be limited to minor issues only.
  
Best regards, react to this message to proceed.
  
|| @everyone ||`);
  
    if (message.author.id === lascaId) {
      const channelId = '1129889149281910876'; // Replace with your desired channel ID
      const channel = client.channels.cache.get(channelId);
  
      message.delete();
  
      if (channel) {
        const sentMessage = await channel.send({ embeds: [embed] });
        // await sentMessage.react('✅');
  
        // const filter = (reaction, user) => reaction.emoji.name === '✅' && !user.bot;
        // const collector = sentMessage.createReactionCollector({ filter });
  
        // collector.on('collect', (reaction, user) => {
        //   const guild = reaction.message.guild;
        //   const roleId = '966050034837757977'; // Replace with the ID of the role you want to assign
        //   const role = guild.roles.cache.get(roleId);
  
        //   if (role) {
        //     const member = guild.members.cache.get(user.id);
  
        //     if (member && !member.roles.cache.has(roleId)) {
        //       member.roles
        //         .add(role)
        //         .then(() => console.log(`Assigned role ${role.name} to ${user.tag}`))
        //         .catch(console.error);
        //     }
        //   }
        // });
      } else {
        console.log(`Invalid channel ID: ${channelId}`);
      }
    }
};
  
 module.exports = { handleVerification };  