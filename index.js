// Bot Settings
const botsettings = require('./botsettings.json');
// Original Discord js
const Discord = require('discord.js');

const bot = new Discord.Client({disableEveryone: true});
const prefix = botsettings.prefix;

// bot.registry
//     .registerGroup('random', 'Random')
//     .registerDefaults()
//     .registerCommandsIn(path.join(__dirname, 'commands'));

bot.on('ready', async() => {
    console.log(`Bot is ready! *** ${bot.user.username} ***`);
    try {
        let link = await bot.generateInvite(["ADMINISTRATOR"]);
        console.log("* Link Created *",link);
    } catch(e) {
        console.log(e.stack);
    }
});

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    let messageArray = message.content.split(' ');
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith(prefix)) return;

    if(command === `${prefix}userinfo`) {
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setDescription("This is the user's info!")
            .setColor("#FFFFFF")
            .addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
            .addField("ID", message.author.id)
            .addField("Created At", message.author.createdAt);
        message.channel.sendEmbed(embed);

        return;
    }
})

// Bot Login
bot.login(botsettings.token);