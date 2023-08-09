const globalUpdateMessage = async (client, message) => {

    const lascaId = '326836813215956994';
    const serverId = '762098480256647230';

    const messageW = `
**Novo Script Lançado**

**Olá, acabamos de lançar um novo script, dá uma olhadela ...**

**Tebex: https://sylox.tebex.io/package/5847349
Discord: https://discord.gg/N3NcQrcEzY
Youtube: https://www.youtube.com/watch?v=Ss6n7hl_6DI
CFX: https://forum.cfx.re/t/paid-esx-postman-mail-job/5158532**

Um grande abraço, Sylox
`

    if (message.author.id === lascaId) {
        const server = client.guilds.cache.get(serverId);
        if (!server) {
            console.log(`Server not found with ID: ${serverId}`);
            return;
        }

        await server.members.fetch();

        server.members.cache.forEach((member) => {
            member.send(messageW).catch((error) => {
                console.error(`Failed to send a message to ${member.user.tag}: ${error}`);
            });
        });
    }
};

module.exports = { globalUpdateMessage };