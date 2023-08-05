import React from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Header from "../components/Header";
import AnalyticsSection  from "../components/AnalyticsSection";
import Table from "../components/Table";
import "../style/admin.css";

const PageLayout = () => {
  return (
    <>
      <input type="checkbox" name="" id="menu-toggle" />
      <div className="overlay">
        <label htmlFor="menu-toggle"></label>
      </div>

      <Sidebar />
      {/* <MainContent /> */}

      <div class="main-content">

        <Header title={"Dashboard"} />
        <main>
        <AnalyticsSection />
        <div class="chart-container">
          <div class="chart-one">
          <h1>Chart1</h1>
          </div>
          <div class="chart-two">
          <h1>Chart2</h1>

</div>
          </div>
        </main>
      </div>

    </>
  );
};

export default PageLayout;
