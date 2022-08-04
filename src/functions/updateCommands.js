require("dotenv").config();
const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v10");

const rest = new REST({ version: "10" }).setToken(process.env.token);

updateSlash();

async function updateSlash() {
    try {
        const commands = [];
        const commandsFiles = fs.readdirSync("./src/commands").filter((file) => file.endsWith(".js"));
        for (const commandFile of commandsFiles) {
            const command = require(`../commands/${commandFile}`);
            commands.push(command.data.toJSON());
        }
        await rest.put(Routes.applicationCommands(process.env.clientId), { body: commands });
        console.log("Successfully reloaded application commands (/).")
    }
    catch (error) {
        console.log(error);
    }
}