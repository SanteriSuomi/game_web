const jwt = require("jsonwebtoken");
const utils = require("../utils/utils");

module.exports = {
	verify: async (req, res, next) => {
		let result = Object.create(utils.returnResult);
		try {
			const { token, master } = req.body;
			if (!token && !master) {
				result.reason = "Not authorized";
				return res.status(403).send(result);
			}
			if (token) {
				req.user = jwt.verify(token, process.env.TOKEN_KEY);
			} else if (master !== process.env.MASTER_ACCESS_TOKEN) {
				result.reason = "Invalid master access token";
				return res.status(401).send(result);
			}
		} catch (error) {
			console.log(error);
			result.reason = "Invalid access token";
			return res.status(401).send(result);
		}
		return next();
	},
};
