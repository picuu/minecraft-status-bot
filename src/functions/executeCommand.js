module.exports = async (client, interaction) => {

    const command = client.slashCommands.get(interaction.commandName);

    if (!command) return interaction.reply({ content: "This command is outdated!", ephemeral: true });

    try {
        await command.execute(client, interaction);
    } catch (error) {
        console.error(error)
        return await interaction.reply({ content: "Something went wrong while executing this command...", ephemeral: true });
    }

}