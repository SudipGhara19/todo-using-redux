import { createSlice } from "@reduxjs/toolkit"

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
    extraReducers:{
        "todo/add":(state,action) => {
            state.message = "New Todo is craeted !";
        },

        "note/add":(state, action) => {
            state.message = "New Note is Added !"
        },

        "note/delete":(state, action) => {
            state.message = "Note Successfully Deleted !";
        }
    }
 });

 export const notificationReducer = notificationSlice.reducer;
 export const notificationSelector = (state) => state.notificationReducer.message;
 export const notificationReset = notificationSlice.actions.reset;