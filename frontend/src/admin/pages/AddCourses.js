// import React from "react";
// import "../style/addCourses.css"

// const AddCourses = () => {
//   return (
//     <div className="AddCourses">
//       <div className="row AddCourses_row">
//         <div className="col-75 AddCourses_75">
//           <div className="container AddCourses_container">
//             <form action="">
              // <div className="row AddCourses_row">
              //   <div className="col-50 AddCourses_50">
              //     <label>Courses Title</label>
              //     <input
              //       className="AddCourses_input"
              //       type="text"
              //       id="fname"
              //       name="firstname"
              //       placeholder=""
              //     />
                
              //     <label htmlFor="adr">Courses</label>
              //     <input
              //       className="AddCourses_input"
              //       type="text"
              //       placeholder=""
              //     />
             
             
             
              //   </div>
              // </div>
              // <input
              //   type="Submit"
              //   className="btn AddCourses_btn"
              // />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default AddCourses;







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
          <h4 className="main-txt-header">Add Course</h4>

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
              Add
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
