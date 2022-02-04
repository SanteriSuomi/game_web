require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const api = require("./api");
const merkle = require("./merkle");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.static(path.resolve(__dirname, "../public")));

const PORT = process.env.PORT || 3001;

app.listen(PORT, async () => {
	console.log(`Server listening to ${PORT}`);
	await merkle.updateMerkle();
});

app.get("/", async (_, res) => {
	res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.get("/mint", async (_, res) => {
	res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.use("/api", api);

app.get("*", async (_, res) => {
	res.sendFile(path.resolve(__dirname, "../client/public", "error.html"));
});

module.exports = app;
