require('dotenv').config()
const {Client,GatewayIntentBits  } = require('discord.js')

const client = new Client({
    intents : [
        GatewayIntentBits.Guilds
    ]
})

client.login(process.env.DISCORDJS_BOT_TOKEN)

client.on('ready', () => {
    console.log(`${client.user.tag} has logged in`)
})

client.on('messageCreate', (message) => {
    if(message.content === 'hello'){
        message.reply('hello there!')
    }
})
