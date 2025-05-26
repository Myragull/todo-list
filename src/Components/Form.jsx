import { nanoid } from "nanoid";

function Form({todos,settodos,settitle,title}) {

 const handleSubmit = (e) => {
    e.preventDefault();
    
    if(title.trim() === ""){
      return;
    }
    const newtodo = {
      id: nanoid(),
      title: title,
      completed: false,
    };
    settodos([...todos, newtodo]);
    settitle("");
  };

  return (
    <>
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
    </>
  )
}

export default Form