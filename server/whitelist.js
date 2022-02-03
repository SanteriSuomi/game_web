const express = require("express");
const db = require("./db");
const middleware = require("./middleware");

const router = express.Router();

router.get("/whitelist", middleware.verify, async (req, res) => {
	try {
		let result = await db.query("SELECT * FROM whitelist;");
		if (result.success > 0) {
			result.data = result.data.rows;
			return res.status(200).send(result);
		} else {
			return res.status(400).res.send(result);
		}
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
