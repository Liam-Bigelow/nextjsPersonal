


const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

export const handler = async (event) => {
    try {

        // query database
        const database = (await clientPromise).db(process.env.PAINT_DATABASE);
        const collection = database.collection(process.env.PAINT_COLLECTION);
        const results = await collection.find({}).toArray();

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
