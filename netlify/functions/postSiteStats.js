


const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

export const handler = async (event) => {
    try {

        console.log( event );

        // make sure a body was provided
        if( !event.body ){
            throw new Error( "missing request body" );
        }
        const body = JSON.parse( event.body );

        console.log( body );

        // get query parameters
        const currentDate = new Date();
        const lat = parseFloat( body.lat );
        const lng = parseFloat( body.lng );

        // build document to insert
        const newDoc = {
            date: currentDate,
            country: body.country,
            city: body.city,
            lat,
            lng,
            region: body.region,
            postal: body.postal,
            continent: body.continent,
        }

        // query database
        const database = (await clientPromise).db(process.env.STATS_DATABASE);
        const collection = database.collection(process.env.STATS_COLLECTION);
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
