import {  useSelector } from "react-redux";
import Course from "./Course";
import CourseHeading from "./CourseHeading";


export default function Courses() {
    const state = useSelector(state=>state.course)
    const courses = state.courses
    const isOpen =  state.isOpen
  return (
    <ul>
      <CourseHeading   />
      {courses.map(
        (course, index) =>
          isOpen && (
            <Course
              course={course}
              key={index}
            />
          )
      )}
    </ul>
  );
}
