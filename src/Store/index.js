import { configureStore } from "@reduxjs/toolkit";
import dictionarySearchReducer from "./dictionarySearchSlice";
export const myStore = configureStore({
    reducer: {
        dictionary: dictionarySearchReducer
    }
})

export default myStore