const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const api = require("./api");
const merkle = require("./merkle");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("json spaces", 4);

app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.static(path.resolve(__dirname, "../public")));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Server listening to ${PORT}`);
	merkle.updateMerkle();
});

app.get("/", (_, res) => {
	res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.get("/mint", (_, res) => {
	res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.use("/api", api);

app.get("*", (_, res) => {
	res.sendFile(path.resolve(__dirname, "../client/public", "error.html"));
});

module.exports = app;
