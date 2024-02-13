import { createSlice } from "@reduxjs/toolkit";

const currencySlice=createSlice({
    name:"currency",
    initialState:{
        currency:"INR",
    },
    reducers:{
        changeCurrency:(state,action)=>{
            state.currency=action.payload;
        }
    }
});

export const {changeCurrency}=currencySlice.actions;

export default currencySlice.reducer;