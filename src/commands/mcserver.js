const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require("discord.js");
const util = require("minecraft-server-util");

module.exports = {
    name: "mcserver",
    data: new SlashCommandBuilder()
        .setName("mcserver")
        .setDescription("Get status info about a minecraft server.")
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addStringOption(option => option
            .setName("ip").setDescription("The IP address of the Minecraft server.").setRequired(true))
        .addStringOption(option => option
            .setName("port").setDescription("The port of the Minecraft server. By default it's 25565").setRequired(false)),

    async execute(client, interaction) {

        await interaction.deferReply();
        
        const ip = interaction.options.getString("ip");
        const port = interaction.options.getString("port") ? interaction.options.getString("port") : "25565";

        util.status(ip, parseInt(port)).then((res) => {

            console.log(res.players.online)
            console.log(res.players.max)
            console.log(res.version.name)

            const statusEmbed = new EmbedBuilder()
                .setColor("Green")
                .setTitle("MC Server Status")
                .setThumbnail("attachment://favicon.png")
                .addFields(
                    { name: "Server IP", value: ip },
                    { name: "Online Players", value: `${res.players.online}` },
                    { name: "Max Players", value: `${res.players.max}` },
                    { name: "Version", value: res.version.name }
                )
                .setFooter({ text: "MC server util by Picuu" })

            const serverFavicon = Buffer.from(res.favicon.split(",")[1], "base64");
            
            interaction.editReply({ files: [{ attachment: serverFavicon, name: "favicon.png"}], embeds: [statusEmbed] });

        }).catch((error) => {
            interaction.editReply({ content: "There was an error finding this server.", ephemeral: true });
            throw error;
        });

    }

}