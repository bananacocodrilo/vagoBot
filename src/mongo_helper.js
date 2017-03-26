// Connection URL 
let url = 'mongodb://' + process.env.MONGO_ADD + ':27017/yeeBot';
let MongoClient = require('mongodb').MongoClient;
let mongo;
MongoClient.connect(url, function(err, db) {
    mongo = db;
});


let insertBulbs = function(bulbs, callback) {
    let collection = mongo.collection('bulbs');
    // Insert some documents 
    collection.insertMany(bulbs, function(err, result) {
        console.log(err);
        callback(result);
    });
};

module.exports.insertBulbs = insertBulbs;
