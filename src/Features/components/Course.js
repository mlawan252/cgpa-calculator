import { useDispatch } from "react-redux"
import { deleteCourse } from "../Course/courseSlice"


export default function Course({course}){
    const{courseCode, courseCredit, grade, gpa} = course
    const dispatch = useDispatch()
    return(
        <li className="course-list">
        <p>{courseCode}</p>
        <p>{courseCredit}</p>
        <p>{grade}</p>
        <p>{gpa}</p>
        <button className="delete-button" onClick={()=>dispatch(deleteCourse(courseCode))}>❌</button>
    </li>
    )
    
    
}