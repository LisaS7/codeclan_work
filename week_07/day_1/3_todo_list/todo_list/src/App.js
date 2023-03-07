import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([
    { name: "Cook dinner", priority: false },
    { name: "Hoover", priority: true },
  ]);
  const [name, setName] = useState("");
  const [priority, setPriority] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const todoItem = {
      name: name,
      priority: priority,
    };
    setTodoList([...todoList, todoItem]);
    setName("");
  };

  const listItems = todoList.map((item, index) => {
    return (
      <li
        key={index}
        className={item.priority ? "high-priority" : "low-priority"}
      >
        {item.name}
      </li>
    );
  });

  return (
    <div className="App">
      <header>
        <h1>ToDo List</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-element"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <fieldset className="form-element">
            <legend>Priority:</legend>
            <label htmlFor="high">High</label>
            <input
              type="radio"
              id="high"
              value="true"
              name="priority"
              onChange={() => setPriority(true)}
            />
            <label htmlFor="low">Low</label>
            <input
              type="radio"
              id="low"
              value="false"
              name="priority"
              onChange={() => setPriority(false)}
            />
          </fieldset>

          <button id="save-button" className="form-element">
            Save
          </button>
        </form>
        <ul>{listItems}</ul>
      </main>
    </div>
  );
}

export default App;
