import React from 'react';

const Header = () => {
  return (
    <header>
    <div className="header-title-wrapper">
      <label for="menu-toggle">
        <span className="las la-bars"></span>
      </label>
    <div className="header-title">
      <h1>Analytics</h1>
      <p>Display annalysis about your channel <span className="las la-chart-line"></span>
      </p>
    </div>
    </div>
    <div className="header-action">
<button className="btn btn-main">
<span className="las la-video"></span>
upload
</button>
    </div>
</header>
  );
};

export default Header;
