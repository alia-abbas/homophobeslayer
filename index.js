const key = require("./key.js");

const Discord = require("discord.js")
const client = new Discord.Client();

var termsArr = ["gay", "lesbian", "bisexual", "pansexual", "queer", "transgender", "LGBTQ+", "LGBT", "LGBTQIA+", "LGBTQ", "non-binary", "nonbinary", "intersex"];
var negArr = ["annoying", "mean", "dumb", "stupid", "stoopid", "shut up", "stfu"];
var slursArr = ["fag", "faggot", "dyke", "tranny", "trannie"];
var imgArr = [
    "https://www.pride.com/sites/default/files/2019/02/21/hilarious-gay-memes-to-distract-you-from-the-world.jpg", // the awkward moment when ur called gay
    "https://i.ytimg.com/vi/Wzs7izeHpso/maxresdefault.jpg",  // two guys kissing
    "https://media.discordapp.net/attachments/784995209104719905/785044137505849394/tumblr_omxam4GwjF1unqgduo1_500.png", // kitty
    "https://media.discordapp.net/attachments/784995209104719905/785044229746327582/tumblr_omig5aCjsH1u8y7jho1_500.png", // that gay shit me
    "https://media.discordapp.net/attachments/784995209104719905/785044451558686730/tumblr_pixlbp0KC01xix1cgo1_500.png",  // noahs ark lions
    "https://media.discordapp.net/attachments/784995209104719905/785044504335089684/tumblr_pfhb6bOXaG1v1a3zl_640.png?width=528&height=585", // are u straight or gay yes
    "https://pbs.twimg.com/media/D-GQ-vwUcAEA7zL.jpg", // spongebob is he you know
    "https://media.discordapp.net/attachments/784995209104719905/785044737605632010/tumblr_on80wmYiLt1s9c6nao1_500.png", // and yet i see straight couples like this
    "https://media.discordapp.net/attachments/784995209104719905/785045151210799114/tumblr_phzp6ecNv91ri6uqho1_500.png", // bisexuals lesbians cuffing
    "https://media.discordapp.net/attachments/784995209104719905/785044862349213696/tumblr_okhi7cB2Ck1s9c6nao1_500.png?width=442&height=585", // ariana heterosexual confusion
    "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/129625810_3639722679438330_3647579408847884347_n.jpg?_nc_cat=106&ccb=2&_nc_sid=825194&_nc_ohc=HvIrE4DzHjIAX-iRyRV&_nc_oc=AQkKEwU4vEkh58Ne5ucLCzBpJAzRzFsRIgBeE2Y6bkR1ITQZW_RnNtOiOYM9SaNEXp0Jv5K5CM5ENW6YaIsuLsbA&_nc_ht=scontent-iad3-1.xx&oh=f1e68fa0ff650ffaa69e7d47b401968f&oe=5FF1D2C7", //gays going to brunch
    ];
var msgArr = [
    "'I love gay people!' -literally everyone else but u",
    "i'm here for the gays, the girls, and the they's",
    "chad x ryan were gay lovers in high school musical 2 no I will not elaborate at this time",
    "who was your gay awakening? also stfu homophobe",
    "gaygaygaygaygaygaygaygaygaygaygaygaygaygaygaygaygay",
    "gay ? gay.",
    "Why is it that, as a culture, we are more comfortable seeing two men holding guns, than holding hands?",
    "the heterosexuals who hate us should just stop having us",
    "'If homosexuality is a disease, let's all call in queer to work: 'Hello. Can't work today, still queer.' -robin tyler",
    "silence, homophobe",
    "u r dumb"
    ]

    client.on('rateLimit', data => console.log(data));

client.on('message', async (message) => {
// make sure it doesnt repeat a loop somehow
    if (message.author.id == client.user.id) return;


// slur search
    var i;
    for (i=0; i<slursArr.length; i++) {
    if (message.cleanContent.match(slursArr[i]))
        {
        await message.reply(msgArr[Math.floor(Math.random() * 10)] + " " + imgArr[Math.floor(Math.random() * 10)]);
        await message.react('😡')
        await message.react('👊')
        await message.react('‼️')

        break;
        }
    }


// gay term + negatively connotated word
    var a;
    var b;
    for (a=0; a<termsArr.length; a++) {
        for (b=0; b<negArr.length; b++) {
            if (message.cleanContent.match(termsArr[a]) && message.cleanContent.match(negArr[b]))
            {
                message.reply(msgArr[Math.floor(Math.random() * 10)] + " " + imgArr[Math.floor(Math.random() * 10)]);
                message.react('😡');
		        message.react('👊');
                message.react('‼️');
            }
        }
    }


})

client.login(key);

/*
    // random num generator ---> Math.floor((Math.random() * 10) + 1);
    // Math.floor(Math.random() * 10);

String.match: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

Array reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    ["ping", "pang"].findIndex(test) != -1

array.find();
*/