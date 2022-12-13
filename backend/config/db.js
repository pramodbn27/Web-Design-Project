require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    //accessing MONGO DB URL from dot env file
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.log(error);
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;
