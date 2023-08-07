import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "../components/navbar/Navbar";
import { CoursesCxt } from "../context/CoursesCxt";
import CardCourse from "../components/courses/CardCourse";
const Courses = () => {
  const { data, loading, error } = useContext(CoursesCxt);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (data) {
    const courses = data["data"]["courses"];

    return (
      <div>
        <Navbar />
        <div className="container">
          <h1 className="text-center mt-5">Courses</h1>

          <div className="row mt-5 pt-5">
            {courses.map((course, courseIndex) => (
              <div
                key={courseIndex}
                className="col-lg-3 col-md-6 col-sm-12 mb-4"
              >
                <CardCourse {...course} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default Courses;
