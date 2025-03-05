const router = require("express").Router();
const { getRecipes, addRecipe } = require("../controllers/recipeController");
const upload = require("../middleware/uploadMiddleware");

router.get("/", getRecipes);
router.post("/", upload.single("image"), addRecipe);

module.exports = router;
