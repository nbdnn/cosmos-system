const mongoose = require("mongoose");

const conjunctionSchema = new mongoose.Schema({
  primaryName: { type: String, required: true },
  primaryNoradId: { type: Number, required: true },
  secondaryName: { type: String, required: true },
  secondaryNoradId: { type: Number, required: true },
  TCA: { type: Date, required: true },
  primaryDaysSinceEpoch: { type: Number, required: true },
  secondaryDaysSinceEpoch: { type: Number, required: true },
  missDistance: { type: Number, required: true },
  probabilityOfCollision: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Conjunction = mongoose.model("Conjunction", conjunctionSchema);

module.exports = Conjunction;
