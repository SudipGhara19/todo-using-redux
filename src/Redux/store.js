import redux from "redux";
import { todoReducer } from "./Reducers/todoReducer";

export const store = redux.createStore(todoReducer);