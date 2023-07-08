import { useState } from "react";
import NewItem from "./NewItem";
import { nanoid } from "nanoid";
function Item({ toast }) {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (item) {
      const itemObj = { id: nanoid(), item };
      setNewItem((item) => [...item, itemObj]);
      setItem("");
      toast.success("Item has been added to the list");
    } else {
      toast.error("You need to fill item first");
    }
  };
  const handleDelete = (index) => {
    let refactoredItem = newItem.filter((item, i) => i !== index);
    setNewItem(refactoredItem);
    toast.success("Item is deleted");
  };
  return (
    <article>
      <h4 className="grocery-Bud">grocery bud</h4>
      <form onSubmit={handleSubmit}>
        <div className="header">
          <input
            type="text"
            name="text"
            id="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button type="submit">add item</button>
        </div>
      </form>
      {newItem.map((items, index) => {
        return (
          <NewItem
            key={items.id}
            {...items}
            index={index}
            handleDelete={handleDelete}
          />
        );
      })}
    </article>
  );
}

export default Item;
