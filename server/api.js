const express = require("express");

const router = express.Router();

router.get("/kek", (req, res) => {
	res.send("KEK");
});

module.exports = router;
