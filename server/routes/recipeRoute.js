const router = require("express").Router();
const { getRecipes } = require("./controllers/recipeController");

router.get("/", getRecipes);

module.exports = router;
