const mongoose = require("mongoose");

const satelliteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  noradId: { type: Number, required: true },
  TLELine1: { type: String, required: true },
  TLELine2: { type: String, required: true },
});

const Satellite = mongoose.model("Satellite", satelliteSchema);

module.exports = Satellite;
