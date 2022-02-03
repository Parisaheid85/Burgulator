import { useState } from "react";
import "./App.css";

import TopNav from "./TopNav";
import Burger from "./Burger";
import IngredientsMenu from "./IngredientsMenu";

function App() {
  // const [age, setAge] = useState({});
  // const [numberOfChildren, setNumberOfChildren] = useState(1);
  // const handleGetOld = () => {
  //   setAge(age + 1);
  // };
  // return (
  //   <div className="App">
  //     <h1>I am {age} years old</h1>
  //     <button> onClick={handleGetOld}get old</button>

  //     <h1>I have {numberOfChildren} kids</h1>

  //     <button onClick={() => setNumberOfChildren(numberOfChildren + 1)}>
  //       have more kids
  //       </button>
  //     </div>
  //   );
  // }

  // export default App;
  let [cheesyLabel, setCheesyLabel] = useState();
  let [ingredients, setIngredients] = useState([
    // {id: 5, name: 'tomato'}
    // {id: 7, name: 'cheese"'}
  ]);
  const handleAddTomato = () => {
    //ingredients.push
    setIngredients(["tomato", ...ingredients]); // shallow clone
  };
  const add = (ingredientName) => {
    return () => setIngredients([ingredientName, ...ingredients]); // return () willl return function so we removed ()=> from line 51-53
  };
  const remove = (targetIdx) => {
    // cant use e.target cause we dont have access to index with e.target

    setIngredients(ingredients.filter((ing, idx) => idx !== targetIdx));
  };

  const reset = () => {
    const newIngridients = [];
    setIngredients(newIngridients);
  };

  const handleAddCheese = () => {
    const newIngredients = [...ingredients];
    const burgerName = newIngredients.filter((ing) => ing === "cheese").length;
    const isDisabled = burgerName > 6;
    if (burgerName == 2) {
      setCheesyLabel("Double Cheese");
    } else if (burgerName === 3) {
      setCheesyLabel("Triple Cheese");
    } else if (burgerName === 4) {
      setCheesyLabel("Quadruple Cheese");
    } else if (burgerName === 5) {
      setCheesyLabel("Quintuple Cheese");
    } else if (burgerName === 6) {
      setCheesyLabel("Maximum Cheese");
    } else (burgerName > 6) {
      setCheesyLabel(isDisabled)
    }
  };
  

  const handleAddBun = () => {
    const newIngredients = ["bun" , "bun", "bun", "bun" , "bun", "bun", "bun"]
  }
  // const isDisabled = handleAddCheese() > 6;
  return (
    <div className="App">
      <TopNav reset={reset} />
      <IngredientsMenu
        onAdd={add}
        cheesyLabel={cheesyLabel}
        // isDisabled={isDisabled}
      />

      <section className="burger-wrapper">
        <h1>burger</h1>
        <Burger ingredients={ingredients} onRemove={remove} />
      </section>
    </div>
  );
}
export default App;

// function add(a,b) {
//  return a + b
// }

// btn.addEventListener.('click',() => add(1,2) )
