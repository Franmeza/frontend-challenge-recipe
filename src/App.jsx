const subtitles = {
  style: "mb-5 font-bold text-2xl",
};
const sections = {
  style: "text-left my-6",
};

function App() {
  return (
    <>
      <main className="container max-w-3xl  mx-auto bg-white rounded-xl mt-10 mb-10">
        <div className="flex flex-col p-6 ">
          <header>
            <img src="./src/assets/images/image-omelette.jpeg" alt="omelette" />
          </header>
          <div className="">
            <h1 className="text-3xl text-start mt-6">Simple Omelette Recipe</h1>

            <p className="text-start mt-6">
              An easy and quick dish, perfect for any meal. This classic
              omelette combines beaten eggs cooked to perfection, optionally
              filled with your choice of cheese, vegetables, or meats.
            </p>
          </div>
          <div className="bg-rose-100 p-5 text-left mt-6">
            <h3 className=" my-2 font-semibold text-dark-raspberry">
              Preparation time
            </h3>
            <ul className="list-disc list-inside">
              <li>
                <strong>Total:</strong> Approximately 10 minutes
              </li>
              <li>
                {" "}
                <strong>Preparation:</strong> 5 minutes
              </li>
              <li>
                <strong>Cooking:</strong> 5 minutes
              </li>
            </ul>
          </div>
          <div className={sections.style}>
            <h2 className={subtitles.style}>Ingredients</h2>
            <ul className="list-disc   list-inside">
              <li>2-3 large eggs </li>
              <li>Salt, to taste</li>
              <li>Pepper, to taste</li>
              <li>1 tablespoon of butter or oil</li>
              <li>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </li>
            </ul>
          </div>
          <hr />
          <div className={sections.style}>
            <h2 className={subtitles.style}>Instructions</h2>
            <ul className="list-decimal list-inside">
              <li>
                <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a
                pinch of salt and pepper until they are well mixed. You can add
                a tablespoon of water or milk for a fluffier texture.
              </li>
              <li>
                <strong>Heat the pan:</strong> Place a non-stick frying pan over
                medium heat and add butter or oil.
              </li>
              <li>
                <strong>Cook the omelette:</strong> Once the butter is melted
                and bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </li>
              <li>
                <strong>Add fillings (optional):</strong>When the eggs begin to
                set at the edges but are still slightly runny in the middle,
                sprinkle your chosen fillings over one half of the omelette.
              </li>
              <li>
                <strong> Fold and serve:</strong> As the omelette continues to
                cook, carefully lift one edge and fold it over the fillings. Let
                it cook for another minute, then slide it onto a plate.
              </li>
              <li>
                <strong>Enjoy:</strong> Serve hot, with additional salt and
                pepper if needed.
              </li>
            </ul>
          </div>
          <div>
            <h2 className={subtitles.style}>Nutrition </h2>
            <p>
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>{" "}
            <table className="min-w-full mt-3 indent-5">
              <tbody>
                <tr className="border-b">
                  <td>Calories</td>
                  <td>277kcal</td>
                </tr>
                <tr className="border-b">
                  <td>Carbs</td>
                  <td>0g</td>
                </tr>
                <tr className="border-b">
                  <td>Protein</td>
                  <td>20g</td>
                </tr>
                <tr>
                  <td>Fat</td>
                  <td>22g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <footer>
        <div className="text-center text-xs">
          Challenge by{" "}
          <a
            className="text-blue-700"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a className="text-blue-700" href="#">
            Francisco Meza
          </a>
          .
        </div>
      </footer>
    </>
  );
}

export default App;
