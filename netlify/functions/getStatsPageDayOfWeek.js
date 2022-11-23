


const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

export const handler = async (event) => {
    try {

        var aggregatePipeline = [
            {
                $project:
                {
                    dayOfWeek: { $dayOfWeek : "$date" },
                }
            },
            {
                $group:
                {
                    _id: "$dayOfWeek",
                    count: { "$sum": 1 }
                }
            },
            { 
                $sort: 
                { 
                    "_id" :1, 
                    "count": -1 
                } 
            },
        ];

        // query database
        const database = (await clientPromise).db(process.env.STATS_DATABASE);
        const collection = database.collection(process.env.STATS_COLLECTION);
        const results = await collection.aggregate(aggregatePipeline).toArray();

        // return standard http response
        return {
            statusCode: 200,
            body: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][parseInt(results[0]._id)],
        }
    } catch (error) {
        console.error( error );
        return { statusCode: 500, body: error.toString() }
    }
}
