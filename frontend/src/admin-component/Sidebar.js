import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div class="sidebar">
      <div class="sidebar-container">
        <div class="brand">
          <h2>
            <span class="lab la-staylinked"></span>
            StudyZone
          </h2>
        </div>
        <div class="sidebar-avartar">
          <div>
            <img src="../Images/1.png"></img>
          </div>
          <div class="avartar-info">
            <div class="avartar-text">
              <h4>Saadeh</h4>
              <small>1029-1021-1210</small>
            </div>
            <span class="las la-angle-double-down"></span>
          </div>
        </div>

        <div class="sidebar-menu">
          <ul>
            <li>
              <Link to="#" class="active">
                <span class="las la-adjust"></span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/courses">
                <span class="las la-swatchbook"></span>
                <span>Courses</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/lessons">
                <span class="las la-book-reader"></span>
                <span>Lessons</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/users">
                <span class="las la-user-cog"></span>
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span class="las la-sign-out-alt"></span> <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>

        <div class="sidebar-card">
          <div class="side-card-icon">
            <span class="lab la-codiepie"></span>
          </div>

          <div>
            <h4>make ads</h4>
            <p>ADdd ads to you video </p>
          </div>
          <button class="btn btn-main btn-block"> create now</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
