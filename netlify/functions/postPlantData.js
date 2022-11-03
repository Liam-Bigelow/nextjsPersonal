


const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

export const handler = async (event) => {
    try {
        // get query parameters
        const currentDate = new Date();
        const moisture = event.queryStringParameters["moisture"];
        const humidity = event.queryStringParameters["humidity"];
        const temperature = event.queryStringParameters["temperature"];
        const plant = event.queryStringParameters["plant"];

        // build document to insert
        const newDoc = {
            date: currentDate,
            ...moisture,
            ...humidity,
            ...temperature,
            ...plant
        }

        // query database
        const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
        const collection = database.collection(process.env.MONGODB_COLLECTION);
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