import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TableAdmin from "../components/Table";

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
