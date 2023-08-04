import React from "react";
import "../style/addLessons.css"

const AddLessons = () => {
  return (
    <div className="AddLessons">
      <div className="row AddLessons_row">
        <div className="col-75 AddLessons_75">
          <div className="container AddLessons_container">
            <form action="">
              <div className="row AddLessons_row">
                <div className="col-50 AddLessons_50">
                  <label>Lesson Title</label>
                  <input
                    className="AddLessons_input"
                    type="text"
                    placeholder=""
                  />
                  <label htmlFor="adr">Time</label>
                  <input
                    className="AddLessons_input"
                    type="text"
                    placeholder=""
                  />
                  <label>Url Video</label>
                  <input
                    className="AddLessons_input"
                    type="url"
                    placeholder=""
                  />
                </div>
              </div>
              <input
                type="Submit"
                className="btn AddLessons_btn"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLessons;
