export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">

      <label htmlFor="wd-name mb-3 row">Assignment Name</label>
      <input id="wd-search-assignment" className="form-control mb-3 mt-2 w-100" value="A1" />

      <textarea className="form-control mb-3" aria-label="With textarea">
      The assignment is available online Submit a link to the landing page of your Web application running 
      on Netlify. The landing page should include the following: Your full name and section Links to each
      of the lab assignments Link to the Kanbas application Links to all relevant source code repositories
      The Kanbas application should include a link to navigate to the landing page
      </textarea>

      <div className="mb-3 ms-5 row">
        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
          <input id="wd-search-assignment" className="form-control w-25" value="100" />
        </div>
      </div>

      <div className="pt-2 d-flex align-items-center">
        <label htmlFor="wd-points" className="ms-5 me-3 pb-2">Points</label>
        <input id="wd-search-assignment" className="form-control mb-3 mt-2 w-25" value="100" />
      </div>
      
      <div className="pt-2 d-flex align-items-center mb-3 mt-2">
        <label htmlFor="wd-group" className="ms-5 me-3 pb-1">Assignment Group</label>
        <select className="form-select w-25" id="inputGroupSelect01">
          <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECTS">PROJECTS</option>
        </select>
      </div>

      <div className="pt-2 d-flex align-items-center mb-3 mt-2">
        <label htmlFor="wd-display-grade-as" className="ms-5 me-3 pb-1">Display Grade as</label>
        <select className="form-select w-25" id="inputGroupSelect01">
          <option selected value="PERCENTAGE">Percentage</option>
        </select>
      </div>

      <div className="pt-2 d-flex align-items-center mb-3 mt-2">
        <label htmlFor="wd-submission-type" className="ms-5 me-3 pb-1">Submission Type</label>
        <select className="form-select w-25" id="inputGroupSelect01">
          <option selected value="ONLINE">Online</option>
        </select>
      </div>

      <div className="ms-5 me-3 pb-1">
        <label htmlFor="wd-entry-options"><strong>Online Entry Options</strong></label>
        <div className="pt-2 d-flex align-items-center mb-3 mt-2 form-check">
          <input className="form-check-input me-2" name="check-genre" type="checkbox" id="wd-text-entry" />
          <label className="form-check-label pt-1" htmlFor="wd-text-entry">Text Entry</label>
        </div>

        <div className="pt-2 d-flex align-items-center mb-3 form-check">
          <input className="form-check-input me-2" name="check-genre" type="checkbox" id="wd-website-url" />
          <label className="form-check-label pt-1" htmlFor="wd-website-url">Website URL</label>
        </div>

        <div className="pt-2 d-flex align-items-center mb-3 mt-2 form-check">
          <input className="form-check-input me-2" name="check-genre" type="checkbox" id="wd-media-recordings" />
          <label className="form-check-label pt-1" htmlFor="wd-media-recordings">Media Recordings</label>
        </div>

        <div className="pt-2 d-flex align-items-center mb-3 mt-2 form-check">
          <input className="form-check-input me-2" name="check-genre" type="checkbox" id="wd-student-annotation" />
          <label className="form-check-label pt-1" htmlFor="wd-student-annotation">Student Annotation</label>
        </div>

        <div className="pt-2 d-flex align-items-center mb-3 mt-2 form-check">
          <input className="form-check-input me-2" name="check-genre" type="checkbox" id="wd-file-upload" />
          <label className="form-check-label pt-1" htmlFor="wd-file-upload">File Uploads</label>
        </div>

      </div>
      

      <table>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label><br />
          </td>
          <td><br />
            <input id="wd-assign-to" value="Everyone" />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            
          </td>
          <td><br />
            <label htmlFor="wd-due-date">Due</label><br />
            <input type="date" id="wd-due-date" value="2024-05-13"/><br/><br />
            
            <tr>
                <td>
                <label htmlFor="wd-available-from">Available from</label><br />
                <input type="date"id="wd-available-from" value="2024-05-06"/><br/>
                </td>
                <label htmlFor="wd-available-until">Until</label><br />
                <input type="date"id="wd-available-until" value="2024-05-20"/><br/>
            </tr>
            
          </td>
        </tr>

        
      </table>
    </div>
);}