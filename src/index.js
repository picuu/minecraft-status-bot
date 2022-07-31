require("dotenv").config();
const { Client, Collection } = require("discord.js");
const client = new Client({ intents: 3276799, partials: ["CHANNEL", "USER", "GUILD_MEMBER", "MESSAGE", "REACTION", "GUILD_SCHEDULE_EVENT", "THREAD_MEMBER"] });

client.commands = new Collection();
client.buttons = new Collection();
client.selectMenus = new Collection();

require("./handlers/events.js")(client);
require("./handlers/commands.js")(client);
require("./handlers/buttons.js")(client);
require("./handlers/selectmenus.js")(client);

client.login(process.env.token).then(() => {
  client.user.setActivity(`mc.server.ip`, { type: 3 });
}).catch((error) => console.log(error));