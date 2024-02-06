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
        }
    }
 });

 export const notificationReducer = notificationSlice.reducer;
 export const notificationSelector = (state) => state.notificationReducer.message;
 export const notificationReset = notificationSlice.actions.reset;