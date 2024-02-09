import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
// import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";
import { createSlice } from "@reduxjs/toolkit"



export const getInitialStateAsync = createAsyncThunk('todo/getIntialState', 
    // (arg, thunkAPI) => {
    //     axios.get("https://dummyjson.com/todos")
    //         .then(res => {
    //         console.log(res.data);
    //         // dispatch(todoActions.initialState(res.data))
    //         thunkAPI.dispatch(todoActions.initialState(res.data))
    //   })
    // }

    () => {
        return axios.get('https://dummyjson.com/todos');
    }
)


//post todo in API
export const addTodoAsync = createAsyncThunk("todo/addTodo", async(payload) => {
    const response = await fetch('https://dummyjson.com/todos', {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify({
                id: Math.random(),
                todo: payload,
                completed: false,
                userId: Math.random(),
        })
    });
    return response.json();
})


const initialState={
    todos:[
        {id: 0, todo:"Go to Gym at 6", completed: false, userId: 80},
       
    ]
}

//Creating Reducer by REDUX-TOOLKIT (createSlice)
const todoSlice = createSlice({
    name:'todo',
    initialState: initialState,
    reducers:{
        //get the data from api and update it into the state
        initialState:(state, action) => {
            state.todos = [...action.payload];
        },

        //this is add Action
        add:(state, action) => {
            state.todos.push({
                id: Math.random(),
                todo: action.payload,
                completed: false,
                userId: Math.random(),
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
    },

    extraReducers:(builder) => {
        builder.addCase(getInitialStateAsync.fulfilled, (state, action) => {
            // console.log(action.payload.data);
            state.todos = [...action.payload.data.todos];
            // console.log("extra Reducer in Todo Reducer");
            
        })

        .addCase(addTodoAsync.fulfilled, (state, action) => {
            state.todos.push(action.payload);
        })
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