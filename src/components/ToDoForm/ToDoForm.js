import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {addTodo} from "../../redux/actions/todoActions";
import {todoActions} from "../../redux/reducers/todoReducer"

import "./ToDoForm.css";
import { notificationSelector, notificationReset } from "../../redux/reducers/notificationReducer";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const disptach = useDispatch();
  const message = useSelector(notificationSelector);


  //reset messege to empty again after 3 seconds
  if(message){
    setTimeout(()=>{
      disptach(notificationReset());
    }, 3000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    console.log("[LOG]: Todo-Add Action Dispatched");
    disptach(todoActions.add(todoText));
  };

  return (
    <div className="container">

      {/* for push the notification in the form container */}
      { message && <div className="alert alert-success" role="alert">
      {message}
    </div>}
    
      
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    </div>
  );
}

export default ToDoForm;