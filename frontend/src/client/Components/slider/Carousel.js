import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../../css/index.css";
import { Link } from "react-router-dom";
const Carousel = (props) => {
  const login = localStorage.getItem("login");
  return (
    <div className="carousel-item custom-carousel-item active c-item">
      <div className={props.class}></div>
      <div className="container carousel-container">
        <h1>{props.title}</h1>
        <div className="custom-btn">
          <Link to={login === "true" ? "/" : "/login"} className="my-btn">
            Get free trial
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
