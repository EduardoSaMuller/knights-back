const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

//Conecção ao MongoDB;

mongoose.connect("mongodb://localhost:27017/knightsDB", {
  userNewParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

