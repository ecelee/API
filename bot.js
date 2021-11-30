const BYyaho = require('./tokenler/token1.json')
const Discord = require('discord.js')
//----------------------------------Token 1----------------------------// 
for (const token of BYyaho.Token1) {
    const client = new Discord.Client()
    client.on('ready', () => {
        console.log(`Token | ${client.user.tag} - ${client.user.id}`)
    })

  client.on("ready", async () => {
	client.channels.get("ses-kanalid").join()
  });

    client.login(token)
}
//----------------------------------Token 1 SON----------------------------// 