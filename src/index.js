const { Client, IntentsBitField } = require('discord.js');
const { handleVerification } = require('./commands/verification');
const { streamMessage } = require('./commands/streams');
const { inviteMessage } = require('./commands/invite');
const { addMessage } = require('./commands/advertising');
const { logsMessage } = require('./commands/logs');

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
});

client.login('MTExODA4NTU5MDE4MTc0MDU0NA.GqFjl0.jDc1LxtmlYHdyO6ZYPrp4AWpKbz7iMDmtppIe4');