import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";
import {todoActions} from "../../redux/reducers/todoReducer"
import { todoSelector } from "../../redux/reducers/todoReducer";
import axios from "axios";

import "./ToDoList.css";
import { useEffect } from "react";

function ToDoList() {

  const todos=useSelector(todoSelector);
  const dispatch = useDispatch();
  // const todos= store.getState().todos;

  useEffect(() => {
    axios.get("https://dummyjson.com/todos")
      .then(res => {
        console.log(res.data);
        dispatch(todoActions.initialState(res.data))
      })
  },[])

  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{
            // console.log("[LOG]: Todo-Toggle Action Dispatched")
            dispatch(todoActions.toggle(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;