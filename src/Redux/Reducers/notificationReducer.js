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

    //     "note/add":(state, action) => {
    //         state.message = "New Note is Added !"
    //     },

    //     "note/delete":(state, action) => {
    //         state.message = "Note Successfully Deleted !";
    //     }
    // }

    //USING BUILDER 
    extraReducers:(builder) => {
        builder.addCase(todoActions.add, (state, action) => {
            state.message = "New Todo added !";
        })

        builder.addCase(noteActions.add, (state, action) => {
            state.message = "New Note is Added !";
        })

        builder.addCase(noteActions.delete, (state, action)=> {
            state.message = "Note is Successfully Deleted !";
        })
    }
 });

 export const notificationReducer = notificationSlice.reducer;
 export const notificationSelector = (state) => state.notificationReducer.message;
 export const notificationReset = notificationSlice.actions.reset;