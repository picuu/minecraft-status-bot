const fs = require("fs");

module.exports = (client) => {

    const buttons = fs.readdirSync("./src/buttons").filter((file) => file.endsWith(".js"));

    for (const file of buttons) {
        const button = require(`../buttons/${file}`);
        client.buttons.set(button.data.name, button);
    }
    
}