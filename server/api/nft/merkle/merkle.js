const express = require("express");
const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
const middleware = require("../../../middleware/middleware");
const db = require("../../../db/db");
const web3 = require("web3");
const utils = require("../../../utils/utils");

const router = express.Router();

// Update merkle tree from database once on server startup
updateMerkle();

var merkleTree = null;

async function updateMerkle(query) {
	try {
		let newQuery =
			query || (await db.query("SELECT * FROM whitelist_nft;"));
		const leaves = newQuery.data.rows.map((row) => keccak256(row.address));
		merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true });
	} catch (error) {
		console.log(error);
	}
}

router.put("/merkle", middleware.verify, async (_, res) => {
	let result = Object.create(utils.returnResult);
	try {
		let query = await db.query("SELECT * FROM whitelist_nft;");
		if (query.success && query.data.rows.length === 0) {
			result.success = false;
			result.reason = "No whitelisted addresses";
			return res.status(404).send(result);
		} else {
			await updateMerkle(query);
			result.success = true;
			return res.status(201).send(result);
		}
	} catch (error) {
		console.log(error);
	}
	result.reason = "Couldn't update merkle tree";
	return res.status(500).send(result);
});

router.get("/merkle", middleware.verify, async (req, res) => {
	let result = Object.create(utils.returnResult);
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
		if (merkleTree === null) {
			result.reason = "Merkle tree has not been generated";
			return res.status(500).send(result);
		}
		result.success = true;
		result.data = merkleTree.getHexProof(keccak256(address));
		return res.status(200).send(result);
	} catch (error) {
		console.log(error);
	}
	result.reason = "Couldn't retrieve proof";
	return res.status(500).send(result);
});

module.exports = {
	router: router,
	updateMerkle: updateMerkle,
};
