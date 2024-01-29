//Action constants
export const ADD_TODO = "add todo";
export const TOGGLE_TODO = "toggle todo";


//Action Creators
export const addTodo = (text) => ({text, type: ADD_TODO});
export const toggleTodo = (index) => ({index, type: TOGGLE_TODO});