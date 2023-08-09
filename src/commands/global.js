const globalMessage = async (client, message) => {

    const lascaId = '326836813215956994';
    const serverId = '762098480256647230';

    const messageW = `
**Idiomas [PT e EN]**

Olá, nós somos uma loja de FiveM que **cria, arranja e otimiza scripts.**
**Vendemos servidores**, ou **criamos** um a seu gosto. 
    
Caso queiras dar um **upgrade** à tua comunidade, ou criar uma, dá uma vista de olhos!

**Tebex: https://sylox.tebex.io/
Discord: https://discord.gg/N3NcQrcEzY
Youtube: https://www.youtube.com/@syloxfivem
CFX: https://forum.cfx.re/u/lascabino/activity**

Best regards, Lascabim
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

module.exports = { globalMessage };