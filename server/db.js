const Pool = require("pg-pool");

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
	max: 15,
});

module.exports = {
	query: async (query, params) => {
		let result = {
			success: true,
			reason: "",
			data: null,
		};
		try {
			result.data = await pool.query(query, params);
		} catch (error) {
			result.success = false;
			result.reason = error.message;
			console.log(error);
		}
		return result;
	},
};
