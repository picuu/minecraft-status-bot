require("dotenv").config();
const { Client, Collection, Partials } = require("discord.js");
const { User, Message, GuildMember, Channel, Reaction, GuildScheduledEvent, ThreadMember } = Partials;
const client = new Client({ intents: 3276799, partials: [Channel, User, GuildMember, ThreadMember] });

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