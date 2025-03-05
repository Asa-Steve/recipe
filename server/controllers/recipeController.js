const Recipe = require("../models/recipeSchema");

const getRecipes = async (req, res) => {
  try {
    const searchTerm = req.body;

    const foundRecipes = await Recipe.find({ recipeName: searchTerm });

    if (foundRecipes.length < 1)
      return res
        .status(404)
        .json({ status: "success", message: "No recipe found" });

    return res.status(200).json({ status: "success", data: foundRecipes });
  } catch (error) {
    res.status(500).json({ status: "failed", message: "unsuccesfull" });
  }
};

const getRecipe = async (req, res) => {
  try {
    const searchTerm = req.body;

    const foundRecipe = await Recipe.findOne({ recipeName: searchTerm });

    if (!foundRecipe)
      return res
        .status(404)
        .json({ status: "success", message: "No recipe found" });

    return res.status(200).json({ status: "success", data: foundRecipe });
  } catch (error) {
    res.status(500).json({ status: "failed", message: "unsuccesfull" });
  }
};

const addRecipe = async (req, res) => {
  try {
    const { recipeName, description, category } = req.body;
    const imgUrl = req.file.filename;

    const ingredients = req.body.ingredient.split(",");

    const newRecipe = new Recipe({
      recipeName,
      description,
      category,
      ingredients,
      img: imgUrl,
    });

    await newRecipe.save();
    return res
      .status(200)
      .json({ status: "success", message: "Recipe successfully added!" });
  } catch (error) {
    res.status(500).json({ status: "failed", message: "unsuccesfull" });
  }
};

module.exports = { getRecipes, addRecipe };
