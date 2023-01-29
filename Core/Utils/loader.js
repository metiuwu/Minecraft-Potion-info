const client = require('./client');
const fs = require('fs')
const { REST, Routes } = require('discord.js');

const rest = new REST({ version: '10' }).setToken(client.config.token);

let isCommands = []
let commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`../../Commands/${file}`)
    isCommands.push(command.data.toJSON())
    client.slashCommands.set(command.data.name, command)
}

let eventFiles = fs.readdirSync('./Events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`../../Events/${file}`)
    client.on(event.name, event.execute)
}

client.on('ready', async () => {

	const data = await rest.put(
			Routes.applicationGuildCommands(client.user.id, "896475140039278592"),
			{ body: isCommands },
		);
    console.log(`(*) ${data.length} adet komut yüklendi.`)

})