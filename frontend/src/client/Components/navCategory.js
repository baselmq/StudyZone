import React from "react";
import { CoursesInfo } from "../data/CoursesInfo";
import { Link } from "react-router-dom";
function NavCategory() {
  const categories = [...new Set(CoursesInfo.map((course) => course.category))];

  return (
    <>
      <li className="nav_dropdowns">
        <a href="#">
          Category{" "}
          <svg
            className="icon"
            width="14"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z" />
          </svg>
        </a>

        <ul className="nav_category_dropdown">
          {categories.map((category) => (
            <li key={category}>
              <Link to={`/category/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
}

export default NavCategory;
