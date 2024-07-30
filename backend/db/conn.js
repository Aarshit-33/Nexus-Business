const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });

const db = process.env.DATABASE;

if (!db) {
	console.error("DATABASE environment variable is not set");
	process.exit(1);
}

mongoose
	.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connection successful");
	})
	.catch((err) => {
		console.error("No connection", err);
	});
