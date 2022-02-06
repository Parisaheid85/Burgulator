const Burger = ({ ingredients, remove }) => {
  return (
    <>
      <div className="top-bun">bun</div>
      {ingredients.map((ing, index) => (
        <div
          key={index}
          onClick={() => remove(index)}
          className={`ingredients ${ing}`}
        >
          {ing}
        </div>
      ))}
      <div className="bottom-bun">bun</div>
    </>
  );
};

export default Burger;
