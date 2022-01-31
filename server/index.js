const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();
const api = require("./api.js");

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.static(path.resolve(__dirname, "../public")));

app.listen(PORT, () => {
	console.log(`Server listening to ${PORT}`);
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
