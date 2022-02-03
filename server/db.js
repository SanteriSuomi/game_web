const Pool = require("pg-pool");

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: {
		rejectUnauthorized: false,
	},
	max: 15,
});

// const getWhitelistedAddressesQuery = "SELECT * FROM whitelist;";
// const saveWhitelistedAddress = "INSERT INTO whitelist(address) VALUES ('$1');";

// class DB {
// 	constructor() {
// 		this.pool = new Pool({
// 			connectionString: process.env.DATABASE_URL,
// 			ssl: {
// 				rejectUnauthorized: false,
// 			},
// 			max: 15,
// 		});
// 	}

// 	async getWhitelistedAddresses() {
// 		try {
// 			const res = await this.pool.query(getWhitelistedAddressesQuery);
// 			return res.rows.map((row) => row.address);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}

// 	// async saveWhitelistedAddress(address) {
// 	// 	try {
// 	// 		const res = await this.pool.query(saveWhitelistedAddress, address);
// 	// 		return res.rows.map((row) => row.address);
// 	// 	} catch (error) {
// 	// 		console.log(error);
// 	// 	}
// 	// }
// }

// module.exports = new DB();

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
