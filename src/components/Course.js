

export default function Course({course, dispatch}){
    const{courseCode, credit, grade, gpa} = course
    return(
        <li className="course-list">
        <p>{courseCode}</p>
        <p>{credit}</p>
        <p>{grade}</p>
        <p>{gpa}</p>
        <button className="delete-button" onClick={()=>dispatch({type:"delete", payload:course})}>❌</button>
    </li>
    )
    
    
}