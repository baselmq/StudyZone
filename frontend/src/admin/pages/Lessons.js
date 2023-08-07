

import React from "react";
// import { useHistory } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TableAdmin from "../components/Table";
import { Link } from "react-router-dom";

const Courses = () => {
  // let history = useHistory();

  const columns = ['lesson_title', 'courseName', 'category','ratings'];
  const data = [
    
    {  lesson_title: "Video One",
       courseName: "Project Management Fundamentals",
    category: "Marketing",
    ratings: 4.5},
    {  lesson_title: "Video One",
    courseName: "Project Management Fundamentals",
 category: "Marketing",
 ratings: 4.5},
 {  lesson_title: "Video One",
 courseName: "Project Management Fundamentals",
category: "Marketing",
ratings: 4.5},
{  lesson_title: "Video One",
courseName: "Project Management Fundamentals",
category: "Marketing",
ratings: 4.5},
{  lesson_title: "Video One",
courseName: "Project Management Fundamentals",
category: "Marketing",
ratings: 4.5},
  ];

  const handleViewClick = (row) => {
    // history.push('../CourseInfo');
  };



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
          <h4 className="main-txt-header">All Lessons</h4>

            <Link to="/admin/add-lessons" className="btn-login">
            New Lessons +
              </Link>

          </div>
        <TableAdmin columns={columns} data={data}  
         onViewClick={handleViewClick}
     />
        </div>
      </div>
    </>
  );
};

export default Courses;
