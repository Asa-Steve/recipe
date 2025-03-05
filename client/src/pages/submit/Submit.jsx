import "./Submit.scss";
import Btn from "../../components/btn/Btn";
import { useEffect, useRef, useState } from "react";
import Loader from "../../components/loader/Loader";
const Submit = () => {
  const [ingredient, setIngredient] = useState([]);
  const [loading, setLoading] = useState(true);
  const ingRef = useRef();
  const [formData, setFormData] = useState({
    recipeName: "",
    description: "",
    ingredient: [],
    category: "Nigerian",
    image: "",
  });

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    window.addEventListener("load", handleLoad);

    const timeout = setTimeout(() => setLoading(false), 1000); // Auto-hide after 0.5s

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  const addIngredient = (e) => {
    e.preventDefault();
    const { value } = ingRef.current;
    if (!value) return;
    setIngredient((prevIngredients) => [...prevIngredients, value]);
    ingRef.current.value = "";
  };

  const deleteIngredient = (idx) => {
    setIngredient((prevIngredients) =>
      prevIngredients.filter((_, i) => i !== idx)
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "image"
      ? setFormData((prev) => ({ ...prev, image: e.target.files[0] }))
      : setFormData({
          ...formData,
          [name]: value,
        });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const payload = { ...formData, ingredient };

    // const payload = new FormData();
    // payload.append("recipeName", formData.recipeName);
    // payload.append("description", formData.description);
    // payload.append("category", formData.category);
    // payload.append("ingredient", ingredient);
    // payload.append("image", formData.image);

    // const response = await fetch("http://localhost:3000/api/v1/recipe", {
    //   method: "POST",
    //   body: payload,
    // });

    // const data = await response.json();
  };

  return loading ? (
    <Loader />
  ) : (
    <>
      <section className="submit">
        <div className="container">
          <div className="txt_wrap">
            <h1>Submit Your Recipe</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              doloremque id molestiae ducimus asperiores est quas autem cum in
              a?
            </p>
          </div>

          <div className="form_section">
            <form action="" onSubmit={handleSubmit}>
              <div className="row">
                <label htmlFor="recipe">Recipe Name</label>
                <input
                  type="text"
                  id="recipe"
                  name="recipeName"
                  value={formData?.recipeName || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="row">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  value={formData?.description || ""}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="row">
                <label htmlFor="ingredient">Ingredients</label>
                <span>Example: Ice</span>
                <input
                  type="text"
                  ref={ingRef}
                  id="ingredient"
                  name="ingredient"
                />
                <div className="ingredients">
                  {ingredient.map((ing, idx) => (
                    <span key={idx}>
                      {ing}{" "}
                      <span onClick={() => deleteIngredient(idx)}>❌</span>
                    </span>
                  ))}
                </div>
                <Btn text={"+ Ingredient"} handleclick={addIngredient} />
              </div>
              <div className="row">
                <label htmlFor="category">Select Category</label>
                <select
                  value={formData?.category}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      category: e.target.value,
                    }))
                  }
                >
                  <option value="Nigerian">Nigerian</option>
                  <option value="Ghanian">Ghanian</option>
                  <option value="South African">South African</option>
                </select>
              </div>
              <div className="row">
                <label htmlFor="image">Product Image</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/png, image/jpeg"
                  onChange={handleChange}
                />
              </div>
              <Btn text={"Submit Recipe"} />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Submit;
