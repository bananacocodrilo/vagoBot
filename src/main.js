const TelegramBot = require('node-telegram-bot-api');
let token = '279911010:AAHehLfG-zmftpKCs4ctZtsIe8CB6wbG09M';
let logic = require("./bot_logic.js");

bot.onText(/\/toggle()/, function(msg, match) {
    let chatId = msg.chat.id;
    let response = logic.toggle(msg);

    bot.sendMessage(chatId, response);

});
