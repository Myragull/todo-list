import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

function App() {
  const [title, settitle] = useState("");
  const [todos, settodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newtodo = {
      id: nanoid(),
      title: title,
      completed: false,
    };
    settodos([...todos, newtodo]);
    settitle("");
  };

  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    settodos(updatedTodos);
  };

  const handlerDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    settodos(filteredTodos);
  };

  return (
    <div className="main-container">
      <div className="content-container">
        <h1>To-Do List</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="user-input"
            type="text"
            value={title}
            placeholder="Add a new task"
            onChange={(e) => settitle(e.target.value)}
          />
          <button className="add-btn" type="submit">
            Add
          </button>
        </form>
        {
          <ul className="todo-container">
            {todos.map((todo) => {
              return (
                <li className="list-li" key={todo.id}>
                  <div className="todo-item">
                  <label>
                    <input
                       className="checkbox"
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleToggle(todo.id)}
                    />
                    <span
                      className={
                        todo.completed ? "todo-text completed" : "todo-text"
                      }
                    >
                      {todo.title}
                    </span>
                  </label>

                  <button
                    className="delete-button"
                    onClick={() => handlerDelete(todo.id)}
                  >
                    Delete
                  </button>
                  </div>
                </li>
              );
            })}
          </ul>
        }
      </div>
    </div>
  );
}

export default App;
