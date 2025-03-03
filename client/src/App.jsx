import Header from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import RecipeDetails from "./pages/recipe/RecipeDetails";
import Submit from "./pages/submit/Submit";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="submit" element={<Submit />} />
          <Route path="contact" element={<Contact />} />
          <Route path="recipe/:recipeId" element={<RecipeDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
