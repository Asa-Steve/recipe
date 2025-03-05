const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  recipeName: { type: String, require: true },
  category: {
    type: String,
    require: true,
    enum: ["Nigerian", "Ghanian", "South African", "Others"],
  },

  ingredients: [{ type: String, require: true }],
  description: { type: String, require: true },
  img: { type: String, require: true },
});


module.exports = mongoose.model("Recipe", RecipeSchema);
