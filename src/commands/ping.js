const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    name: "ping",
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Get my ping and Discord API ping.")
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages),

    async execute(client, interaction) {

        const message = await interaction.deferReply({ fetchReply: true });
        
        const ping = `API Latency **${client.ws.ping}ms**\nClient ping: **${message.createdTimestamp - interaction.createdTimestamp}ms**`;

        await interaction.editReply({ content: ping });

    }
}