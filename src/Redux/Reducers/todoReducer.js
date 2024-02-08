import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";
import { createSlice } from "@reduxjs/toolkit"



export const getInitialStateAsync = createAsyncThunk('todo/getIntialState', 
    (arg, thunkAPI) => {
        axios.get("https://dummyjson.com/todos")
            .then(res => {
            console.log(res.data);
            // dispatch(todoActions.initialState(res.data))
            thunkAPI.dispatch(todoActions.initialState(res.data))
      })
    }
)


const initialState={
    todos:[
        {text:"Go to Gym at 6", completed: false},
        {text: "Study at 8", completed: true}
    ]
}

//Creating Reducer by REDUX-TOOLKIT (createSlice)
const todoSlice = createSlice({
    name:'todo',
    initialState: initialState,
    reducers:{
        //get the data from api and update it into the state
        initialState:(state, action) => {
            // state.todos = [...action.payload];
        },

        //this is add Action
        add:(state, action) => {
            state.todos.push({
                text: action.payload,
                completed: false,
            })
        },

        //this is toggle Action
        toggle:(state, action) => {
            state.todos.map((todo, i) => {
                if(i === action.payload){
                    todo.completed =! todo.completed;
                }
                return todo;
            })
        }
    }
})

export const todoReducer = todoSlice.reducer;

export const todoActions = todoSlice.actions;

export const todoSelector = (state) => state.todoReducer.todos;




// export function todoReducer(state=initialState, action){

//     switch(action.type){
//         case ADD_TODO:
//             return {
//                 ...state,
//                 todos:[
//                     ...state.todos,
//                     {
//                         text:action.text,
//                         completed: false
//                     }
//                 ]
//             }
//         case TOGGLE_TODO:
//             return{
//                 ...state,
//                 todos: state.todos.map((todo, i)=>{
//                     if(i===action.index){
//                         todo.completed=!todo.completed
//                     }
//                     return todo;
//                 })
//             }
//         default:
//             return state;
//     }
// }