const Pool = require("pg-pool");

const getWhitelistedAddressesQuery = "SELECT * FROM whitelist;";
const saveWhitelistedAddress = "INSERT INTO whitelist(address) VALUES ('$1');";

class DB {
	constructor() {
		this.pool = new Pool({
			connectionString: process.env.DATABASE_URL,
			ssl: {
				rejectUnauthorized: false,
			},
			max: 15,
		});
	}

	async getWhitelistedAddresses() {
		try {
			const res = await this.pool.query(getWhitelistedAddressesQuery);
			return res.rows.map((row) => row.address);
		} catch (error) {
			console.log(error);
		}
	}

	// async saveWhitelistedAddress(address) {
	// 	try {
	// 		const res = await this.pool.query(saveWhitelistedAddress, address);
	// 		return res.rows.map((row) => row.address);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }
}

module.exports = new DB();
