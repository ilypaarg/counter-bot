const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
client.login(process.env.counter_token);

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('ayooooooo discord equal connectedddddd');
}

client.on('message', gotMessage);


async function gotMessage(msg) {
    if (msg.content === "count for me") // or any command prefix or trigger goes in the quotes.
    {
        var balls = 137;
        while (balls < 10000)
        {
            balls++;
            msg.channel.send(balls);
        }
    }
}
