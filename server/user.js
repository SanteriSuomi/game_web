const express = require("express");
const db = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/user/register", async (req, res) => {
	try {
		const { username, password } = req.body;
		const validate = await validateUser(username, password, res, true);
		if (!validate.success) {
			return;
		}
		let result = await db.query(
			"INSERT INTO users (username, password) VALUES ($1, $2)",
			[username, await bcrypt.hash(password, 10)]
		);
		if (!result.success) {
			return res.status(409).send(result);
		}
		return signToken(username, password, result, res);
	} catch (error) {
		console.log(error);
	}
});

router.post("/user/login", async (req, res) => {
	try {
		const { username, password } = req.body;
		const validate = await validateUser(username, password, res, false);
		if (!validate.success) {
			return;
		}
		let result = {
			success: false,
			reason: "",
			data: null,
		};
		if (await bcrypt.compare(password, validate.password)) {
			return signToken(username, password, result, res);
		}
		result.reason = "Invalid credentials";
		return res.status(400).send(result);
	} catch (error) {
		console.log(error);
	}
});

async function validateUser(username, password, res, isRegistering) {
	try {
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
			if (isRegistering) {
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
		// When user doesn't exist
		if (isRegistering) {
			validateResult.success = true;
			return validateResult;
		} else {
			result.success = false;
			result.reason = "Invalid credentials";
			result.data = null;
			res.status(400).send(result);
			return validateResult;
		}
	} catch (error) {
		console.log(error);
	}
}

function signToken(username, password, result, res) {
	jwt.sign(
		{ username: username, password: password },
		process.env.TOKEN_KEY,
		{ expiresIn: process.env.TOKEN_EXPIRY },
		(error, token) => {
			if (error) {
				console.log(error);
			}
			result.success = true;
			result.data = token;
			res.status(200).send(result);
			return result;
		}
	);
}

module.exports = router;
