import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export default function AssignmentControls() {
  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
      <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
      Assignment</button>

      <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-2 float-end">
      <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
      Group</button>

      <div className="input-group pt-2 d-flex align-items-center" style={{width: "300px"}}>
      <span className="input-group-text"><CiSearch className="fs-4"/></span>
      <input id="wd-search-assignment" className="form-control"  placeholder="Search..." />
      </div>
      
    </div>
    );
}