import { useEffect, useState } from "react";
import Btn from "../../components/btn/Btn";
import Card from "../../components/card/Card";
import "./Home.scss";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";

const menuItems = [
  {
    id: 1,
    URL: "./imgs/thai-food.jpg",
    name: "Thai",
  },
  {
    id: 2,
    URL: "./imgs/american-food.jpg",
    name: "American",
  },
  {
    id: 3,
    URL: "./imgs/chinese-food.jpg",
    name: "Chinease",
  },
  {
    id: 4,
    URL: "./imgs/mexican-food.jpg",
    name: "Mexican",
  },
  {
    id: 5,
    URL: "./imgs/indian-food.jpg",
    name: "Indian",
  },
];
const latestRecipes = [
  {
    id: 1,
    URL: "./uploads/thai-red-chicken-soup.jpg",
    name: "thai red chicken soup",
  },
  {
    id: 2,
    URL: "./uploads/veggie-pad-thai.jpg",
    name: "veggie pad thai",
  },
  {
    id: 3,
    URL: "./uploads/chinese-steak-tofu-stew.jpg",
    name: "chinese steak tofu stew",
  },
  {
    id: 4,
    URL: "./uploads/southern-friend-chicken.jpg",
    name: "southern friend chicken",
  },
  {
    id: 5,
    URL: "./uploads/thai-chinese-inspired-pinch-salad.jpg",
    name: "thai chinese inspired pinch salad",
  },
];
const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fectMeals = async () => {
      try {
        const res = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?f=s"
        );
        const data = await res.json();
        setMeals(data.meals);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fectMeals();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 30000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  {
    return loading ? (
      <>
        <Loader />
      </>
    ) : (
      <>
        <section className="hero">
          <div className="container">
            <div className="left">
              <h1>Huge selection of delicious recipe ideas</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                provident repudiandae obcaecati, voluptates, nesciunt culpa,
                atque reiciendis recusandae quidem sint tempore quia minus!
                Repellat vero distinctio doloremque explicabo, eum expedita?
              </p>

              <div className="btn_grp">
                <Link>
                  <Btn text={"Explore Latest"} />
                </Link>
                <Link>
                  <Btn type={"secondary"} text={"Show Random"} />
                </Link>
              </div>
            </div>
            <div className="right">
              {/* <img src="./imgs/hero-image.png" alt="hero-image" /> */}
              <img
                className={currentImage ? "show" : null}
                src={`../imgs/img/right side/b3.png`}
              />
              <img
                className={!currentImage ? "show" : null}
                src={`../imgs/img/right side/b4.png`}
              />
            </div>
          </div>
        </section>
        <section className="menu_list">
          <div className="container">
            {menuItems.map((item) => (
              <Link key={item.id}>
                <Card imgUrl={item.URL} imgName={item.name} />
              </Link>
            ))}
            <Link>
              <Card imgUrl={"./imgs/view-all.jpg"} imgName={"View All"} />
            </Link>
          </div>
        </section>
        <section className="latest latest_recipes">
          {typeof meals === "object" && (
            <div className="container">
              <div className="top_wrap">
                <h2>Latest Recipes</h2>
                <Link>View more</Link>
              </div>
              <div className="recipes">
                {meals.slice(1, 11).map((meal) => (
                  <Link key={meal?.idMeal} to={`/recipe/${meal?.idMeal}`}>
                    <div className="recipe">
                      <Card
                        imgUrl={meal?.strMealThumb}
                        imgName={meal?.strMeal}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>
        {/* <section className="thai latest_recipes">
        <div className="container">
          <div className="top_wrap">
            <h2>Thai Recipes</h2>
            <Link>View more</Link>
          </div>
          <div className="recipes">
            {recipes.map((recipe) => (
              <Link key={recipe.id}>
                <div className="recipe">
                  <Card
                    imgUrl={`../imgs/img/d1${recipe.id}.jpg`}
                    imgName={recipe.name}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="american latest_recipes">
        <div className="container">
          <div className="top_wrap">
            <h2>American Recipes</h2>
            <Link>View more</Link>
          </div>
          <div className="recipes">
            {latestRecipes.map((recipe, idx) => (
              <Link key={recipe.id}>
                <div className="recipe">
                  <Card
                    imgUrl={`../imgs/img/d${idx + 1}.jpg`}
                    imgName={recipe.name}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mexican latest_recipes">
        <div className="container">
          <div className="top_wrap">
            <h2>Mexican Recipes</h2>
            <Link>View more</Link>
          </div>
          <div className="recipes">
            {latestRecipes.map((recipe) => (
              <Link key={recipe.id}>
                <div className="recipe">
                  <Card
                    imgUrl={`../imgs/img/d2${recipe.id}.jpg`}
                    imgName={recipe.name}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

        <section className="todo">
          <div className="container">
            <div className="left">
              <div className="txt_wrap">
                <h2>What would you like to cook?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum numquam aut nulla impedit minus iusto quaerat ut
                  beatae ratione commodi!
                </p>

                <div className="search">
                  <form action="">
                    <input type="search" name="" id="" />
                    <button>search</button>
                  </form>
                </div>
                <div className="popular_wrap">
                  <h3>Popular Searches</h3>
                  <div className="popular">
                    <div className="pop">
                      <p>Jollof Rice</p>
                    </div>
                    <div className="pop">
                      <p>Smoothie</p>
                    </div>
                    <div className="pop">
                      <p>Banana Bread</p>
                    </div>
                    <div className="pop">
                      <p>Lasagna</p>
                    </div>
                    <div className="pop">
                      <p>Pancakes</p>
                    </div>
                    <div className="pop">
                      <p>Akara</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <img src="../imgs/fr.webp" alt="" />
            </div>
          </div>
        </section>

        <section className="publish_recipe">
          <div className="container">
            <div className="img_wrap">
              <img src="./imgs/publish-recipe.png" alt="publish-recipe" />
            </div>
            <div className="txt_wrap">
              <h2>Publish your recipe for FREE today</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore, illo.
              </p>
              <Link>
                <Btn text={"Submit Recipe"} />
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default Home;
