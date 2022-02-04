const express = require("express");
const db = require("./db");
const middleware = require("./middleware");
const web3 = require("web3");
const merkle = require("./merkle");

const router = express.Router();

router.use("/whitelist", merkle.router);

router.get("/whitelist", middleware.verify, async (req, res) => {
	let result = {
		success: false,
		reason: "",
		data: null,
	};
	try {
		const { address } = req.query;
		if (!address) {
			result.reason = "Must give address in query";
			return res.status(400).send(result);
		}
		let query = await db.query(
			"SELECT * FROM whitelist_nft WHERE address=$1;",
			[address]
		);
		if (query.success && query.data.rows.length > 0) {
			result.success = true;
			return res.status(202).send(result);
		}
	} catch (error) {
		console.log(error);
	}
	result.reason = "Address not found";
	return res.status(404).send(result);
});

router.post("/whitelist", middleware.verify, async (req, res) => {
	let result = {
		success: false,
		reason: "",
		data: null,
	};
	try {
		const { address } = req.query;
		if (!address) {
			result.reason = "Must give address in query";
			return res.status(400).send(result);
		}
		if (!web3.utils.isAddress(address)) {
			result.reason = "This address is not a valid EVM address";
			return res.status(400).send(result);
		}
		let query = await db.query(
			"SELECT * FROM whitelist_nft WHERE address=$1;",
			[address]
		);
		if (query.success && query.data.rows.length > 0) {
			result.success = false;
			result.reason = "This address is already whitelisted";
			return res.status(409).send(result);
		}
		query = await db.query(
			"INSERT INTO whitelist_nft (address) VALUES ($1);",
			[address]
		);
		if (query.success) {
			result.success = true;
			return res.status(201).send(result);
		}
	} catch (error) {
		console.log(error);
	}
	result.reason = "Couldn't update address";
	return res.status(500).send(result);
});

module.exports = router;
