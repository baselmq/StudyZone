import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TableAdmin from "../components/Table";

const Courses = () => {

  const columns = ['courseName', 'price', 'category','ratings'];
  const data = [
    {  courseName: "Project Management Fundamentals",
    price: 69.99,
    category: "Marketing",
    ratings: 4.5},
    {  courseName: "Project Management Fundamentals",
    price: 69.99,
    category: "Marketing",
    ratings: 4.5},
    {  courseName: "Project Management Fundamentals",
    price: 69.99,
    category: "Marketing",
    ratings: 4.5},
    {  courseName: "Project Management Fundamentals",
    price: 69.99,
    category: "Marketing",
    ratings: 4.5},
    {  courseName: "Project Management Fundamentals",
    price: 69.99,
    category: "Marketing",
    ratings: 4.5},

  ];

  const handleViewClick = (row) => {
    console.log('View:', row);
  };



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
          <h4 className="main-txt-header">All Courses</h4>
          <button className="btn-login" type="submit">
              New Course +
            </button>
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
