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

//Schemas Knight
const knightSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nickname: String,
  birthday: String,
  class: {
    type: String,
    required: true,
  },
  weapons: [
    {
      name: String,
      mod: Number,
      attr: String,
      equipped: Boolean,
    },
  ],
  attributes: {
    strength: {
      type: Number,
      min: 0,
      max: 20,
    },
    dexterity: {
      type: Number,
      min: 0,
      max: 20,
    },
    constitution: {
      type: Number,
      min: 0,
      max: 20,
    },
    intelligence: {
      type: Number,
      min: 0,
      max: 20,
    },
    wisdom: {
      type: Number,
      min: 0,
      max: 20,
    },
    charisma: {
      type: Number,
      min: 0,
      max: 20,
    },
  },
  keyAttribute: {
    type: String,
    enum: [
      "strength",
      "dexterity",
      "constitution",
      "intelligence",
      "wisdom",
      "charisma",
    ],
  },
  exp: Number,
});

const Knight = mongoose.model("Knight", knightSchema);

module.exports = Knight;
