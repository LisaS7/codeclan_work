import "./App.css";
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { name: "Bread", isPurchased: false },
    { name: "Cheese", isPurchased: true },
    { name: "Jalapenos", isPurchased: false },
  ]);
  const [newItemName, setNewItemName] = useState();

  const itemElements = items.map((item, index) => {
    return <li key={index}>{item.name}</li>;
  });

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
