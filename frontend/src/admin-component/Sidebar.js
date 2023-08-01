import React from 'react';

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
              <img src='../Images/1.png'></img>

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
                        <a href=""  class="active">
                            <span class="las la-adjust"></span>
                            <span>Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                            <span class="las la-video"></span>
                            <span>Videos</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                            <span class="las la-chart-bar"></span>
                            <span>Analytics</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                            <span class="las la-calendar"></span>
                            <span>Schhedil</span>
                        </a>
                      </li>
                      <li>
                        <a href="">
                            <span class="las la-user"></span>
                            <span>Account

                            </span>
                        </a>
                      </li>
                    </ul>
                </div>

                <div class="sidebar-card">
                  <div class="side-card-icon">
                    <span class="lab la-codiepie">

                    </span>
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