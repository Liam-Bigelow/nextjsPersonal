


const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

export const handler = async (event) => {
    try {

        // make sure a body was provided
        if( !event.body ){
            throw new Error( "missing request body" );
        }
        const body = JSON.parse( event.body );

        console.log( body );

        // get query parameters
        const currentDate = new Date();
        const moisture = parseFloat( body["moisture"] );
        const humidity = parseFloat( body["humidity"] );
        const temperature = parseFloat( body["temperature"] );
        const plant = body["plant"];

        // build document to insert
        const newDoc = {
            date: currentDate,
            moisture,
            humidity,
            temperature,
            plant
        }

        // query database
        const database = (await clientPromise).db(process.env.READS_DATABASE);
        const collection = database.collection(process.env.READS_COLLECTION);
        const results = await collection.insertOne(newDoc);

        // return standard http response
        return {
            statusCode: 200,
            body: JSON.stringify(results),
        }
    } catch (error) {
        console.error( error );
        return { statusCode: 500, body: error.toString() }
    }
}
