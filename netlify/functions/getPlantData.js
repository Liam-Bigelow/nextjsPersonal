
var co = require('co');
var mongoose = require('mongoose');

let conn = null;

const uri = "mongodb+srv://sensorHub:T4fOetgmACUOjcMi@cluster0.kewxbka.mongodb.net/sensorData?retryWrites=true&w=majority";

export const handler = (event, context, callback) => {

    console.log( event );

    context.callbackWaitsForEmptyEventLoop = false;

    run()
        .then(res => {
            callback(null, res);
        })
        .catch(error => callback(error));
};

function run() {
    return co(function*() {

        if (conn == null) {
            conn = yield mongoose.createConnection(uri, {
                bufferCommands: false,
                bufferMaxEntries: 0
            });
            conn.model('reads', new mongoose.Schema({
                moisture: Number,
                humidity: Number,
                temperature: Number,
                plant: String,
                date: {
                    type: Date,
                    default: Date.now,
                    required: true
                }
            }));
        }

        const M = conn.model('reads');

        const doc = M.find();

        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        console.log( doc );


        const response = {
            statusCode: 200,
            body: JSON.stringify(doc)
        };
        return response;
    });
}