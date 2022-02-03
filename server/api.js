const express = require("express");
const user = require("./user");
const whitelist = require("./whitelist");

const router = express.Router();

router.use("/user", user);
router.get("/whitelist", whitelist);

module.exports = router;
