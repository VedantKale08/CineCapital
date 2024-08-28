const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = async () => {
  try {
    const MONGOURI = process.env.MONGOURI;
    mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;
    db.once("open", function () {
      console.log("Connected to MongoDB");
    });
  } catch (error) {
    console.log("Connection error: " + error);
    process.exit();
  }
};

module.exports = connectDatabase;
