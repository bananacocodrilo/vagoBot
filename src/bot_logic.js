const Yeelight = require('yeelight2');

let bot = new TelegramBot(token, { polling: true });
let lights = {};

Yeelight.discover(function(light) {
    let key = light.name ? light.name : light.id;
    lights[key] = light;
    console.log('New bulb found:', key);

});


module.exports = function() {

    function toggle(msg) {

        let response = 'Toggle: ';
        let list = msg.text.substr(8).split(' ');


        console.log(list.length);
        console.log(list);

        if (!list[0].length) {
            list = Object.keys(lights);
            // console.log('entra');
            // console.log(list);

        }

        list.forEach(function(bulb) {
            if (lights.hasOwnProperty(bulb)) {
                lights[bulb].toggle();
                response += bulb + ' ';
            }
        });

        return response;
    }

}
