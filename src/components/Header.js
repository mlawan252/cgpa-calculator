export default function Header({ courses }) {
  const totalCourses = courses.length;
  
  const totalUnit = courses.reduce((acc, course) => acc + course.credit, 0);
  const cgpa = courses.reduce((acc, course) => acc + course.gpa, 0) / totalUnit;
  return (
    <header className="header">
      <h3>CGPA CALCULATOR</h3>
      <p>Total Courses Added <strong>{totalCourses}</strong></p>
      <div className="result">
      <p>Added credit units <strong>{totalUnit}</strong></p>
      {totalUnit > 0 && <p className={cgpa<2 ? 'red': ""}>CGPA <strong>{cgpa.toFixed(2)}</strong></p>}
      </div>
      
    </header>
  );
}
