import React, { useContext } from "react";
import CardSlider from "../Components/Card_Slider";
import { Link } from "react-router-dom";
import jumbotron from "../assets/images/jumbotron.png";
import certification from "../assets/images/Certification-rafiki.png";
import courseapp from "../assets/images/Course app.png";
import { AuthCxt } from "../context/AuthContext";

function LandingPage() {
  const success = [
    { num: "15K", desc: "Students" },
    { num: "75%", desc: "TotalSuccess" },
    { num: "35Q", desc: "Main question" },
    { num: "26E", desc: "Chief experts" },
    { num: "16Y", desc: "Years of experience" },
  ];

  return (
    <>
      {/* backgroundImage&info */}
      <div className="jumbtron-container">
        <div id="first-col">
          <h3 className="mb-4">
            <span className="fw-bold fs-1" id="online">
              Online
            </span>{" "}
            is now much easier
          </h3>
          <h3 className="text-wrap mb-5">
            StudyZone is an interesting platform that will teach you in more an
            interactive way
          </h3>
          <Link
            to={"/login"}
            className="btn btn-secondary fs-4"
            id="btn_landing_page"
            type="button"
          >
            Join for free
          </Link>
        </div>
        <div id="second-col">
          <img src={jumbotron} alt="jumbotron" width="100%" />
        </div>
      </div>
      {/* /backgroundImage&info */}
      {/* A Broad Selection Of Courses. */}

      <div className="broad_selection">
        <h1 className="color_broad_selection"> </h1>
        <span className="fs-4">
          StudyZone is one powerful online software suite that combines all the
          tools
        </span>
        <p className="fs-4">needed to run a successful school or office.</p>
      </div>
      {/*/ A Broad Selection Of Courses. */}

      {/* All courses  */}

      <div className="container">
        <Link to="/courses" className="btn btn-secondary" id="btn_landing_page">
          {" "}
          All Courses
        </Link>
        <CardSlider />
      </div>

      {/* /All courses  */}

      {/* /Top Categories  */}
      <div className="container text-center" id="top-categories">
        <div className="row">
          <h1 className="section_heading_topCategories mb-5"></h1>

          <div className="col-lg-3 col-md-6 col-sm-4  col_top_categories">
            <div className="card mx-auto card_topCategories">
              <div className="card-body">
                <div className="icon-wrapper">
                  <i className="fa-solid fa-file-invoice"></i>
                </div>
                <h5 className="card-title card_title_topCategories fw-bold py-2">
                  Customer Tracking & Attendence
                </h5>
                <p className="card-text desc_of_topCategories">
                  Schedule and reserve classroomof student attendance.
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3 col-md-6 col-sm-4 col_top_categories">
            <div className="card mx-auto card_topCategories">
              <div className="card-body">
                <div className="icon-wrapper">
                  <i className="fa-solid fa-calendar-days"></i>
                </div>
                <h5 className="card-title card_title_topCategories fw-bold py-2">
                  Easy Scheduling & Attendance Tracking
                </h5>
                <p className="card-text desc_of_topCategories">
                  Schedule and reserve className room of student attendance.
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3 col-md-6 col-sm-4 col_top_categories">
            <div className="card mx-auto card_topCategories">
              <div className="card-body">
                <div className="icon-wrapper">
                  <i className="fa-solid fa-people-group"></i>
                </div>
                <h5 className="card-title card_title_topCategories fw-bold py-2">
                  Customer Tracking & Attendence
                </h5>
                <p className="card-text desc_of_topCategories">
                  Automate and track emails to individuals or g organization and
                  track emails .
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3 col-md-6 col-sm-4 col_top_categories">
            <div className="card mx-auto card_topCategories">
              <div className="card-body">
                <div className="icon-wrapper">
                  <i className="fa-solid fa-calendar-days"></i>
                </div>
                <h5 className="card-title card_title_topCategories fw-bold py-2">
                  Easy Scheduling & Attendance Tracking
                </h5>
                <p className="card-text desc_of_topCategories">
                  Schedule and reserve classroomof student attendance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Categories  */}
      {/* what is studyZone */}

      <div className="container text-center sz_ctn">
        <div className="what_SZ">
          <h1 className="What_is_StudyZone_section"></h1>
        </div>
        <div className="about_us_sz">
          <p className="what_sz_about mb-4 fs-5">
            SZ is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>
        <img src={certification} alt="Certification" width="40%" />
        <img src={courseapp} alt="Certification" width="40%" />
      </div>
      {/* what is studyZone */}

      {/* Our success */}

      <div className="container text-center our_success_container">
        <div className="container what_SZ ">
          <h1 className="our_success"></h1>
        </div>
        <div className="about_us_sz">
          <p className="what_sz_about fs-5">
            These are just a few of the countless success stories that have
            blossomed on StudyZone. We take pride in being a catalyst for
            transformative learning experiences, enabling individuals to chase
            their dreams and achieve their aspirations.
          </p>
        </div>
      </div>
      <div className="num_of_succses">
        {success.map((success, id) => (
          <div key={id} className="text-center mx-3">
            <h1 className="">{success.num}</h1>
            <p className="fs-4 fw-bold">{success.desc}</p>
          </div>
        ))}
      </div>

      {/* /Our success */}
    </>
  );
}

export default LandingPage;
