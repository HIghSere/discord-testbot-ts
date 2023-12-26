import { GatewayIntentBits, Client, Partials, Message } from 'discord.js'
const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Message, Partials.Channel],
})

client.once('ready', () => {
    console.log('ready!');
});

const prefix = 't<';

client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    if(message.content === prefix+'ping') {
        message.reply(`pong! ${client.ws.ping}ms`)
    }
});

client.login(YOUR_TOKEN);