import ModulesControls from "./ModuleControls";
import { BsGripVertical } from 'react-icons/bs'
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
    return (
      <div>
        <ModulesControls /><br /><br /><br /><br />
        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"> 
            <BsGripVertical className="me-2 fs-3" />
            <strong>Week 1</strong> <ModuleControlButtons /> </div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <strong>LEARNING OBJECTIVES</strong> <LessonControlButtons /> </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <span className="ms-4">Introduction to the course</span> <LessonControlButtons /> </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <span className="ms-4">Learn what is Web Development</span>  <LessonControlButtons /> </li>

              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <strong>Reading</strong> <LessonControlButtons /> </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <span className="ms-4">Full Stack Developer - Chapter 1 - Introduction</span> <LessonControlButtons /> </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <span className="ms-4">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</span>  <LessonControlButtons /> </li>

              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <strong>SLIDES</strong> <LessonControlButtons /> </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <span className="ms-4 text-danger">Introduction to Web Development</span> <LessonControlButtons /> </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <span className="ms-4 text-danger">Creating an HTTP server with Node.js</span>  <LessonControlButtons /> </li>
            </ul>
          </li>

          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"> 
            <BsGripVertical className="me-2 fs-3" />
            <strong>Week 2</strong> <ModuleControlButtons /></div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <strong>LEARNING OBJECTIVES</strong> <LessonControlButtons /> </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <span className="ms-4">Learn how to create user interfaces with HTML</span> <LessonControlButtons /> </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <span className="ms-4">Deploy the assignment to Netlify</span>  <LessonControlButtons /> </li>

              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <strong>Reading</strong> <LessonControlButtons /> </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <span className="ms-4">Full Stack Developer - Chapter 1 - Introduction</span> <LessonControlButtons /> </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <span className="ms-4">Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</span>  <LessonControlButtons /> </li>

              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <strong>SLIDES</strong> <LessonControlButtons /> </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <span className="ms-4 text-danger">Embedding content with Iframes</span> <LessonControlButtons /> </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <span className="ms-4 text-danger">Drawing with Scalable Vector Graphics</span>  <LessonControlButtons /> </li>
            </ul>
          </li>

          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary"> 
            <BsGripVertical className="me-2 fs-3" />
            <strong>Week 3</strong> <ModuleControlButtons /></div>
            <ul className="wd-lessons list-group rounded-0">
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <strong>LEARNING OBJECTIVES</strong> <LessonControlButtons /> </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <span className="ms-4">Introduction to CSS</span> <LessonControlButtons /> </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <span className="ms-4">Styling color and background color</span>  <LessonControlButtons /> </li>

              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <strong>Reading</strong> <LessonControlButtons /> </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <span className="ms-4">Full Stack Developer - Chapter 3 - Styling User Interfaces With Cascading Style Sheets</span> <LessonControlButtons /> </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <span className="ms-4">Full Stack Developer - Chapter 4 - Styling Web Pages With The Bootstrap CSS Library</span>  <LessonControlButtons /> </li>

              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <strong>SLIDES</strong> <LessonControlButtons /> </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <span className="ms-4 text-danger">Introduction to Cascading Style Sheets</span> <LessonControlButtons /> </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <span className="ms-4 text-danger">Introduction to Bootstrap</span>  <LessonControlButtons /> </li>
            </ul>
          </li>
        </ul>
      </div>
  );
}