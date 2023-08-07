import React from "react";
import Carousel from "./Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js'
import "./slider.css";
const Slider = () => {
  const title = [
    "Online is now much easier StudyZone is an interesting platform that will teach you in more an interactive way",
    "Embark on Your Learning Journey with Our Engaging Courses",
    "Empower Yourself with Knowledge: Join Our Cutting-Edge Courses",
  ];
  return (
    <div className="slider">
      <div
        id="hero-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <Carousel title={title[0]} class={"overlay-image cover-2"} />
          <Carousel title={title[1]} class={"overlay-image cover-1"} />
          <Carousel title={title[2]} class={"overlay-image cover-3"} />
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#hero-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
