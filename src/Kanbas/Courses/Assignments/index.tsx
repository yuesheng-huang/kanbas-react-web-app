import AssignmentControls from "./AssignmentControls"
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { BsGripVertical } from 'react-icons/bs'
import { GoTriangleDown } from "react-icons/go";
import { PiNotePencil } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Assignments() {
    return (
      <div id="wd-assignments">
        <AssignmentControls /><br /><br />
        <ul id="wd-assignments" className="list-group rounded-0">
          <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="fs-3" />
          <GoTriangleDown className="me-1 fs-4"/>
          <strong>ASSIGNMENTS</strong> <AssignmentsControlButtons /></div>

          <ul className="wd-assignments list-group rounded-0">
              <li className="wd-assignments list-group-item ps-1 fs-5 border-gray">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-2"/>
                <PiNotePencil className="fs-2"/>
                <div className="mt-2 mb-2 flex-grow-1">
                <Link to="/Kanbas/Courses/1234/Assignments/123" className="text-black text-decoration-none">
                <ul><strong>A1</strong></ul></Link>
                <ul className="wd-assignment-description"><span className="text-danger">Multiple Modules </span> 
                | <strong> Not Available until</strong> May 6 at 12:00am | </ul>
                <ul className="wd-assignment-description"> <strong>Due </strong> May 13 at 11:59pm | 100 pts </ul>
                </div>
                <AssignmentControlButtons/>        
              </div></li>

              <li className="wd-assignments list-group-item ps-1 fs-5 border-gray">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-2"/>
                <PiNotePencil className="fs-2"/>
                <div className="mt-2 mb-2 flex-grow-1">
                <Link to="/Kanbas/Courses/1234/Assignments/123" className="text-black text-decoration-none">
                <ul><strong>A2</strong></ul></Link>
                <ul className="wd-assignment-description"><span className="text-danger">Multiple Modules </span> 
                | <strong>Not Available until</strong>  May 13 at 12:00am | </ul>
                <ul className="wd-assignment-description"> <strong>Due</strong> May 20 at 11:59pm | 100 pts </ul>
                </div>
                <AssignmentControlButtons/>
              </div></li>

              <li className="wd-assignments list-group-item ps-1 fs-5 border-gray">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-2"/>
                <PiNotePencil className="fs-2"/>
                <div className="mt-2 mb-2 flex-grow-1">
                <Link to="/Kanbas/Courses/1234/Assignments/123" className="text-black text-decoration-none">
                <ul><strong>A3</strong></ul></Link>
                <ul className="wd-assignment-description"><span className="text-danger">Multiple Modules </span> 
                | <strong>Not Available until</strong>  May 20 at 12:00am | </ul>
                <ul className="wd-assignment-description"> <strong>Due</strong> May 27 at 11:59pm | 100 pts </ul>
                </div>
                <AssignmentControlButtons/>
              </div></li>
            </ul>
        </ul>
      </div>
  );}