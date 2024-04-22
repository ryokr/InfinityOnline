const Eris = require("eris");
const on = require('./on.js')

const bot = new Eris(process.env.TOKEN);

bot.on("error", (err) => {
   console.error(err);
});

bot.connect();