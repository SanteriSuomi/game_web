const express = require("express");

const router = express.Router();

const levels = {
	1: {
		name: "Peasant",
		description: "A lowly peasant slime.",
		image: "http://localhost:3001/nft/1/main.png",
		rarity: "Common",
	},
	2: {
		name: "King",
		description: "A highly king slime.",
		image: "http://localhost:3001/nft/2/main.png",
		rarity: "Legendary",
	},
};

router.get("/data", async (req, res) => {
	let result = {
		success: false,
		reason: "",
		data: null,
	};
	try {
		const { level, locked } = req.query;
		if (!level || !locked) {
			result.reason = "Level or locked not provided in the query";
			return res.status(400).send(result);
		}
		let character = levels[level];
		return res.status(200).json({
			name: character.name,
			description: character.description,
			image: character.image,
			attributes: [
				{
					trait_type: "Rarity",
					value: character.rarity,
				},
				{
					trait_type: "Level",
					value: level,
				},
				{
					trait_type: "Tokens Locked",
					value: locked,
				},
			],
		});
	} catch (error) {
		console.log(error);
	}
	result.reason = "Something went wrong retrieving data";
	res.status(500).send(result);
});

module.exports = router;
