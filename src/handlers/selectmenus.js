const fs = require("fs");

module.exports = (client) => {

    const selectMenus = fs.readdirSync("./src/selectmenus").filter((file) => file.endsWith(".js"));

    for (const file of selectMenus) {
        const selectMenu = require(`../selectmenus/${file}`);
        client.selectMenus.set(selectMenu.data.name, selectMenu);
    }
    
}