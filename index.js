const Discord = require('discord.js');
const bot = new Discord.Client()

bot.on("ready", () => {
    console.log('Bot ON')
    bot.user.setActivity("BETA 13 SERVEURS [m!help]", { type: "WATCHING", url: "https://twitch.tv/trainupfortnite" }); 
	
});

bot.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = "m!";
    let messageArray = message.content.split("Ton message");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if (cmd === prefix + "mp") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: :x: Tu n'a pas la permission ! :x: :x:");

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');
        message.delete()
    }


    if (cmd === prefix + "help") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Il faut etre administrateur pour avoir acces au bot !");

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send("Les commandes sont: m!support m!code m!mp m!ban m!warn (mention membre m!warn / m!ban @membre) m!unwarn @membre m!unban @membre m!cry m!cry2 m!cry3 m!invite m!nsfw")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
	
	    if (cmd === prefix + "code") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Il faut etre administrateur pour avoir acces au bot !");

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send("Contacte Seigneur pour avoir mon code et ainsi personaliser Mr.Drax ^^")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
	
		    if (cmd === prefix + "mp") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Il faut etre administrateur pour avoir acces au bot !");

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send("Tu veux mp tout le monde ? Alors demande un accés complet du bot")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
	
			    if (cmd === prefix + "support") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Il faut etre administrateur pour avoir acces au bot ! ");

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send("Tu as besoin d'aide , Alors vien sur le serveur support de Mr.Drax : https://discord.gg/KrW6emh ")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
		
	
		    if (cmd === prefix + "ban") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Il faut etre administrateur pour avoir acces au bot !");

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send(":x: Je n'ai pas pu bannir le membre")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
			    if (cmd === prefix + "warn") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Il faut etre administrateur pour avoir acces au bot !");

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send(":white_check_mark: J'ai warn le membre !")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
		    if (cmd === prefix + "unwarn") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Il faut etre administrateur pour avoir acces au bot !");

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send(":white_check_mark: J'ai unwarn le membre ^^ :white_check_mark: ")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
			    if (cmd === prefix + "unban") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Il faut etre administrateur pour avoir acces au bot !");

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send(":white_check_mark: J'ai révoqué le bannissement du membre ^^ :white_check_mark: ")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
				    if (cmd === prefix + "cry") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Il faut etre administrateur pour avoir acces au bot !");

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send(":sob: Tu pleures des litres d'eau :sob: https://media.giphy.com/media/1xp244z70ITqt1MIfl/giphy.gif ")
		message.guild.members.map(m => m.send(msge))
        message.delete()

	}
	
				    if (cmd === prefix + "cry2") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Il faut etre administrateur pour avoir acces au bot !");

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send("Tu pleures encore plus :sob: https://media1.tenor.com/images/4f0673fe4091e88cac9ef1b683f9f81c/tenor.gif?itemid=3550873")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
				    if (cmd === prefix + "cry3") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Il faut etre administrateur pour avoir acces au bot !");

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send(":sob: Arretes tu va te noyer  https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
					    if (cmd === prefix + "cry2") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Il faut etre administrateur pour avoir acces au bot !");

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send("Tu pleures encore plus :sob: https://media1.tenor.com/images/4f0673fe4091e88cac9ef1b683f9f81c/tenor.gif?itemid=3550873")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
				    if (cmd === prefix + "invite") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Il faut etre administrateur pour avoir acces au bot !");

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send(":key: Pour inviter le bot sur votre serveur > https://discordapp.com/api/oauth2/authorize?client_id=571795165430284288&permissions=8&scope=bot :key:")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
					    if (cmd === prefix + "nsfw") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Il faut etre administrateur pour avoir acces au bot !");

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send("Petit(e) cochon(e) ;) [NSFW:underage: EN DEV]")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
});

bot.login("NTcxNzk1MTY1NDMwMjg0Mjg4.XQAF8Q.o3iD371-UrDKW4fI-INfqpW-fpo")
