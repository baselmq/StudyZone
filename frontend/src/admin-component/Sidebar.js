import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="brand">
          <h2>
            <span className="lab la-staylinked"></span>
            StudyZone
          </h2>
        </div>
        <div className="sidebar-avartar">
          <div>
            <img src="../Images/1.png" className='admin-img' alt=""></img>
          </div>
          <div className="avartar-info">
            <div className="avartar-text">
              <h4>Saadeh</h4>
              <small>1029-1021-1210</small>
            </div>
            <span className="las la-angle-double-down"></span>
          </div>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <Link to="#" className="active">
                <span className="las la-adjust"></span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/courses">
                <span className="las la-swatchbook"></span>
                <span>Courses</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/lessons">
                <span className="las la-book-reader"></span>
                <span>Lessons</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/users">
                <span className="las la-user-cog"></span>
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <span className="las la-sign-out-alt"></span> <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="sidebar-card">
          <div className="side-card-icon">
            <span className="lab la-codiepie"></span>
          </div>

          <div>
            <h4>make ads</h4>
            <p>ADdd ads to you video </p>
          </div>
          <button className="btn btn-main btn-block"> create now</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
