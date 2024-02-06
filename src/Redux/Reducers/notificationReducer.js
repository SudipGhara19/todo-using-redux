import { createSlice } from "@reduxjs/toolkit"
import { todoActions } from "./todoReducer";
import {noteActions}  from "./noteReducer";

 const initialState = {
    message:""
 }

 const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers:{
        reset:(state, action) => {
            state.message = "";
        }
    },
    // extraReducers:{
    //     "todo/add":(state,action) => {
    //         state.message = "New Todo is craeted !";
    //     },
    // }

    //USING BUILDER 
    // extraReducers:(builder) => {
    //     builder.addCase(todoActions.add, (state, action) => {
    //         state.message = "New Todo added !";
    //     })
    // }


    //map objects: [key]: value
    extraReducers:{
        [todoActions.add]: (state, action) => {
            state.message = "New Todo Added!"
        },

        [noteActions.add]: (state, action) => {
            state.message = "New Note Added !"
        },

        [noteActions.delete]: (state, action) => {
            state.message = "Note Deleted Successfully !"
        }
    }
 });

 export const notificationReducer = notificationSlice.reducer;
 export const notificationSelector = (state) => state.notificationReducer.message;
 export const notificationReset = notificationSlice.actions.reset;