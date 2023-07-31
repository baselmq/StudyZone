import React from "react";
import CardSlider from "../Components/Card_Slider";
import { Link } from "react-router-dom";
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
      <div className="container_img-slide">
        <div>
          <div className=" textBox_header_landing_page">
            <h2 className="card-title " id="title_in_bg">
              Online is now
            </h2>
            <h2>much easier</h2>
            <span className="card-text brief_bg">
              StudyZone is an interesting platform that will teach
            </span>
            <p className=" brief_bg">you in more an interactive way</p>
            <Link
              to={"/login"}
              className="btn btn-secondary "
              id="btn_landing_page"
              type="button"
            >
              Join for free
            </Link>
          </div>
        </div>
        <div></div>
      </div>
      {/* /backgroundImage&info */}
      {/* A Broad Selection Of Courses. */}
      <div className="broad_selection">
        <h4 className="color_broad_selection"> </h4>
        <span>
          StudyZone is one powerful online software suite that combines all the
          tools
        </span>
        <p>needed to run a successful school or office.</p>
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
      <div className="container text-center">
        <div className="row">
          <h2 className="section_heading_topCategories mb-5"></h2>

          <div className="col col_top_categories">
            <div className="card mx-auto card_topCategories">
              <div className="card-body">
                <div className="icon-wrapper">
                  <i className="fa-solid fa-file-invoice"></i>
                </div>
                <h5 className="card-title card_title_topCategories">
                  Customer Tracking & Attendence
                </h5>
                <p className="card-text desc_of_topCategories">
                  Schedule and reserve classroomof student attendance.
                </p>
              </div>
            </div>
          </div>
          <div className="col col_top_categories">
            <div className="card mx-auto card_topCategories">
              <div className="card-body">
                <div className="icon-wrapper">
                  <i className="fa-solid fa-calendar-days"></i>
                </div>
                <h5 className="card-title card_title_topCategories">
                  Easy Scheduling & Attendance Tracking
                </h5>
                <p className="card-text desc_of_topCategories">
                  Schedule and reserve className room of student attendance.
                </p>
              </div>
            </div>
          </div>
          <div className="col col_top_categories">
            <div className="card mx-auto card_topCategories">
              <div className="card-body">
                <div className="icon-wrapper">
                  <i className="fa-solid fa-people-group"></i>
                </div>
                <h5 className="card-title card_title_topCategories">
                  Customer Tracking & Attendence
                </h5>
                <p className="card-text desc_of_topCategories">
                  Automate and track emails to individuals or g organization and
                  track emails .
                </p>
              </div>
            </div>
          </div>
          <div className="col col_top_categories">
            <div className="card mx-auto card_topCategories">
              <div className="card-body">
                <div className="icon-wrapper">
                  <i className="fa-solid fa-calendar-days"></i>
                </div>
                <h5 className="card-title card_title_topCategories">
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
          <h2 className="What_is_StudyZone_section"></h2>
        </div>
        <div className="about_us_sz">
          <p className="what_sz_about mb-4">
            SZ is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>
        <div className="row">
          <div className="col instructor_img">
            <img
              src="Images/instructorr.jpg"
              className="aboutUs_img"
              alt="..."
            />
            <h5 className="instructor_text">FOR INSTRUCTORS</h5>
          </div>
          <div className="col instructor_img">
            <img src="Images/student.png" className="aboutUs_img" alt="..." />
            <h5 className="instructor_text">For STUDENTS</h5>
          </div>
        </div>
      </div>
      {/* what is studyZone */}

      {/* Our success */}

      <div className="container text-center our_success_container">
        <div className="container what_SZ ">
          <h2 className="our_success"></h2>
        </div>
        <div className="about_us_sz">
          <p className="what_sz_about">
            Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
            sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
            ultrices eu ornare tristique vel nisl orci.
          </p>
        </div>
      </div>
      <div className="num_of_succses">
        {success.map((success, id) => (
          <div key={id} className="text-center mx-3">
            <h1>{success.num}</h1>
            <p>{success.desc}</p>
          </div>
        ))}
      </div>

      {/* /Our success */}
    </>
  );
}

export default LandingPage;
