const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommmandsIn(__dirname + "/commands");

bot.login('NDI2MTE4ODY0MzcyMjM2Mjg5.DZRhrA.jeCBzJwU22bIcJBGSUe5tE2XJjM');