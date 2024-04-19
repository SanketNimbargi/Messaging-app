import {configureStore} from "@reduxjs/toolkit"
import themeSlice from "./themeSlice";
import themeSliceReducer from "./themeSlice";

export const store = configureStore({
    reducer:{
        themeKey : themeSliceReducer
    }
});