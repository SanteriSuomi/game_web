const express = require("express");
const whitelist = require("./whitelist");
const data = require("./data");

const router = express.Router();

router.use("/nft", whitelist);
router.use("/nft", data);

module.exports = router;
