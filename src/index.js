require("dotenv").config();
const { Client, Collection, Partials } = require("discord.js");
const { User, Message, GuildMember, Channel, Reaction, GuildScheduledEvent, ThreadMember } = Partials;
const client = new Client({ intents: 3276799, partials: [Channel, User, GuildMember, ThreadMember] });

client.commands = new Collection();

require("./handlers/events.js")(client);
require("./handlers/commands.js")(client);

client.login(process.env.token).then(() => {
  client.user.setActivity(`/mcserver`, { type: 3 });
}).catch((error) => console.log(error));