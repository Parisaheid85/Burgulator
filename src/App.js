import "./App.css";
import { useState } from "react";
import Reset from "./Reset";
import Burger from "./Burger";
import IngredientsMenu from "./IngredientsMenu";

function App() {
  // let [cheesyLabel, setCheesyLabel] = useState("");
  let [ingredients, setIngredients] = useState([]);

  const add = (ingredientName) => {
    return () => {
      setIngredients([ingredientName, ...ingredients]);
    };
  };

  const remove = (targetIdx) => {
    setIngredients(ingredients.filter((ing, idx) => idx !== targetIdx));
  };

  const reset = () => {
    ingredients = [];
    setIngredients(ingredients);
  };

  const handleCheesyLabel = (ingredients) => {
    const count = ingredients.filter((ing) => ing === "cheese").length;
    if (count === 2) {
      return "Double cheese";
    } else if (count === 3) {
      return "triple cheese";
    } else if (count === 4) {
      return "Quadrocheese";
    } else if (count === 5) {
      return "maximum cheese";
    }
  };

  return (
    <div className="App">
      <Reset reset={reset} />
      <IngredientsMenu
        onAdd={add}
        // cheesyLabel={cheesyLabel}
        ingredients={ingredients}
        handleCheesyLabel={handleCheesyLabel}
      />
      <section className="burger-wrapper">
        <h1>{handleCheesyLabel(ingredients)} Burger</h1>

        <Burger ingredients={ingredients} onRemove={remove} />
      </section>
    </div>
  );
}

export default App;
