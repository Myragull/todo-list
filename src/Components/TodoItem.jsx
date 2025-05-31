function TodoItem({ todos, todo, settodos }) {

  const handlerDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    settodos(filteredTodos);
    
  };

  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    settodos(updatedTodos);
  };

  return (
    <>
      <li className="list-li" >
        <div className="todo-item">
          <label>
            <input
              className="checkbox"
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
            />
            <span
              className={todo.completed ? "todo-text completed" : "todo-text"}
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
    </>
  );
}

export default TodoItem;
