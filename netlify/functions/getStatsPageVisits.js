


const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

export const handler = async (event) => {
    try {

        // query database
        const database = (await clientPromise).db(process.env.STATS_DATABASE);
        const collection = database.collection(process.env.STATS_COLLECTION);
        const results = await collection.countDocuments({});

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
