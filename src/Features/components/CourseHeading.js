import {  useDispatch, useSelector } from "react-redux";
import { toggleBtn } from "../Course/courseSlice";


export default function CourseHeading() {
  const isOpen = useSelector(state=>state.course.isOpen)
  const dispatch = useDispatch()
  
  function handleToggleBtn(){
    dispatch(toggleBtn())
  }
  return (
    <>
      <button onClick={handleToggleBtn}>{isOpen ? 'Hide added courses':'View Added courses'}</button>
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
