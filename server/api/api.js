const express = require("express");
const user = require("./user/user");
const nft = require("./nft/nft");

const router = express.Router();

router.use("/", user);
router.use("/", nft);

module.exports = router;
