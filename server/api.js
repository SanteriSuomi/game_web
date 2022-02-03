const express = require("express");
const db = require("./db");
const app = require("./index");
const user = require("./user");

const router = express.Router();

router.use("/user", user);

router.get("/whitelist", async (_, res) => {
	let result = await db.query("SELECT * FROM whitelist;", []);
	if (result.success > 0) {
		result.data = result.data.rows;
		res.status(200);
		res.send(result);
	} else {
		res.status(400);
		res.send(result);
	}
});

module.exports = router;
