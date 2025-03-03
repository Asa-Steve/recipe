const express = require("express");
require("dotenv").config(); // Load environment variables

// MongoDB Connection
const connectDB = require("./DB/db");
connectDB();
const recipeSchema = require("./Models/recipeSchema");

const app = express();
const PORT = 3000;

// Routes
const recipeRoutes = require("./routes/recipeRoute");

const cors = require("cors");
const mongoose = require("mongoose");

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(
  cors({
    origin: "http://localhost:5173", // React frontend URL (Update in production)
    credentials: true, // Allows cookies if needed
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/recipe", recipeRoutes);

app.get("*", (req, res) => {
  res.status(404).json("Page Not Found");
});

app.listen(PORT, () => console.log(`server is up and running on port ${PORT}`));
