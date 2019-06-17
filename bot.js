const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("582216605270802446")
setInterval(function() {
channel.send(`King wolf god  King wolf god King wolf god`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
