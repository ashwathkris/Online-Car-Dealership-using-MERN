const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var carSchema = new Schema({
  _id: { type: String },
  name: { type: String },
  price: { type: String },
  description: { type: String },
});

const cars = mongoose.model("cars", carSchema);

module.exports = cars;
