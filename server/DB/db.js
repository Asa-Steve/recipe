const mongoose = require("mongoose");

// // MongoDB Connection (Optional)
const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/Recipe")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error(err));
};

module.exports = connectDB;
