import React, { useContext, useEffect } from "react";
import Slider from "../components/slider/Slider";
import Navbar from "../components/navbar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import CarouselCourses from "../components/courses/SliderCourses";
import Categories from "../components/categories/Categories";

import imgOne from "../assets/image/certification.png";
import imgTwo from "../assets/image/course-app.png";
import imgThree from "../assets/image/learning-languages.png";
import Footer from "../components/footer/Footer";
import { useUserData } from "../context/userCxt";
const Home = () => {
  const { userData } = useUserData();
  useEffect(() => {}, [userData]);
  const success = [
    { num: "15K", desc: "Students" },
    { num: "75%", desc: "TotalSuccess" },
    { num: "35Q", desc: "Main question" },
    { num: "26E", desc: "Chief experts" },
    { num: "16Y", desc: "Years of experience" },
  ];
  return (
    <div>
      <Navbar />
      <Slider />
      {/*A Brand Selection of Courses */}
      <section>
        <div className="d-flex justify-content-center align-items-center flex-column my-5 py-5">
          <h1 className="brand-section-text">
            <span>A Brand</span> Selection of Courses
          </h1>
          <h4 className="brand-section-sub-text text-center">
            StudyZone is one powerful online software suite that combines all
            the tools needed to run a successful school or office.
          </h4>
        </div>
        <div className="container">
          <CarouselCourses />
        </div>
      </section>

      {/*Top Categories*/}
      <section>
        <Categories />
      </section>

      {/*What is  StudyZone?*/}

      <section>
        <div className="d-flex justify-content-center align-items-center flex-column my-5 ">
          <h1 className="brand-section-text">
            <span>What is</span> StudyZone?
          </h1>
          <h4 className="brand-section-sub-text text-center">
            SZ is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </h4>
        </div>
        <div className="container">
          <div className="row">
            <div className="col m-auto">
              <img src={imgOne} alt="img1" className="image-section-about" />
            </div>
            <div className="col m-auto">
              <img src={imgTwo} alt="img2" className="image-section-about" />
            </div>
            <div className="col m-auto">
              <img src={imgThree} alt="img3" className="image-section-about" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="d-flex justify-content-center align-items-center flex-column my-5 py-5">
          <h1 className="brand-section-text">
            <span>Our</span> Success
          </h1>
          <h4 className="brand-section-sub-text text-center">
            These are just a few of the countless success stories that have
            blossomed on StudyZone. We take pride in being a catalyst for
            transformation learning experiences, enabling individuals to chase
            their dreams and achieve their aspirations.
          </h4>
        </div>
        <div className="container mb-5 pb-5">
          <div className="row gap-2">
            {success.map((success, id) => (
              <div key={id} className="col text-center custom-success">
                <h2 className="">{success.num}</h2>
                <p className="fs-5">{success.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
