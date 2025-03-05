const multer = require("multer");
const path = require("path");

// Configure Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // Ensure 'uploads' folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

// File Filter (Optional) - Allow only images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

// Multer Middleware
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter,
});

module.exports = upload;
