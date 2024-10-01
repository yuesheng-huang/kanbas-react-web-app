import { SlCalender } from "react-icons/sl";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      
      <form>

        <div className="form-group row ms-5 mb-4">
          <label htmlFor="wd-name" className="col-form-label">Assignment Name</label>
          <input id="wd-name" className="form-control ms-2 mt-3 w-100" value="A1" />
        </div>

        <div className="form-group row ms-5 mb-4">
          <textarea id="wd-description" className="form-control ms-2" aria-label="With textarea">
          The assignment is available online Submit a link to the landing page of your Web application running 
          on Netlify. The landing page should include the following: Your full name and section Links to each
          of the lab assignments Link to the Kanbas application Links to all relevant source code repositories
          The Kanbas application should include a link to navigate to the landing page
          </textarea>
        </div>

        <div className="form-group row ms-5 mb-4">
          <label htmlFor="wd-points" className="col-sm-2 col-form-label">Points</label>
          <div className="col-sm-10">
          <input id="wd-points" className="form-control w-25" value="100" />
          </div>
        </div>

        <div className="form-group row ms-5 mb-4">
          <label htmlFor="wd-group" className="col-sm-2 col-form-label">Assignment Group</label>
          <div className="col-sm-10">
            <select id="wd-group" className="form-select w-25">
              <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECTS">PROJECTS</option>
            </select>
          </div>
        </div>

        <div className="form-group row ms-5 mb-4">
        <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label">Display Grade as</label>

        <div className="col-sm-10">
          <select id="wd-display-grade-as" className="form-select w-25">
            <option selected value="PERCENTAGE">Percentage</option>
          </select>
        </div >
        </div>

        <div className="form-group row ms-5 mb-4">
          <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label">Submission Type</label>
          <div className="col-sm-10 form-control ms-2 p-3 w-25">
              <select id="wd-submission-type" className="form-select">
                <option selected value="ONLINE">Online</option>
              </select>

              <div className="form-group ms-2 mt-3">
                <label htmlFor="wd-entry-options" className="col-form-label"><strong>Online Entry Options</strong></label>
                
                <div className="pt-2 mb-3 mt-2 form-check">
                  <input className="form-check-input me-2" name="check-genre" type="checkbox" id="wd-text-entry" />
                  <label className="form-check-label pt-1" htmlFor="wd-text-entry">Text Entry</label>
                </div>

                <div className="pt-2 mb-3 form-check">
                  <input className="form-check-input me-2" name="check-genre" type="checkbox" id="wd-website-url" />
                  <label className="form-check-label pt-1" htmlFor="wd-website-url">Website URL</label>
                </div>

                <div className="pt-2 mb-3 mt-2 form-check">
                  <input className="form-check-input me-2" name="check-genre" type="checkbox" id="wd-media-recordings" />
                  <label className="form-check-label pt-1" htmlFor="wd-media-recordings">Media Recordings</label>
                </div>

                <div className="pt-2 mb-3 mt-2 form-check">
                  <input className="form-check-input me-2" name="check-genre" type="checkbox" id="wd-student-annotation" />
                  <label className="form-check-label pt-1" htmlFor="wd-student-annotation">Student Annotation</label>
                </div>

                <div className="pt-2 mb-3 mt-2 form-check">
                  <input className="form-check-input me-2" name="check-genre" type="checkbox" id="wd-file-upload" />
                  <label className="form-check-label pt-1" htmlFor="wd-file-upload">File Uploads</label>
                </div>
            </div >
          </div>
        </div>

        <div className="form-group row ms-5 mb-4">
          <label className="col-sm-2 col-form-label">Assign</label>
          <div className="col-sm-10 form-control ms-2 p-3 w-25">
            
              <div className="form-group ms-1">
                <label htmlFor="wd-assign-to" className="col-form-label"><strong>Assign to</strong></label>
                <input type="input" id="wd-assign-to" className="form-control mt-1" value="Everyone"/>

                <label htmlFor="wd-due-date" className="col-form-label mt-3"><strong>Due</strong></label>
                <div className="input-group mt-1">
                    <input type="input" id="wd-due-date" className="form-control" value="2024-05-13"/>
                    <span className="input-group-text"><SlCalender className="fs-4"/></span>
                </div>

                <div className="row">
                  <div className="col-6">
                    <label htmlFor="wd-available-from" className="col-form-label mt-3"><strong>Available from</strong></label>
                    <div className="input-group mt-1">
                    <input type="input" id="wd-available-from" className="form-control" value="2024-05-06"/>
                    <span className="input-group-text"><SlCalender className="fs-4"/></span>
                    </div>   
                  </div>

                  <div className="col-6">
                    <label htmlFor="wd-available-until" className="col-form-label mt-3"><strong>Until</strong></label>
                    <div className="input-group mt-1">
                    <input type="input" id="wd-available-until" className="form-control" value="2024-05-20"/>
                    <span className="input-group-text"><SlCalender className="fs-4"/></span>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </form>

      
      <hr/>
      <div className="float-end">   
        <button className="btn btn-light border me-2">Cancel</button>
        <button className="btn btn-danger border">Save</button>
      </div>

    </div>
);}