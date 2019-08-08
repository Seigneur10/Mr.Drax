const Discord = require('discord.js');
const bot = new Discord.Client()

bot.on("ready", () => {
    console.log('Bot ON')
    bot.user.setActivity("BETA-5 SERVEURS [m!help]", { type: "WATCHING", url: "https://twitch.tv/trainupfortnite" }); 
	
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

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send("Les commandes sont: m!support m!code m!ban m!warn (mention membre m!warn / m!ban @membre) m!unwarn @membre m!unban @membre m!cry m!cry2 m!cry3 m!invite m!bilal m!nsfw m!game m!game2 m!game3 m!horse m!serveurs m!game4 m!meme m!meme2 m!meme3 m!meme4")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}


	    if (cmd === prefix + "code") {

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send("Contacte Seigneur pour avoir mon code et ainsi personaliser Mr.Drax ^^")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
	
		    if (cmd === prefix + "mp") {

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send("Tu veux mp tout le monde ? Alors demande un accés complet du bot")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
	
			    if (cmd === prefix + "support") {

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send("Tu as besoin d'aide , Alors vien sur le serveur support de Mr.Drax : https://discord.gg/KrW6emh ")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
	
		    if (cmd === prefix + "ban") {

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send(":x: Je n'ai pas pu bannir le membre")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
	
			    if (cmd === prefix + "warn") {

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send(":white_check_mark: J'ai warn le membre !")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
	
		    if (cmd === prefix + "unwarn") {

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send(":white_check_mark: J'ai unwarn le membre ^^ :white_check_mark: ")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}


			    if (cmd === prefix + "unban") {

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send(":white_check_mark: J'ai révoqué le bannissement du membre ^^ :white_check_mark: ")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
	
				    if (cmd === prefix + "cry") {

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send(":sob: Tu pleures des litres d'eau :sob: https://media.giphy.com/media/1xp244z70ITqt1MIfl/giphy.gif ")
		message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
	
				    if (cmd === prefix + "cry2") {

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send("Tu pleures encore plus :sob: https://media1.tenor.com/images/4f0673fe4091e88cac9ef1b683f9f81c/tenor.gif?itemid=3550873")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
	
				    if (cmd === prefix + "cry3") {

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send(":sob: Arretes tu va te noyer  https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
	
					    if (cmd === prefix + "cry2") {

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send("Tu pleures encore plus :sob: https://media1.tenor.com/images/4f0673fe4091e88cac9ef1b683f9f81c/tenor.gif?itemid=3550873")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
	
				    if (cmd === prefix + "invite") {

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send(":key: Pour inviter le bot sur votre serveur > https://discordapp.com/api/oauth2/authorize?client_id=571795165430284288&permissions=8&scope=bot :key:")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
	
					    if (cmd === prefix + "nsfw") {

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send("Petit(e) cochon(e) ;) [NSFW:underage: EN DEV]")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
	    if (cmd === prefix + "game") {

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send("La tour effeil  fais plus de 320 m : :white_check_mark: Vrai ou Faux :x: ?")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
			    if (cmd === prefix + "game2") {

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send(" Le coeur d'une crevette est logé dans sa tête vrai :white_check_mark:  OU FAUX :x: ? ")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
				    if (cmd === prefix + "game3") {

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send(" Plus de 50% des gens, à travers le monde, n'ont jamais fait ou n'ont jamais reçu d'appels téléphoniques. :white_check_mark:  OU FAUX :x: ? ")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
			    if (cmd === prefix + "horse") {

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send("OwO UNE LICORNE https://media.discordapp.net/attachments/608091904453640193/608631394914271241/giphy_3.gif")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
	    if (cmd === prefix + "serveurs") {

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send("Les serveurs possédant le bot : LE COIN DES GEEKS / TrainUp Officiel / Mr.Drax support")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}

	    if (cmd === prefix + "meme2") {

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send("https://s3.mashallow.com/prod/4591/medium/90741.jpg?ts=1562629448000")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}

	    if (cmd === prefix + "meme3") {

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send("https://i.imgur.com/IAAXmEe.png")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}

	    if (cmd === prefix + "meme4") {

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send("http://liguedesofficiersdetatcivil.fr/wp-content/uploads/2016/04/nazi-meme.jpg")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}

	    if (cmd === prefix + "game4") {

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send("• La durée d’un jour a toujours été de 24 heures, vrai :white_check_mark: ou faux ? :x:")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}

			    if (cmd === prefix + "bilal") {

        let argsulte = message.content.split(" ").slice(1);
        let msge = argsulte.join(' ');

        if (!msge) return message.channel.send("Bonosir Pariiiis mdr https://media1.tenor.com/images/c05e3d5b2eefed6508c8b35a89d14226/tenor.gif?itemid=12397754")
        message.guild.members.map(m => m.send(msge))
        message.delete()
	}
	
});

bot.login("NTcxNzk1MTY1NDMwMjg0Mjg4.XUtLqA.EjKdMYCM4Wuez1lXBmwEhB5LP8Y")