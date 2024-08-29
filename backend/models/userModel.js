const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mobileNo: { type: Number, required: true, unique: true },
    imageUrl: { type: String },
    clientCode: { type: String, required: true },
    investmentInterests: {
      Actors: [{ type: ObjectId, ref: "Actor" }],
      Genres: [{ type: ObjectId, ref: "Genre" }],
      languages: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
