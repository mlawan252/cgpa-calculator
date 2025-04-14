import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../Course/courseSlice";
export default function CourseForm() {
  const [courseCode, setCourseCode] = useState("");
  const [courseCredit, setCourseCredit] = useState("");
  const [courseGrade, setCourseGrade] = useState("");

  const checkFields = !courseCode || !courseCredit || !courseGrade;
  const dispatch = useDispatch();
  
  function handleSubmit(e) {
    e.preventDefault();
    const checkCourse = courseCode.at(0);
    if (checkFields) return;
    if (!isNaN(checkCourse)) return;
    const course = {
      courseCode,
      courseCredit,
      grade:
        courseGrade === 5
          ? "A"
          : courseGrade === 4
          ? "B"
          : courseGrade === 3
          ? "C"
          : courseGrade === 2
          ? "D"
          : courseGrade === 1
          ? "E"
          : "F",
      gpa: courseGrade * courseCredit,
    };
    dispatch(add(course));
    setCourseCode("")
    setCourseCredit("")
    setCourseGrade("")
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Course Code</label>
      <input
        type="text"
        placeholder="Enter a Course"
        value={courseCode}
        onChange={(e) => setCourseCode(e.target.value)}
      />

      <label>Credit Unit</label>
      <input
        type="text"
        placeholder="Credit Unit"
        value={courseCredit}
        onChange={(e) => setCourseCredit(+e.target.value)}
      />

      <label>Grade</label>
      <select
        value={courseGrade}
        onChange={(e) => setCourseGrade(+e.target.value)}
      >
        <option value="">Select...</option>
        <option value={5}>A</option>
        <option value={4}>B</option>
        <option value={3}>C</option>
        <option value={2}>D</option>
        <option value={1}>E</option>
        <option value={0}>F</option>
      </select>
      <button>Add Course</button>
    </form>
  );
}
