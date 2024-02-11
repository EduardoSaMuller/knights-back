const mongoose = require('mongoose');

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

  module.exports = mongoose.model('Knight', knightSchema);