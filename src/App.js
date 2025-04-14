import CourseForm from "./Features/components/CourseForm";
import Courses from "./Features/components/Courses";
import Header from "./Features/components/Header";

import ErrorMessage from "./Features/components/ErrorMessage";

// function reducer(state, action) {
//   switch (action.type) {
//     case "code":
//       return { ...state, courseCode: action.payload };
//     case "credit":
//       return { ...state, credit: action.payload };
//     case "grade":
//       return { ...state, grade: action.payload };
//     case "added":
//       const isAdded = state.courses.map(course=>course.courseCode).includes(action.payload.courseCode)
//       return {
//         ...state,
//         courseCode: "",
//         grade: "",
//         credit: "",
//         courses: isAdded ? state.courses : [...state.courses, action.payload],
//         error:isAdded && `${state.courseCode} has already been added`
//       };
//     case "delete":
//       const courses = state.courses.filter((course) => course !== action.payload)
//       return {
//         ...state,
//         isOpen:courses.length === 0,
//         courses:courses,  
//       };
//     case "open":
//       return{...state, isOpen:!state.isOpen}
//     default:
//       throw new Error("Unknown Action");
//   }
// }
export default function App() {

  return (
    <div className="app">
      <Header />
      <ErrorMessage />
      <CourseForm  />
      <Courses />
    </div>
  );
}
