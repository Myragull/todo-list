import TodoItem from "./TodoItem"

function TodoList({todos,settodos}) {
  return (
    <>
    <ul className="todo-container">
            {todos.map((todo) => (
              <TodoItem
              key={todo.id}
              todo={todo}
              todos={todos}
              settodos={settodos}
              />
            ))}
          </ul>
    </>
  )
}


export default TodoList