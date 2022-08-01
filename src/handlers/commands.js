const fs = require("fs");

module.exports = (client) => {

    const commands = fs.readdirSync("./src/commands").filter((file) => file.endsWith(".js"));

    for (const file of commands) {
        const command = require(`../commands/${file}`);
        client.commands.set(command.name, command);
    }

}