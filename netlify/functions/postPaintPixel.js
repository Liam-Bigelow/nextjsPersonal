


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

        // query database
        const database = (await clientPromise).db(process.env.PAINT_DATABASE);
        const collection = database.collection(process.env.PAINT_COLLECTION);
        const results = await collection.updateOne(
            {
                x: parseInt( body.x ),
                y: parseInt( body.y ),
            },
            {
                $set: {
                    x: parseInt( body.x ),
                    y: parseInt( body.y ),
                    color: body.color
                }
            },
            {
                upsert: true,
            }
        );

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
