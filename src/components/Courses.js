import Course from "./Course";
import CourseHeading from "./CourseHeading";
import { useState } from "react";

export default function Courses({ courses, dispatch }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ul>
      <CourseHeading setIsOpen={setIsOpen} isOpen={isOpen} />
      {courses.map(
        (course, index) =>
          isOpen && (
            <Course
              course={course}
              key={index}
              dispatch={dispatch}
            />
          )
      )}
    </ul>
  );
}
