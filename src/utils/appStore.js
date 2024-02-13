import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./currencySlice";

const appStore=configureStore({
    reducer:{
        Currency:currencyReducer
    }
})

export default appStore;