import React from "react";
import Sidebar from "../admin-component/Sidebar";
import Header from "../admin-component/Header";
import TableAdmin from "../admin-component/Table";

const Courses = () => {
  return (
    <>
      <input type="checkbox" name="" id="menu-toggle" />
      <div className="overlay">
        <label htmlFor="menu-toggle"></label>
      </div>

      <Sidebar />
      <div class="main-content">
        <Header title={"Courses"} />
        <TableAdmin />
      </div>
    </>
  );
};

export default Courses;
