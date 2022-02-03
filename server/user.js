const express = require("express");
const db = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/register", async (req, res) => {
	try {
		const { username, password } = req.body;
		const validate = await validateUser(username, password, res, true);
		if (!validate.success) {
			return;
		}
		let encryptedPassword = await bcrypt.hash(password, 10);
		let result = await db.query(
			"INSERT INTO users (username, password) VALUES ($1, $2)",
			[username, encryptedPassword]
		);
		if (!result.success) {
			res.status(409).send(result);
			return;
		}
		const token = jwt.sign(
			{ username: username, password: password },
			process.env.TOKEN_KEY,
			{ expiresIn: "24h" }
		);
		result.success = true;
		result.data = token;
		res.status(200).send(result);
	} catch (error) {
		console.log(error);
	}
});

router.post("/login", async (req, res) => {
	try {
		const { username, password } = req.body;
		const validate = await validateUser(username, password, res, false);
		if (!validate.success) {
			return;
		}
		let result = {
			success: true,
			reason: "",
			data: null,
		};
		if (await bcrypt.compare(password, validate.password)) {
			const token = jwt.sign(
				{ username: username, password: password },
				process.env.TOKEN_KEY,
				{ expiresIn: "24h" }
			);
			result.data = token;
			res.status(200).send(result);
			return;
		}
		result.success = false;
		res.status(400).send(result);
	} catch (error) {
		console.log(error);
	}
});

async function validateUser(username, password, res, isRegister) {
	let validateResult = {
		success: false,
		password: null,
	};
	if (!(username && password)) {
		res.status(400).send({
			success: false,
			reason: "Username or password is not valid",
			data: null,
		});
		return validateResult;
	}
	let result = await db.query("SELECT * FROM users WHERE username=$1;", [
		username,
	]);
	if (result.success && result.data.rows.length > 0) {
		if (isRegister) {
			result.success = false;
			result.reason = "This user already exists";
			result.data = null;
			res.status(409).send(result);
			return validateResult;
		} else {
			validateResult.success = true;
			validateResult.password = result.data.rows[0].password;
			return validateResult;
		}
	}
	res.status(400).send(result);
	return validateResult;
}

module.exports = router;
