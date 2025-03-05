import { useEffect, useState } from "react";
import "./About.scss";
import Loader from "../../components/loader/Loader";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    window.addEventListener("load", handleLoad);

    const timeout = setTimeout(() => setLoading(false), 500); // Auto-hide after 0.5s

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <section className="about">
        <div className="container">
          <div className="left">
            <div className="img_wrap">
              <img src="imgs/about_me.jpg" alt="" />
            </div>
          </div>
          <div className="right">
            <div className="txt_wrap">
              <h1>About Us</h1>
              <p>
                Welcome to <em>the Cooking Blog 🔥</em> We believe that great
                food brings people together, and we're here to make cooking
                easy, fun, and accessible for everyone.
              </p>
            </div>
            <div className="txt_wrap">
              <h2>Mission Statement</h2>
              <p>
                Our mission is to inspire home cooks of all skill levels with
                delicious, easy-to-follow recipes. Whether you're a beginner or
                an experienced chef, we provide step-by-step guides, expert
                tips, and creative meal ideas to help you bring joy to your
                kitchen.
              </p>
            </div>
            <div className="txt_wrap">
              <h2>What We Offer</h2>
              <ul>
                <li>
                  <strong>Diverse Recipes </strong>From traditional favorites to
                  modern twists, our collection has something for everyone.
                </li>
                <li>
                  <strong>Step-by-Step Guides </strong> Clear instructions and
                  tips to make cooking stress-free.
                </li>
                <li>
                  <strong>Ingredient Insights </strong> Learn about the best
                  ingredients and substitutions.
                </li>
                <li>
                  <strong>Healthy & Tasty Options </strong>Nutritious meals that
                  don’t compromise on flavor.
                </li>
              </ul>{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
