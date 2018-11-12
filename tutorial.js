const Eris = require("eris")
const config = require("./config.json");
var bot = new Eris.Client(
    config.token, {
        restMode: true
    }
);
bot.on("ready", () => {
    console.log("Ready!");
});
bot.on("messageCreate", (msg) => {
    if(msg.content === "!ping") {
        bot.createMessage(msg.channel.id, "Pong!");
    }
});
bot.connect();
