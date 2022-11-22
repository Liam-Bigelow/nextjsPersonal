
const jwt = require("jsonwebtoken");

export const handler = async (event) => {
    const accessToken = jwt.sign({caller: "personal website"}, process.env.TOKEN_SECRET, {
		expiresIn: "24h",
	});
    return {
        statusCode: 200,
        body: JSON.stringify( accessToken )
    }
}
