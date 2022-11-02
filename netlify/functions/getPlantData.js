


const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

export const handler = async (event) => {
    try {
        // get query parameters
        const plantKey = event.queryStringParameters["plant"];
        const fromDate = new Date( event.queryStringParameters["fromDate"] );

        // build aggregae pipeline
        var aggregatePipeline = [
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
        ];

        if( plantKey ){
            aggregatePipeline = [
                {
                    "$match": {
                        "plant": plantKey
                    }
                },
                ...aggregatePipeline
            ]
        }
        if( fromDate ){
            aggregatePipeline = [
                {
                    "$match": {
                        "date": { "$gt": fromDate }
                    }
                },
                ...aggregatePipeline
            ]
        }

        // query database
        const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
        const collection = database.collection(process.env.MONGODB_COLLECTION);
        const results = await collection.aggregate(aggregatePipeline).limit(10).toArray();

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
