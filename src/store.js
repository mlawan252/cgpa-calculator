import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./Features/Course/courseSlice"

const store = configureStore({
    reducer: {course:courseReducer}
})
export default store;