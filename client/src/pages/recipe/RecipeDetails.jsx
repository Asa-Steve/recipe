import "./RecipeDetails.scss";

const RecipeDetails = () => {
  return (
    <>
      <section className="details">
        <div className="container">
          <div className="breadcrumb">Home/ Thai special</div>
          <div className="main_section">
            <div className="left">
              <img src="../imgs/img/d22.jpg" alt="" />
            </div>
            <div className="right">
              <div className="recipe_title">
                <h1>Thai Special </h1>
                <div className="tag">
                  <img src="../imgs/tag.png" alt="" />
                  <span>Chinese</span>
                </div>
              </div>
              <h3>Cooking Instructions</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
                sit autem deleniti accusamus eveniet amet dignissimos, doloribus
                ullam veritatis incidunt explicabo rerum excepturi alias, sed
                molestias, adipisci porro error nemo possimus nisi est non
                nulla? Accusamus, qui distinctio. Veritatis, omnis. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Atque sit autem
                deleniti accusamus eveniet amet dignissimos, doloribus ullam
                veritatis incidunt explicabo rerum excepturi alias, sed
                molestias, adipisci porro error nemo possimus nisi est non
                nulla? Accusamus, qui distinctio. Veritatis, omnis. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Atque sit autem
                deleniti accusamus eveniet amet dignissimos, doloribus ullam
                veritatis incidunt explicabo rerum excepturi alias, sed
                molestias, adipisci porro error nemo possimus nisi est non
                nulla? Accusamus, qui distinctio. Veritatis, omnis. Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Atque sit autem
                deleniti accusamus eveniet amet dignissimos, doloribus ullam
                veritatis incidunt explicabo rerum excepturi alias, sed
                molestias, adipisci porro error nemo possimus nisi est non
                nulla? Accusamus, qui distinctio. Veritatis, omnis.
              </p>

              <span className="source">
                Source : <em>https://www.google.com/search</em>
              </span>

              <div className="ingredients">
                <h3>Ingredients</h3>
                <div>
                  <li>1 x 227g tin of pineapple in natural juice</li>
                  <li>1 x 227g tin of pineapple in natural juice</li>
                  <li>1 x 227g tin of pineapple in natural juice</li>
                  <li>1 x 227g tin of pineapple in natural juice</li>
                  <li>1 x 227g tin of pineapple in natural juice</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecipeDetails;
