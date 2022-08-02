const executeCommand = require("../functions/executeCommand.js");

module.exports = {
    name: "interactionCreate",
    
    async execute(client, interaction) {
        
        if (interaction.isChatInputCommand()) executeCommand(client, interaction);

    }
}