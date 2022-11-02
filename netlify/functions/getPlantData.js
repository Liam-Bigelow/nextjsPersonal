


const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

export const handler = async (event) => {
    try {
        const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
        const collection = database.collection(process.env.MONGODB_COLLECTION);
        const results = await collection.aggregate([
            {
                $project:
                {
                    dateString: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
                    temp: "$temperature",
                    mois: "$moisture",
                    humi: "$humidity",
                }
            },
            {
                $group:
                {
                    _id: "$dateString",
                    date: { "$first": "$dateString" },
                    temperature: { $avg: "$temp" },
                    moisture: { $avg: "$mois" },
                    humidity: { $avg: "$humi" } ,
                }
            }
        ]).limit(10).toArray();

        return {
            statusCode: 200,
            body: JSON.stringify(results),
        }
    } catch (error) {
        console.error( error );
        return { statusCode: 500, body: error.toString() }
    }
}
