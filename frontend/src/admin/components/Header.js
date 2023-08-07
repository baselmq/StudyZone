import React from "react";

const Header = (props) => {
  return (
    <header className="header-admin">
      <div class="header-title-wrapper">
        <label for="menu-toggle">
          <span class="las la-bars"></span>
        </label>
        <div class="header-title">
          <h1>{props.title}</h1>
        </div>
      </div>
     
    </header>
  );
};

export default Header;
