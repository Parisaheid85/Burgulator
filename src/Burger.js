// dumb component
// stateless component ( we had to pass an array with "props.")
// lifting states as parent is the source of truth

export default function Burger(props) {
  return (
    <>
      {props.ingredients.map(
        (
          ing,
          idx // props added here otherwise ingridients wouldn't be defined
        ) => (
          // () => handleRemove(idx) as we put function in another function so function wouldn't be called once we click the event otherwise function will be called right a way if onClick=handleRemove(idx)
          <div
            key={idx}
            onClick={() => props.onRemove(idx)}
            className={`ingredient ${ing}`}
          >
            {ing}
          </div>
        )
      )}
    </>
  );
}

// onClick={() => handleRemove(idx)} // deleted
