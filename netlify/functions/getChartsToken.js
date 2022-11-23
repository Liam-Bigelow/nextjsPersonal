
const jwt = require("jsonwebtoken");

export const handler = async (event) => {
    console.log( "================================================");
    console.log( process.env.TOKEN_SECRET);
    const accessToken = jwt.sign({caller: "personal website"}, "topsecret", {
		expiresIn: "24h",
	});
    return {
        statusCode: 200,
        body: JSON.stringify( accessToken )
    }
}
