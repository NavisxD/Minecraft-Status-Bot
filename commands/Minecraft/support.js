const { SlashCommandBuilder, EmbedBuilder, Embed, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("support")
    .setDescription("Get support while using Codez"),
  async execute(interaction, client) {

    const newMessage = new EmbedBuilder()
      .setColor("#db722c")
      .setTitle(`Codez - Support Servers`)
      .setFooter({text: "©2022 - 2023 | Codez"})
      .setDescription("> **Thanks for using `Codez` while learning coding! Here is the support server and invite link.**")

          const row = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
        .setLabel(`Support Server`)
        .setStyle(ButtonStyle.Link)
        .setEmoji("<:codez_support:1063709600500690974>")
        .setURL(`https://discord.gg/J6VkMYcT2P`),
        new ButtonBuilder()
        .setLabel(`Invite Codez`)
        .setStyle(ButtonStyle.Link)
        .setEmoji("<:codez_invite:1063709721313427537>")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=1062937698488299620&permissions=59392&scope=bot`),
      ) 
    
   interaction.reply({ embeds: [newMessage], components: [row] });
  },
};