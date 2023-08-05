
import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Link } from "react-router-dom";
const AddLessons = () => {
  return (
    <>
      <input type="checkbox" name="" id="menu-toggle" />
      <div className="overlay">
        <label htmlFor="menu-toggle"></label>
      </div>

      <Sidebar />
      <div className="main-content">
        <Header title={"Lessons"} />

        <div className="admin-container-main">
          <div className="header-main">
          <h4 className="main-txt-header">Add Lesson</h4>

            <Link to="/admin/lessons" className="btn-login">
            All Lessons <i class="las la-list"></i> 
              </Link>

          </div>
        <div className="grid-input">
        <div className="input-groups">
        <label>Lesson Title</label>
               <input
                  className="AddCourses_input"
                type="text"
                 id="fname"
                  name="firstname"
                    placeholder=""
                 />

          </div>
          <div className="input-groups">
          <label>Course</label>
          <select id="cars" name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
          </div>
          <div className="input-groups">
          <label>Time</label>
                  <input
                    className="AddCourses_input"
                    type="number"
                    placeholder=""
                  />
          </div>
          <div className="input-groups">
          <label>Url Video</label>
                  <input
                    className="AddCourses_input"
                    type="text"
                    placeholder=""
                  />
          </div>
        <div className="btnContainer">
        <button className="btn-login" type="submit">
              Add
            </button>
          

            <Link to="/admin/lessons" className="btn-cancel">
            Cancel
              </Link>

        </div>
          </div>



        </div>
      </div>
    </>
  );
};

export default AddLessons;
