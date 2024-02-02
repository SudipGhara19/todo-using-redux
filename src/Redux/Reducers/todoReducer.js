import { ADD_TODO, TOGGLE_TODO } from "../Actions/todoActions";

//creating initial state
const initialState = {
    todos: [
        {"text": "meeting at 9"},
        {"text": "office at 11"},
    ]
};


//Reducer Function
export function todoReducer(state=initialState, action){

    switch(action.type){

        case ADD_TODO:
            return{
                ...state,
                todos:[
                    ...state,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            }

        case TOGGLE_TODO:
            return{
                ...state,
                todos: state.todos.map((todo, i)=> {
                    if(i === action.index){
                        todo.completed =! todo.completed;
                    }
                    return todo;
                })
            }
        
        default:
            return state;
    }
}