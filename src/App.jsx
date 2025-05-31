import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {

  const [todos, settodos] = useState([]);

  return (
    <div className="main-container">
      <div className="content-container">
        <h1>To-Do List</h1>
        
           < Form settodos={settodos}  todos={todos}/>

           <TodoList settodos={settodos}  todos={todos}/>

      </div>
    </div>
  );
}


export default App;
