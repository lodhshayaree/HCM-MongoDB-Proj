const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    console.log('MONGO_URI:', mongoUri); // Log the MONGO_URI value

    if (!mongoUri) {
      throw new Error('MONGO_URI is not defined in the environment variables.');
    }

    await mongoose.connect(mongoUri);

    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
