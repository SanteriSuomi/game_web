const express = require("express");
const db = require("./db");
const middleware = require("./middleware");
const web3 = require("web3");
const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");

const router = express.Router();

var merkle = null;

router.get("/nft", middleware.verify, async (req, res) => {
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

router.post("/nft", middleware.verify, async (req, res) => {
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

router.put("/nft/merkle", middleware.verify, async (_, res) => {
	let result = {
		success: false,
		reason: "",
		data: null,
	};
	try {
		let query = await db.query("SELECT * FROM whitelist_nft;");
		if (query.success && query.data.rows.length === 0) {
			result.success = false;
			result.reason = "No whitelisted addresses";
			return res.status(404).send(result);
		} else {
			const leaves = query.data.rows.map((row) => keccak256(row.address));
			merkle = new MerkleTree(leaves, keccak256, { sortPairs: true });
			result.success = true;
			return res.status(201).send(result);
		}
	} catch (error) {
		console.log(error);
	}
	result.reason = "Couldn't update merkle tree";
	return res.status(500).send(result);
});

router.get("/nft/merkle", middleware.verify, async (req, res) => {
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
		if (merkle === null) {
			result.reason = "Merkle tree has not been generated";
			return res.status(500).send(result);
		}
		result.success = true;
		result.data = merkle.getHexProof(keccak256(address));
		return res.status(200).send(result);
	} catch (error) {
		console.log(error);
	}
	result.reason = "Couldn't retrieve proof";
	return res.status(500).send(result);
});

module.exports = router;
