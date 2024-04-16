import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./currencySlice";
import userReducer from "./userSlice"
const appStore=configureStore({
    reducer:{
        Currency:currencyReducer,
        user:userReducer
    }
})

export default appStore;