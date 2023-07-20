const { Client, IntentsBitField } = require('discord.js');

// COMMANDS
const { handleVerification } = require('./commands/verification');
const { streamMessage } = require('./commands/streams');
const { inviteMessage } = require('./commands/invite');
const { addMessage } = require('./commands/advertising');
const { logsMessage } = require('./commands/logs');
const { deleteMessage } = require('./commands/delete');
const { soonMessage } = require('./commands/soon');


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

const reactedMessages = new Set();

client.on('messageReactionAdd', async (reaction, user) => {
  // Check if the user who reacted is a bot or if the reaction is on a cached message
  if (user.bot || reactedMessages.has(reaction.message.id)) return;

  reactedMessages.add(reaction.message.id);
  console.log("HEY");

  // Rest of your code here (e.g., assigning roles, etc.)
});

// Optional: If you want to remove message IDs from the cache after a specific time
const cleanupInterval = 5 * 60 * 1000; // 5 minutes
setInterval(() => {
  reactedMessages.clear();
}, cleanupInterval);

client.login('MTExODA4NTU5MDE4MTc0MDU0NA.GqFjl0.jDc1LxtmlYHdyO6ZYPrp4AWpKbz7iMDmtppIe4');