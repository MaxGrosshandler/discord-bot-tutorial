# discord-bot-tutorial
For discord bot learning things
Ok, so, you want to make a discord bot, do ya?
Well it'll take a bit of hard work dontcha know?

# Prerequisites 
* Know at least a little bit of Javascript. You don't need to know the entire language back to front, but you do need to know a bit of it. A good checklist to follow is below:
    * Know whether or not Javascript is dynamically or statically typed
    * Know that Java and Javascript are actually unrelated besides the name
    * Know how to declare and then use variables
    * Learn how Javascript does methods
    * Understand that `var` sucks and you should never use it, ever
    * Know how to read documentation for Javascript
    * Bonus Checklist:
        * Learn how promises work
        * Know what NPM is
        * Learn more about Node and ES7
* Have node.js installed, at least version 8 (if you don't know what that is, I advise you to google it and do a bit of research)
* You should have a text editor installed. Personally, I use Visual Studio Code, but anything is fine, like Atom, IntelliJ, or Vim if you really want to. Except for Sublime Text. Please don't pay for Sublime Text. Please.
* You'll need to have a bot application made. Steps for such:
    * Go to discordapp.com/developers
    * Make an application and call it what you want your bot to be 
    * Click the "Bot" tab
    * Make it into a bot account
    * Keep the page handy for later
* Know how to navigate through the command line and such (if you don't know, google it!)
# Getting started 
Alright so you think you've got it down? You know at least a little bit about how Javascript works? You've got node installed? Alright then lets get down to business.
First thing you'll wanna do is make a new folder where your bot code is gonna be. Call it whatever you like. You should do this using the command line (i.e. `mkdir botfolder`) because you'll need to be familiar with the command line to get this puppy started. After you've made said folder, navigate into it (`cd botfolder`) and then in your text editor of choice make a file called `app.js` and save it that way.
Then make a file called `config.json` and save that. Then, in the command line, run `npm install --no-optional eris`
# Alright what is this did I just download a virus
No, you didn't download a virus. You downloaded a library that can be used by a Javascript program to connect with Discord. To briefly explain how this works, think of your Discord client. You've got a neat little interface for interacting with your Discord servers, but it's all just window dressing that makes it human-usable. Whenever you send a message, you're actually sending a request to Discord's servers that basically translates to "hey this user wants to send a message and the content is whatever". This is a very basic explanation, and if you are interested I encourage you to read up on the API Documentation found in the Discord Developers portal, but it serves to explain how your bot will work. Bot account and user accounts are basically the same (except for a few minor quirks that don't matter too much), so when a bot sends a message it makes a request to Discord's servers just like a user would, except without a graphical user interface, or GUI. In this case, Eris is what we use to make such requests.

# Ok but HOW DO I MAKE BOT WORK PUNY HUMAN
Slow down there, rambo. It won't be too long, but have a bit of patience, please. After installing Eris in your directory, post the following into your `app.js` file:
<code>var bot = new Eris("BOT_TOKEN");
bot.on("ready", () => {
    console.log("Ready!");
});
bot.on("messageCreate", (msg) => {
    if(msg.content === "!ping") {
        bot.createMessage(msg.channel.id, "Pong!");
    }
});
bot.connect();</code>

