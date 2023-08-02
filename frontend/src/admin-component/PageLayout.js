import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import "../admin-style/admin.css";

const PageLayout = () => {
  return (
    <>
      <input type="checkbox" name="" id="menu-toggle" />
      <div className="overlay">
        <label htmlFor="menu-toggle"></label>
      </div>

      <Sidebar />
      <MainContent />
    </>
  );
};

export default PageLayout;
