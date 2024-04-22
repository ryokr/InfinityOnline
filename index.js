const config = require('./config.js');
const RunServer = require('./alive');
const Eris = require("eris");
const client = new Eris.Client(config.TOKEN);

RunServer();

client.on('ready', () => {
   console.log(`Logged in as ${client.user.username}#${client.user.discriminator} (${client.user.id}).`);
   setStatus(config.STATUS, config.CUSTOM_STATUS);
});

client.on('messageCreate', message => {
   if (message.author.bot) return;
   if (message.content.startsWith('?hello')) {
      client.createMessage(message.channel.id, 'Hello');
   }
});

function setStatus(STATUS, CUSTOM_STATUS) {
   client.editStatus(STATUS, {
      name: CUSTOM_STATUS,
      type: 0
   });
}

client.connect();