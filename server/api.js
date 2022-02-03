const express = require("express");
const DB = require("./db");

const router = express.Router();

router.get("/whitelist", async (req, res) => {
	let all = await DB.getWhitelistedAddresses();
	res.send(all);
});

module.exports = router;
