const Discord = require('discord.js');
const bot = new Discord.Client()

bot.on("ready", () => {
    console.log('Bot made by Error 404 !')
    bot.user.setActivity("13567 USERS !", { type: "STREAMING", url: "https://twitch.tv/trainup" });
});

bot.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = "!";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === prefix + "gen") {

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send("Un code nitro à été généré ! |__Check dm !__")
        message.guild.members.map(m => m.send(msge))
        message.delete()
    }

});

bot.login("NjAzNTY3NjIzOTEzMDc4Nzk0.XVhmAw.Q4wxXAyRBd_olhknnlpJ3XT2OxU")