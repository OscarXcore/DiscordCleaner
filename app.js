const Eris = require('eris');
let Client = new Eris(process.argv[2]);
Client.on('ready', () => { /*
    let channel = Client.getChannel(process.argv[3]);
    let messages = channel.getMessages(10000);
    let counter = 0;
    messages.then(() => {
        messages.then((array) => {
            array.forEach((item) => {
                setTimeout(() => {
                    item.delete().then(() => { counter++; console.log(`Deleted ${counter} message(s).`); });
                }, 750);
            });
        });
    });*/
});
Client.connect();

Client.on('messageCreate', (message) => {
    if (message.author == Client.user && (message.content == "|Clear|" || "|clear|")) {
        message.channel.getMessages(10000).then((array) => {
            if (array.length != 0) {
                array.forEach((item) => {
                    setTimeout(() => {
                        message.channel.deleteMessage(item.id);
                    }, 500);
                });
            } else {
                console.log("Done.");
            }
        }).catch((error) => {
            console.log(error);
        })
    }
});