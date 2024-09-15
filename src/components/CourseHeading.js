

export default function CourseHeading({setIsOpen, isOpen}) {
  

  function handleIsopen(){
    setIsOpen(!isOpen)
  }
  return (
    <>
      <button onClick={handleIsopen}>{isOpen ? 'Hide added courses':'View Added courses'}</button>
      {isOpen && <ul className="course-heading">
        <li>Course Code</li>
        <li>Credit Unit</li>
        <li>Grade</li>
        <li>Grade Point</li>
        <li>Delete</li>
      </ul>}
    </>
  );
}
