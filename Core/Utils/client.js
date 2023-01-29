const Discord = require('discord.js');
const client = new Discord.Client({ intents: [3276799] });
const moment = require("moment")
const config = client.config = require('../Settings/config');
client.slashCommands = new Discord.Collection();
const { EmbedBuilder } = require("discord.js");


client.login(config.token)

const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'iksir') {
		const modal = new ModalBuilder()
			.setCustomId('myModal')
			.setTitle('AUUU İKSİR');


		const favoriteColorInput = new TextInputBuilder()
			.setCustomId('favoriteColorInput')
			.setLabel("Yapıcagın iksirin adı ne?")
			.setStyle(TextInputStyle.Short)
      .setRequired(true);


		const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);

    
		modal.addComponents(firstActionRow);
    
		await interaction.showModal(modal);

	}
});;
client.on(Events.InteractionCreate, interaction => {
  if (!interaction.isModalSubmit()) return;

  const favoriteColor = interaction.fields.getTextInputValue('favoriteColorInput');
  if(favoriteColor === "Ateş Direnci" || favoriteColor === "ateş direnci" || favoriteColor === "atesdirenci" || favoriteColor === "ateş direncih" || favoriteColor === "ateşdirenci" || favoriteColor === "atesdirenci") {
    
    const embed = new EmbedBuilder()
    .setTitle("Al Sana Ateş Direnci İksiri")
    .setDescription(`
Ateş Direnci **(3:00)**  = Nether Yumrusu + Magma Kremi
Ateş Direnci **(8:00)** = Nether Yumrusu + Magma Kremi + Kızıl Taş

<:water:1068464024427188336> + <:netherwart:1068464019519836230> + <:magmaceram:1068464016395092018> --> **(3:00)**
<:water:1068464024427188336> + <:netherwart:1068464019519836230> + <:magmaceram:1068464016395092018> + <:redstne:1068464021747011635> --> **(8:00)**

Kızıl Taş: **Süreyi uzatır** \n Işık Taşı Tozu: **Potensiyeli artırır** \n Barut: **Patlayıcı Yapar**
     `)
    .setColor("Red")
    interaction.reply({embeds: [embed]})
  } 
  else {
    console.log("eee")
  }

if(favoriteColor === "İyileştirme iksiri" || favoriteColor === "iyileştirme iksiri" || favoriteColor === "iyileştirme" || favoriteColor === "iyileştirmeiksiri" || favoriteColor === "Healing Potion" || favoriteColor === "Potion Of Healing" || favoriteColor === "Healing" || favoriteColor === "iyileştirme") {
    
    const embed = new EmbedBuilder()
    .setTitle("Al Sana İyileştirme İksiri")
    .setDescription(`
İyileştirme iksiri **(3 Can)** = Nether Yumrusu + Parlayan Karpuz
İyileştirme iksiri II **(6 Can)** = Nether Yumrusu + Parlayan Karpuz + Işık Taşı tozu

<:water:1068464024427188336> + <:netherwart:1068464019519836230> + <:karpuzparlak:1068466212943712346> --> **(3 Can)**
<:water:1068464024427188336> + <:netherwart:1068464019519836230> + <:karpuzparlak:1068466212943712346> + <:Grid_Glowstone_Dust:1068464011403874325> --> **(6 Can)**

Kızıl Taş: **Süreyi uzatır** \n Işık Taşı Tozu: **Potensiyeli artırır** \n Barut: **Patlayıcı Yapar**
     `)
    .setColor("Red")
    interaction.reply({embeds: [embed]})
  } 
  else {
    
    const embed = new EmbedBuilder()
    .setTitle("Aradıgın iksiri bulamadım ama al sana ateş direnci")
    .setDescription(`
Ateş Direnci **(3:00)**  = Nether Yumrusu + Magma Kremi
Ateş Direnci **(8:00)** = Nether Yumrusu + Magma Kremi + Kızıl Taş

<:water:1068464024427188336> + <:netherwart:1068464019519836230> + <:magmaceram:1068464016395092018> --> **(3:00)**
<:water:1068464024427188336> + <:netherwart:1068464019519836230> + <:magmaceram:1068464016395092018> + <:redstne:1068464021747011635> --> **(8:00)**

Kızıl Taş: **Süreyi uzatır** \n Işık Taşı Tozu: **Potensiyeli artırır** \n Barut: **Patlayıcı Yapar**
     `)
    .setColor("Red")
    interaction.reply({embeds: [embed]})

  }

});

module.exports = client