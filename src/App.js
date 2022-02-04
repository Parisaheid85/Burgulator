import "./App.css";
import { useState } from "react";
import Reset from "./Reset";
import Burger from "./Burger";
import IngredientsMenu from "./IngredientsMenu";

function App() {
  let [cheesyLabel, setCheesyLabel] = useState("");
  let [ingredients, setIngredients] = useState([]);

  const add = (ingredientName) => {
    return () => setIngredients([ingredientName, ...ingredients]);
  };

  const remove = (targetIdx) => {
    setIngredients(ingredients.filter((ing, idx) => idx !== targetIdx));
  };

  const isDisabled = ingredients.filter((ing) => ing === "cheese").length >= 6;

  const reset = () => {
    ingredients = [];
    setIngredients(ingredients);
  };

  const burgerName = (ingredients) => {
    let buegerName = ingredients.filter((ing) => ing === "cheese").length;
    return `${buegerName}cheese`;
  };
  if (burgerName === 2) {
    setCheesyLabel("Double Cheese");
  } else if (burgerName === 3) {
    setCheesyLabel("Triple Cheese");
  } else if (burgerName === 4) {
    setCheesyLabel("Quadruple Cheese");
  } else if (burgerName === 5) {
    setCheesyLabel("Quintuple Cheese");
  } else if (burgerName === 6) {
    setCheesyLabel("Maximum Cheese");
  }

  // const handleAddBun = () => {
  //   ingredients = ["bun", "bun", "bun", "bun", "bun", "bun", "bun"];
  //   setIngredients(ingredients);

  return (
    <div className="App">
      <Reset reset={reset} />
      <IngredientsMenu onAdd={add} cheesyLabel={cheesyLabel} />
      <section className="burger-wrapper">
        <h1>Burger</h1>
        <Burger ingredients={ingredients} onRemove={remove} />
      </section>
    </div>
  );
}

export default App;
