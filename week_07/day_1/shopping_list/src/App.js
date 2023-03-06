import "./App.css";
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { name: "Bread", isPurchased: false },
    { name: "Cheese", isPurchased: true },
    { name: "Jalapenos", isPurchased: false },
  ]);
  const [newItemName, setNewItemName] = useState("");

  function saveNewItem(event) {
    event.preventDefault();
    const newItem = {
      name: newItemName,
      isPurchased: false,
    };
    setItems([...items, newItem]);
    setNewItemName("");
  }

  function handleInputChange(event) {
    setNewItemName(event.target.value);
  }

  function purchaseItem(index) {
    const newItem = { ...items[index] };
    newItem.isPurchased = true;
    const newItems = [...items];
    newItems[index] = newItem;
    setItems(newItems);
  }

  const itemElements = items.map((item, index) => (
    <li key={index}>
      <span>{item.name}</span>
      {/* {item.isPurchased && <span>Purchased</span>} */}
      {item.isPurchased ? (
        <span>Purchased</span>
      ) : (
        <button onClick={() => purchaseItem(index)}>Purchase</button>
      )}
    </li>
  ));

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <hr></hr>

      <ul>{itemElements}</ul>

      <form onSubmit={saveNewItem}>
        <label htmlFor="item-name">Add new item:</label>
        <input
          id="item-name"
          type="text"
          onChange={handleInputChange}
          value={newItemName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
