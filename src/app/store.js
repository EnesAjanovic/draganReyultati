import { configureStore } from "@reduxjs/toolkit";
import footballReducer from '../features/footballSlice'

export const store = configureStore({
    reducer: {
        creator: footballReducer
    }
})