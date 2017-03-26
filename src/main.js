const Yeelight = require('yeelight2');
const TelegramBot = require('node-telegram-bot-api');

let token = '279911010:AAHehLfG-zmftpKCs4ctZtsIe8CB6wbG09M';
let lights = {};
var bot = new TelegramBot(token, { polling: true });

Yeelight.discover(function(light) {
    let key = light.name ? light.name : light.id;
    lights[key] = light;
    console.log('New bulb found:', key);

});



bot.onText(/\/toggle()/, function(msg, match) {
    let chatId = msg.chat.id;
    let response = 'Toggle: ';
    let list = msg.text.substr(8).split(' ');


    console.log(list.length);
    console.log(list);

    if (!list[0].length) {
        list = Object.keys(lights);
        console.log('entra');
        console.log(list);

    }


    // else {
    //     for (var bulb in lights) {

    //         if (lights.hasOwnProperty(bulb)) {
    //             lights[bulb].toggle();
    //             response += bulb + ' ';
    //         }
    //     }
    // }
    list.forEach(function(bulb) {
        if (lights.hasOwnProperty(bulb)) {
            lights[bulb].toggle();
            response += bulb + ' ';
        }
    });


    bot.sendMessage(chatId, response);
});
