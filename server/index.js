const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();

/**
 * Use cross-origin resource sharing
 */
app.use(cors());
/**
 * Deliver frontend
 */
app.use(express.static(path.resolve(__dirname, "../client/build")));
/**
 * Deliver static files (NFT images etc)
 */
app.use(express.static(path.resolve(__dirname, "../public")));
/**
 * Parse JSON in a request body
 */
app.use(bodyParser.json());

/**
 *	Start server by listening to a specific port, which is injected from environment (or default is used).
 */
app.listen(PORT, () => {
	console.log(`Server listening to ${PORT}`);
});

app.get("/api", (req, res) => {
	res.send("Hello World");
});

/**
 * Send front-end instead if API is not accessed, to allow frontend and back-end to co-exist
 */
app.get("*", (_, res) => {
	res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
