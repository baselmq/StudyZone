
import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const CourseInfo = () => {

 



  return (
    <>
      <input type="checkbox" name="" id="menu-toggle" />
      <div className="overlay">
        <label htmlFor="menu-toggle"></label>
      </div>

      <Sidebar />
      <div className="main-content">
        <Header title={"Courses"} />

        <div className="admin-container-main">
          <div className="header-main">
          <h4 className="main-txt-header">Course Info</h4>

            <Link to="/admin/courses" className="btn-login">
            All Course <i class="las la-list"></i> 
              </Link>

          </div>
        <div className="grid-input">
        <div className="input-groups">
        <label>Course Title</label>
               <input
                  className="AddCourses_input"
                type="text"
                 id="fname"
                  name="firstname"
                    placeholder=""
                 />

          </div>
          <div className="input-groups">
          <label>Courses Price</label>
                  <input
                    className="AddCourses_input"
                    type="number"
                    placeholder=""
                  />
          </div>
          <div className="input-groups">
          <label>Language</label>
                  <input
                    className="AddCourses_input"
                    type="text"
                    placeholder=""
                  />
          </div>
          <div className="input-groups">
          <label>Time</label>
                  <input
                    className="AddCourses_input"
                    type="text"
                    placeholder=""
                  />
          </div>
          <div className="input-groups">
          <label>What you will learn</label>
                  <input
                    className="AddCourses_input"
                    type="text"
                    placeholder=""
                  />
          </div>
          <div className="input-groups">
       
          <label>Description</label>
          <input
                    className="AddCourses_input"
                    type="text"
                    placeholder=""
                  />
          </div>
        <div className="btnContainer">
        <button className="btn-login" type="submit">
              Save
            </button>
          

            <Link to="/admin/courses" className="btn-cancel">
            Cancel
              </Link>

        </div>
          </div>



        </div>
      </div>
    </>
  );
};

export default CourseInfo;
