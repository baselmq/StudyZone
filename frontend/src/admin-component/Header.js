import React from "react";

const Header = (props) => {
  return (
    <header>
      <div class="header-title-wrapper">
        <label for="menu-toggle">
          <span class="las la-bars"></span>
        </label>
        <div class="header-title">
          <h1>{props.title}</h1>
          <p>
            Display annalysis about your channel
            <span class="las la-chart-line"></span>
          </p>
        </div>
      </div>
      <div class="header-action">
        <button class="btn btn-main">
          <span class="las la-video"></span>
          upload
        </button>
      </div>
    </header>
  );
};

export default Header;
