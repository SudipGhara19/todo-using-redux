import { useSelector, useDispatch } from "react-redux";
// import { toggleTodo } from "../../redux/actions/todoActions";
import {getInitialStateAsync, todoActions} from "../../redux/reducers/todoReducer"
import { todoSelector } from "../../redux/reducers/todoReducer";

import "./ToDoList.css";
import { useEffect } from "react";

function ToDoList() {

  
  // const todos= store.getState().todos;
  const todos=useSelector(todoSelector);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getInitialStateAsync());
  },[]);


  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.todo}</span>
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