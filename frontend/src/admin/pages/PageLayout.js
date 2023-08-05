import React from "react";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Header from "../components/Header";
import AnalyticsSection  from "../components/AnalyticsSection";
import Table from "../components/Table";
import "../style/admin.css";
import Chart1 from "../components/Chart";
import ChartComponent from "../components/ChartCourse";

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
            <h4 className="header-chart">Users Registration</h4>
          <Chart1/>
          </div>
          <div class="chart-two">
          <h4 className="header-chart">Courses Sales</h4>
          <ChartComponent/>
</div>
          </div>

          
        </main>
      </div>

    </>
  );
};

export default PageLayout;
