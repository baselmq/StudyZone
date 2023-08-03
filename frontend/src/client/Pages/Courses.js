import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import { Link, useParams } from "react-router-dom";
import CardSlider from "../Components/Card_Slider";
import CoursesInfo from "../data/CoursesInfo";

const Courses = () => {
  const [filters, setFilters] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const { category } = useParams();

  // Update the filter value when the category changes
  useEffect(() => {
    if (category) {
      setFilters(category);
    }
  }, [category]);

  // Filter function to filter the courses according to category
  const filterCourses = (category) => {
    setFilters(category);
  };

  const filteredCourses = CoursesInfo.filter((course) => {
    return course.category === filters;
  });

  const sortedCourses = CoursesInfo.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.price - b.price; // Sort in ascending order price
    } else {
      return b.price - a.price; // Sort in descending order price
    }
  });

  return (
    <>
      <div className="container my-5">
        <div className="courses--heading">
          <h3 className="courses--left">Our Courses</h3>
          <div className="dropdown courses--filterbtn">
            <button
              className="btn"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-sliders"></i> Filter
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link
                  onClick={() => filterCourses("programming")}
                  className="dropdown-item"
                  href="#"
                >
                  Programming
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => filterCourses("Marketing")}
                  className="dropdown-item"
                  href="#"
                >
                  Marketing
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => filterCourses("Design")}
                  className="dropdown-item"
                  href="#"
                >
                  Design
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                  }}
                  className="dropdown-item"
                  href="#"
                >
                  Price(<i className="bi bi-arrow-up"></i>
                  <i className="bi bi-arrow-down">)</i>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="cards--container">
        {filters
            ? filteredCourses.map((course) => (
                <Card
                  id={course.id}
                  key={course.id}
                  width="300px"
                  imgLink={course.image}
                  title={course.courseName}
                  desc={course.description}
                  price={course.price}
                  categoryLogo={course.categoryLogo}
                  category={course.category}
                  hours={course.hours}
                />
              ))
            : sortedCourses.map((course) => (
                <Card
                  id={course.id}
                  key={course.id}
                  width="300px"
                  imgLink={course.image}
                  title={course.courseName}
                  desc={course.description}
                  price={course.price}
                  categoryLogo={course.categoryLogo}
                  category={course.category}
                  hours={course.hours}
                />
              ))}
        </div>
      </div>
      <div className="courses--recommended--background">
        <div className="container courses--recommended--heading">
          <h4 className="p-2">
            <b>Recommended for you</b>
          </h4>
        </div>
        <div className="container courses--recommended">
          <CardSlider />
        </div>
      </div>
    </>
  );
};

export default Courses;
