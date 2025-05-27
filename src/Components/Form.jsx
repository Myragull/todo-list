import { nanoid } from "nanoid";
import {useForm} from "react-hook-form"

function Form({todos,settodos}) {

  const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm();
   
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
  
  return (
    <>
    <form onSubmit={handleSubmit(onsubmit)}>
          <input
            className="user-input"
            type="text"
            placeholder="Add a new task"
            {...register("title")}
          />
          <button className="add-btn" type="submit">
            Add
          </button>
        </form>
    </>
  )
}

export default Form