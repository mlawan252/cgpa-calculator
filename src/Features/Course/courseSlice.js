import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  isOpen: false,
  error: "",
};

const courseSlice = createSlice({
    name:"course",
    initialState,
    reducers:{
        // add:{
        //     prepare(courseCode, credit, grade){
        //         return {payload:courseCode, credit, grade}
        //     },
        //     reducer(state, action){
        //     state.courseCode = action.payload.courseCode
        //     state.credit = action.payload.credit
        //     state.grade = action.payload.grade
        //     } 
        // },
        add(state, action){
            const isAdded = state.courses.map(course=>course.courseCode).includes(action.payload.courseCode)
            state.courses = isAdded ? state.courses : [...state.courses, action.payload]
        },
        toggleBtn(state){
            state.isOpen = !state.isOpen;
        },
        deleteCourse(state, action){
            state.courses = state.courses.filter((course) => course.courseCode !== action.payload)       
        }
    }
})

export const {add, toggleBtn, deleteCourse} = courseSlice.actions
export default courseSlice.reducer