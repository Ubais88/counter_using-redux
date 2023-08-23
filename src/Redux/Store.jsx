import { configureStore } from "@reduxjs/toolkit"
import CounterSlice from "./slices/CounterSlice.jsx"

export const Store = configureStore({
    reducer:{
        counter : CounterSlice
    },
})