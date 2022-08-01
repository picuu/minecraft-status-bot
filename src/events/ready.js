require("dotenv").config();

module.exports = {
    name: "ready",

    async execute(client) {

        console.log(`Bot logged in as ${client.user.tag}`);

    }
}