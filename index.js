const alive = require('./alive.js')
const config = require('./config.js');
const Eris = require("eris");

const bot = new Eris(config.TOKEN);

bot.on("error", (err) => {
   console.error(err);
});

bot.connect();