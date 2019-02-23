const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("548793480504147970")
setInterval(function() {
channel.send(`m7md m7md m7md m7md m7md`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
