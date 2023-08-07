import React from "react";
import { Link } from "react-router-dom";
import "./courses.css";

const CardCourse = ({ _id, image, courseName, description, price }) => {
  return (
    <div className="card card-course">
      <Link
        to={`/courses/${_id}`}
        style={{ textDecoration: "none", color: "#000" }}
      >
        <img src={image} className="card-img-top" alt="Course" />
        <div className="card-body body-course">
          <h6 className="card-title title-course d-flex justify-content-between">
            <span>{courseName}</span>
            <span className="price">{price}$</span>
          </h6>
          <p className="card-text description-course">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardCourse;
