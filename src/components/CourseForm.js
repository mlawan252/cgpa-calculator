

export default function CourseForm({  state, dispatch }) {
  

  const { courseCode, credit, grade } = state;
  

  function handleSubmit(e) {
    e.preventDefault();
    const checkCourse = courseCode.at(0);
    console.log(checkCourse);
    if (!courseCode || !credit) return;
    if (!isNaN(checkCourse)) return;
    const course = {
      courseCode,
      credit,
      grade:
        grade === 5
          ? "A"
          : grade === 4
          ? "B"
          : grade === 3
          ? "C"
          : grade === 2
          ? "D"
          : grade === 0
          ? "F"
          : "F",
      gpa: grade * credit,
    };
    dispatch({ type: "added", payload:course });
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Course Code</label>
      <input
        type="text"
        placeholder="Enter a Course"
        value={courseCode}
        onChange={(e) => dispatch({ type: "code", payload: e.target.value })}
      />

      <label>Credit Unit</label>
      <input
        type="text"
        placeholder="Credit Unit"
        value={credit}
        onChange={(e) =>
          dispatch({ type: "credit", payload: Number(e.target.value) })
        }
      />

      <label>Grade</label>
      <select
        value={grade}
        onChange={(e) =>
          dispatch({ type: "grade", payload: Number(e.target.value) })
        }
      >
        <option value="">Select...</option>
        <option value={5}>A</option>
        <option value={4}>B</option>
        <option value={3}>C</option>
        <option value={2}>D</option>
        <option value={0}>F</option>
      </select>
      <button>Add Course</button>
    </form>
  );
}
