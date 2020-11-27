const mongooose = require("mongoose");
const colors = require('colors');
const dotenv = require("dotenv");

dotenv.config();

// const mongoUrl = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    const conn = await mongooose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(`MongnoDB Connected at: ${conn.connection.host}`.cyan.underline.bold);
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
