import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./RecipeDetails.scss";
import Loader from "../../components/loader/Loader";

const RecipeDetails = () => {
  const [meal, setMeal] = useState(null);
  const { recipeId } = useParams();
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
        );
        const data = await response.json();
        setMeal(data.meals[0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchMeal();
  }, []);

  {
    return loading ? (
      <>
        <Loader />{" "}
      </>
    ) : !meal ? (
      <>
        <h1>No Meal Found</h1>
      </>
    ) : (
      <>
        <section className="details">
          <div className="container">
            <div className="breadcrumb">
              <Link to="/">Home</Link>{" "}
              {pathname.slice(0, pathname.lastIndexOf("/") + 1)}
              {meal.strArea}/{recipeId}
            </div>
            <div className="main_section">
              <div className="left">
                <img src={meal.strMealThumb} alt="" />
              </div>
              <div className="right">
                <div className="recipe_title">
                  <h1>{meal.strMeal}</h1>
                  <div className="tag">
                    <img src="../imgs/tag.png" alt="" />
                    <span>{meal.strArea}</span>
                  </div>
                </div>
                <h3>Cooking Instructions</h3>
                <p>{meal.strInstructions}</p>

                <span className="source">
                  Source : <em>https://www.google.com/search</em>
                </span>

                <div className="ingredients">
                  <h3>Ingredients</h3>
                  <div>
                    {Array(20)
                      .fill(0)
                      .map(
                        (_, i) =>
                          meal[`strIngredient${i}`] && (
                            <li key={i}>
                              ✓ &nbsp;
                              {meal[`strMeasure${i}`]} of{" "}
                              {meal[`strIngredient${i}`]}
                            </li>
                          )
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default RecipeDetails;
