const { Client, IntentsBitField } = require('discord.js');

// COMMANDS
const { handleVerification } = require('./commands/verification');
const { streamMessage } = require('./commands/streams');
const { inviteMessage } = require('./commands/invite');
const { addMessage } = require('./commands/advertising');
const { logsMessage } = require('./commands/logs');
const { deleteMessage } = require('./commands/delete');
const { soonMessage } = require('./commands/soon');
const { optMessage } = require('./commands/opt');


// PACKAGES
const { scubaMessage } = require('./packages/scuba');

// PARTNER
const { karmaPartner } = require('./partners/karma');
const { nolifePartner } = require('./partners/nolife');


const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildEmojisAndStickers,
        IntentsBitField.Flags.GuildMessageReactions,
        IntentsBitField.Flags.GuildMessageTyping,
        IntentsBitField.Flags.MessageContent,
      ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online.`);
});

client.on('messageCreate', async (message) => {

    // COMMANDS

    if (client.channels.cache.get(1129889149281910876)) {
        if (message.content !== '!verification') {
            deleteMessage(client, message);
        }
    }

    if (message.content === '!verification') {
        handleVerification(client, message);
    }

    if (message.content === '!streams') {
        streamMessage(client, message);
    }

    if (message.content === '!invitel') {
        inviteMessage(client, message);
    }

    if (message.content === '!advertising') {
        addMessage(client, message);
    }
    
    if (message.content === '!logs') {
        logsMessage(client, message);
    }

    if (message.content === '!soon') {
        soonMessage(client, message);
    }

    if (message.content === '!opt') {
        optMessage(client, message);
    }

    // PACKAGES

    if (message.content === '!scuba') {
        scubaMessage(client, message);
    }

    // PARTNERS

    if (message.content === '!karma') {
        karmaPartner(client, message);
    }
    
    if (message.content === '!nolife') {
        nolifePartner(client, message);
    }
});


client.on('messageReactionAdd', async (reaction, user) => {
    console.log(`Reaction added by ${user.tag} to message with ID: ${reaction.message.id}`);
    console.log(`Emoji name: ${reaction.emoji.name}`);

    if (reaction.message.id === 1131576176838713374 && reaction.emoji.name === '✅') {
      try {
        const guild = reaction.message.guild;
        const member = guild.members.cache.get(user.id);
        const role = guild.roles.cache.get(966050034837757977);
  
        if (role && member) {
          await member.roles.add(role);
          console.log(`Added role "${role.name}" to ${member.user.tag}`);
        } else {
          console.log('Role or member not found.');
        }
      } catch (err) {
        console.error('Error occurred while adding the role:', err);
      }
    }
});

client.login('MTExODA4NTU5MDE4MTc0MDU0NA.GqFjl0.jDc1LxtmlYHdyO6ZYPrp4AWpKbz7iMDmtppIe4');