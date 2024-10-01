import { RiProhibitedLine } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoMdHome } from "react-icons/io";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { TfiAnnouncement } from "react-icons/tfi";
import { FaBell } from "react-icons/fa";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px", marginLeft: "30px"}}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <RiProhibitedLine className="me-2 fs-5" /> Unpublish </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish </button>
        </div>
      </div><br />

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
      <BiImport className="me-2 fs-5" /> Import Existing Content </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
      <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
      <IoMdHome className="me-2 fs-5" /> Choose Home Page </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
      <BiSolidBarChartAlt2 className="me-2 fs-5" /> View Course Screen </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
      <TfiAnnouncement className="me-2 fs-5" /> New Announcement </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
      <BiSolidBarChartAlt2 className="me-2 fs-5" /> New Analytics </button>

      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
      <FaBell className="me-2 fs-5" /> View Course Notifications </button>

    </div>
);}
