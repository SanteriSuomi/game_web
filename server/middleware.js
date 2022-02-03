const jwt = require("jsonwebtoken");

module.exports = {
	verify: async (req, res, next) => {
		try {
			const token = req.body.token;
			const master = req.body.master;
			if (!token && !master) {
				return res.status(403).send("Not authorized");
			}
			if (token) {
				req.user = jwt.verify(token, process.env.TOKEN_KEY);
			} else if (master !== process.env.MASTER_ACCESS_TOKEN) {
				return res.status(401).send("Invalid master access token");
			}
		} catch (error) {
			return res.status(401).send("Invalid access token");
		}
		return next();
	},
};
