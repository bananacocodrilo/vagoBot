const Yeelight = require('yeelight2');
let lights = {};
let defaultLight = "";

Yeelight.discover(function(light) {
    let key = light.name ? light.name : light.id;
    lights[key] = light;
    console.log('New bulb found:', key);
});


module.exports.toggle = function(msg) {
    let response = 'Toggle: ';
    let list = msg.text.substr(8).split(' ');

    if (!list[0].length) {
        if (defaultLight != "") {
            list = [defaultLight]
        } else {
            list = Object.keys(lights);
        }
    }

    list.forEach(function(bulb) {
        if (lights.hasOwnProperty(bulb)) {
            lights[bulb].toggle();
            response += bulb + ' ';
        }
    });

    return response;
}

module.exports.setDefault = function(msg) {
    let okRes = "Changed default bulb to ";
    let koRes = "Unknown bulb";
    let name = msg.text.substr(12).split(' ')[0];

    if (lights.hasOwnProperty(name)) {
        defaultLight = name;
        return okRes + name;
    } else {
        return koRes;
    }
}


module.exports.sunrise = function(msg) {

}
