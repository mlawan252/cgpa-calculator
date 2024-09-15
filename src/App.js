import CourseForm from "./components/CourseForm";
import Courses from "./components/Courses";
import Header from "./components/Header";
import { useReducer } from "react";

const initialState = { courseCode: "", credit: "", grade: "", courses: [] };
function reducer(state, action) {
  switch (action.type) {
    case "code":
      return { ...state, courseCode: action.payload };
    case "credit":
      return { ...state, credit: action.payload };
    case "grade":
      return { ...state, grade: action.payload };
    case "added":
      return {
        ...state,
        courseCode: "",
        grade: "",
        credit: "",
        courses: [...state.courses, action.payload],
      };
    case "delete":
      return {
        ...state,
        courses: state.courses.filter((course) => course !== action.payload),
      };
    default:
      throw new Error("Unknown Action");
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { courses } = state;

  return (
    <div className="app">
      <Header courses={courses} />
      <CourseForm dispatch={dispatch} state={state} />
      <Courses courses={courses} dispatch={dispatch} />
    </div>
  );
}
