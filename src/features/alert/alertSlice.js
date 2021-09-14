import { createSlice } from "@reduxjs/toolkit";
const alertSlice = createSlice({
    name:"Alert",
    initialState:{
        msg:"Welcome",
        key:""
    },
    reducers:{
        setAlert:(state,action)=>{
            state.msg=action.payload.msg;
            state.key=action.payload.key;
        }
    }
});
export const {setAlert} = alertSlice.actions;
export default alertSlice.reducer;