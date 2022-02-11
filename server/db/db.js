const pg = require("pg");
const utils = require("../utils/utils");

const pool = new pg.Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
	max: 15,
});

module.exports = {
	query: async (newQuery, params) => {
		let result = Object.create(utils.returnResult);
		try {
			result.data = await pool.query(newQuery, params);
		} catch (error) {
			result.success = false;
			result.reason = error.message;
			console.log(error);
		}
		return result;
	},
};
