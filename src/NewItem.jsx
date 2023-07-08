import { useState } from "react";

function NewItem({ id, item, index, handleDelete }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const toggleCheck = (index) => {
    setSelectedIndex(index === selectedIndex ? -1 : index);
  };

  return (
    <div key={id} className="newItem">
      <input
        type="checkbox"
        name="checkbox"
        checked={index === selectedIndex}
        onChange={() => toggleCheck(index)}
      />
      <p
        style={{
          textDecorationLine: index === selectedIndex ? "line-through" : "none",
        }}
      >
        {item}
      </p>
      <button className="btn" onClick={() => handleDelete(index)}>
        delete
      </button>
    </div>
  );
}

export default NewItem;
