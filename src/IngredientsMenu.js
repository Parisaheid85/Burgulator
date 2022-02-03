export default function IngredientsMenu({ onAdd, cheesyLabel, isDisabled }) {
  return (
    <section className="ingredients-menu">
      <h2>ingredients menu</h2>
      {/* <button onClick={handleAddTomato}>tomato</button> */}
      <button disabled={}isDisabled onClick={onAdd("cheese")}>Cheese</button>
      <button onClick={onAdd("tomato")}>Tomato</button>
      <button onClick={onAdd("lettuce")}>Lettuce</button>
      <button>Bun</button>
      <h3>{cheesyLabel}</h3>
    </section>
  );
}
