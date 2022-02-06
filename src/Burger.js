const Burger = ({ ingredients, remove }) => {
  return (
    <>
      <div className="top-bun"></div>
      {ingredients.map((ing, index) => (
        <div
          key={index}
          onClick={() => remove(index)}
          className={`ingredients ${ing}`}
        >
          {ing}
        </div>
      ))}
      <div className="bottom-bun"></div>
    </>
  );
};

export default Burger;
