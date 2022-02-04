import "./IngredientMenu.css";
export default function IngredientsMenu({ onAdd, cheesyLabel, ingredients }) {
  const isDisabled = ingredients.filter((ing) => ing === "cheese").length > 6;
  return (
    <div>
      <section className="ingredients-menu">
        <h2>ingredients menu</h2>

        <button disabled={isDisabled} onClick={onAdd("cheese")}>
          Cheese
        </button>
        <button onClick={onAdd("beef")}>Beef</button>
        <button onClick={onAdd("tomato")}>Tomato</button>
        <button onClick={onAdd("lettuce")}>Lettuce</button>
        <button onClick={onAdd("bun")}>Bun</button>
        <h3>{cheesyLabel}</h3>
      </section>
    </div>
  );
}
