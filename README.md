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
```javascript
const config = require("config.json");
var bot = new Eris(config.token);
bot.on("ready", () => {
    console.log("Ready!");
});
bot.on("messageCreate", (msg) => {
    if(msg.content === "!ping") {
        bot.createMessage(msg.channel.id, "Pong!");
    }
});
bot.connect();
```
and then post the following into your `config.json` file:
```json
{
    "token": " "
}
```
You might be wondering why the `token` field is empty in our config file. Lemme explain.
# THE GREATEST SIN IMAGINABLE
This next bit is EXTREMELY important. Here it goes:

DO NOT LEAK YOUR TOKEN

Let me just make sure you got that.

DO NOT LEAK YOUR TOKEN

One more time for good measure.

DO NOT LEAK YOUR TOKEN

You might be asking "What does leaking my token mean?". Lemme explain. See, your bot token is what Discord uses to say "oh, the thing running this code is the bot account RandomBot#4456". This means that if someone gets your token they can hijack your bot and do whatever they want with it, which is VERY BAD.
Tips on how to not leak your token:
* If you're using Github and you are new to it, MAKE SURE YOUR TOKEN NEVER ENDS UP ON THE REPO (except if it is a private repo but even then) Like, if it ends up there, delete the file manually or reset your token immediately just to make sure you stay secure. I recommend not using Github until you are EXTREMELY well-versed in how it works.
* Never ever ever ever EVER give your token to anyone else except if you trust them to the point where you would be fine with them literally having your identity for a day and trusting them not to ruin your reputation for fun.

Alright, so after that shebang, it's time to DIVE IN!
# Jumping on the information superhighway
Remember that `config.json` file? Well, it's time to put your token in it! You can get your token from the Bot page I had you save earlier (I hope you kept it open)
and paste it inbetween the quotes like so:
```json
{
    "token": "bot.token.goes.here"
}
```
Then, save the file and, in the command line, run `node app.js`. If you followed the steps, you should get an output of "Ready!". If that happens, good job! If it doesn't happen, you messed up somewhere. Read the tutorial again a few times just to make ABSOLUTELY SURE you did everything correctly. If it STILL doesn't work, refer to the FAQ later in the tutorial.
But now you are probably wondering "yeah but how do I make bot TALK" and we're about to get to that.
# IT'S ALIVE!!!
Alright so your bot is up and running. Great! Let's invite it to your server.
Go back to your bot application page and click the OAuth tab. Then, scroll down a little bit, click the `bot` checkbox (and only that checkbox), and generate an oauth link. Paste that in your browser and you'll see a page where you can invite your bot. Invite your bot to the server, then try `!ping`. If the stars align, the bot will respond with `Pong!`. 
# Yeah cool but I WANT MORE THING NOW
Well, I have some bad news for you, then. This is the end of the tutorial! Yep, that simple ping command was all I'm actually gonna teach you. This is because if you get overly dependent on tutorials you won't actually be able to learn anything. So, here are some next steps:
1. Get better and better at Javascript
2. Look at the Eris [documentation](https://abal.moe/Eris/docs/getting-started)  and the [the GitHub repo](https://github.com/abalabahaha/eris) for Eris
3. Join servers like [Discord API](discord.gg/discord-api) and [Discord Bots]( https://discord.gg/0cDvIgU2voWn4BaD) to ask questions after you've learned some things
4. Yell at StackOverflow a lot
5. Look at existing bots written in Eris to springboard from (make sure to give credit where credit is due)

# End of the line, pal
Well, that brings us to a close. Again, refer to the list above to learn more and more about how to develop a bot using Eris and Node.js and in a decent amount of time you'll be in the thick of it and you'll feel like a demigod to be quite honest. Once you start figuring out how to do things it really is an experience that can't be replicated anywhere else. Good luck! 

-Max Grosshandler

# FAQ

Q: WHY NOT SPOONFEED MAGIC BOT THAT MAKES WAFFLES?

A: Because that would be hard and defeats the purpose of this tutorial.


Q: My bot STILL isn't working and I've read the tutorial and made 100% sure I did everything correctly! What do I do?

A: Yell at me at either MaxGrosshandler#6592 (work account) or Xamtheking#2099 (fun account) on Discord. You can send me a friend request or ping me in Discord API / Discord Bots, my two most frequent servers.

Q: Why use Eris over Discord.js? Isn't Discord.js more beginner friendly?

A: That's a great question! I will agree Discord.js can be seen as more beginner friendly (and it also has MUCH better documentation than Eris does) but I think Eris is a better lib because it sacrifices convienience for readability. As an example, Discord.js has `reply()`, which will automatically mention the user who triggered a given command along with a message, while Eris has no such functionality built-in. While it's certainly convienient to have such a method in Discord.js, I find having to do the hard grunt work makes me a better coder and leaves less wiggle room for having my things work, which I prefer over having to write less code. If you like Discord.js, more power to you! I just don't use it in this tutorial.