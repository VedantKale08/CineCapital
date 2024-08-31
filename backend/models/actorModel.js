const mongoose = require("mongoose");

const actorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nationality: { type: String },
  url: { type: String },
  industry: { type: String },
});

module.exports = mongoose.model("Actor", actorSchema);
