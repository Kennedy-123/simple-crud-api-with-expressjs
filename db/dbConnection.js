const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.connectionString);
    console.log('connected');
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dbConnection;
