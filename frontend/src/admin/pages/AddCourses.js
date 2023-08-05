import React from "react";
import "../style/addCourses.css"

const AddCourses = () => {
  return (
    <div className="AddCourses">
      <div className="row AddCourses_row">
        <div className="col-75 AddCourses_75">
          <div className="container AddCourses_container">
            <form action="">
              <div className="row AddCourses_row">
                <div className="col-50 AddCourses_50">
                  <label>Courses Title</label>
                  <input
                    className="AddCourses_input"
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder=""
                  />
                  <label>Courses Price</label>
                  <input
                    className="AddCourses_input"
                    type="number"
                    placeholder=""
                  />
                  <label htmlFor="adr">Courses</label>
                  <input
                    className="AddCourses_input"
                    type="text"
                    placeholder=""
                  />
                  <label>Language</label>
                  <input
                    className="AddCourses_input"
                    type="text"
                    placeholder=""
                  />
                  <label>Time</label>
                  <input
                    className="AddCourses_input"
                    type="text"
                    placeholder=""
                  />
                  <label>What you will learn</label>
                  <input
                    className="AddCourses_input"
                    type="text"
                    placeholder=""
                  />
                  <label>Description</label>
                  <textarea rows="5" cols="33" className="description">
                    Write a Description of Course...
                  </textarea>
                </div>
              </div>
              <input
                type="Submit"
                className="btn AddCourses_btn"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddCourses;
