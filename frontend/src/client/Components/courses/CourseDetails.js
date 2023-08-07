import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { CoursesCxt } from "../../context/CoursesCxt";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "../navbar/Navbar";
import CarouselCourses from "./SliderCourses";
import Footer from "../footer/Footer";
import Rating from "@mui/material/Rating";
import ImageUser from "../navbar/ImageUser";
import image from "../../assets/image/user.png";
import { useUserData } from "../../context/userCxt";
import axios from "axios";
const CourseDetails = () => {
  const { courseId } = useParams();
  const { data } = useContext(CoursesCxt);

  const { userData } = useUserData();
  console.log(userData);

  const submitCart = (_id, courseName, price, image) => {
    axios.post("http://localhost:8000/api/user/cart", {
      id_courses: _id,
      courseName: courseName,
      price: price,
      image: image,
      id_user: userData._id,
    });
    console.log("add");
  };

  if (!data) {
    return null;
  }

  // Find the course with the matching courseId
  const course = data["data"]["courses"].find(
    (course) => course._id === courseId
  );
  if (!course) {
    return <div>Course not found.</div>;
  }

  return (
    <>
      <Navbar />
      <div className="courses-details">
        <div className="header-details-course">
          <div className="container py-5">
            <h1>{course.courseName}</h1>
            <h4 className="mt-4">{course.courseName}</h4>

            <div className="bottom-details-course mt-4 pt-2 d-flex gap-4">
              <span className="rating-details-course">
                <i class="fa-solid fa-star me-2 star"></i>
                {course.ratings} (1,348 ratings)
              </span>
              <span className="rating-details-course">
                <i class="fa-solid fa-eye me-2 eye"></i>
                Enrolled 45 students
              </span>
              <span className="rating-details-course">
                <i class="fa-solid fa-clock me-2 clock"></i>
                {course.hours}
              </span>
              <span className="rating-details-course">
                <i class="fa-regular fa-circle-play me-2 play"></i>
                36 Lesson
              </span>
            </div>
          </div>
        </div>

        {/* Right Card */}

        <div className="card-right">
          <div className="image-details-course p-3">
            <img src={course.image} alt="" />
          </div>

          <h1 className="price-details-course px-5 mt-2 d-flex align-items-center gap-4">
            ${course.price} <span>$99.99</span>
          </h1>

          <div className="discount-details d-flex align-items-center justify-content-center mt-4">
            <i class="fa-solid fa-clock me-2 clock-2"></i>
            <span>11 Hour left at this price</span>
          </div>

          <button className="btn-buyNow ms-3">Buy Now</button>
          <div
            onClick={() =>
              submitCart(
                course._id,
                course.courseName,
                course.price,
                course.image
              )
            }
            className="btn-addToCart ms-3"
            to={"/cart"}
          >
            Add to carts
          </div>

          {/* --------------------------------------------- */}
          <div className="includes-details ms-3 mt-4 pt-2">
            <span className="title">This course includes</span>

            <div className="d-flex flex-column gap-3 mt-4">
              <div className="d-flex align-items-center gap-3">
                <i class="fa-solid fa-globe icon-includes"></i>
                <span>Language - English</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <i class="fa-solid fa-computer icon-includes"></i>
                <span>Use on desktop, tablet & mobile</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <i class="fa-regular fa-clock icon-includes"></i>
                <span>Full lifetime access</span>
              </div>
              <div className="d-flex align-items-center gap-3">
                <i class="fa-solid fa-certificate icon-includes"></i>
                <span>Certificate of Completion</span>
              </div>
            </div>
          </div>

          {/* --------------------------------------------- */}
          <div className="learn-details ms-3 mt-4 pt-2">
            <span className="title">What you'll learn:</span>

            <div className="d-flex flex-column gap-3 my-4 pb-4">
              {course.whatyouwillearn.map((text, index) => (
                <div className="d-flex align-items-center gap-2" key={index}>
                  <i class="fa-solid fa-check icon-learn"></i>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="rating-card container mt-5 pt-4">
          <div className="course__rating rounded-1 p-3 col-12 col-md-12 col-xl-7 row gap-5 py-5">
            <div className="course__rating-stats mx-auto col-3 bg-white d-flex justify-content-center flex-column rounded-2 gap-3 py-4">
              <h4 className="course__rating__number text-center">
                {course.ratings} out of 5
              </h4>

              <div className="course__rating__stars text-center">
                <Rating
                  size="small"
                  name="half-rating-read"
                  defaultValue={course.ratings}
                  precision={0.5}
                  readOnly
                />
              </div>
            </div>

            <div className="course__all__ratings col-12 col-md-12 col-xl-7">
              <Stars numStat={5} />
              <Stars numStat={4} />
              <Stars numStat={3} />
              <Stars numStat={2} style={{ width: "9%" }} />
              <Stars numStat={1} style={{ width: "16%" }} />
            </div>

            <div className="course__comments col-12 col-md-12 col-xl-12">
              <Comments
                username={"alaa"}
                image={image}
                time={3}
                comment={
                  "className, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
                }
              />
              <Comments
                username={"alaa"}
                image={image}
                time={3}
                comment={
                  "className, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
                }
              />
              <Comments
                username={"alaa"}
                image={image}
                time={3}
                lastHr={true}
                comment={
                  "className, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
                }
              />
            </div>
          </div>
        </div>
      </div>
      {/* <CarouselCourses /> */}
      <Footer />
    </>
  );
};

export default CourseDetails;

const Comments = (props) => {
  return (
    <div className="course__comment__all d-flex gap-2 flex-column">
      <div className="course__comment__info d-flex justify-content-between align-items-center">
        <div className="profile__comment d-flex align-items-center gap-3">
          <ImageUser image={props.image} width={40} />
          <div className="user__name__comment text-black">{props.username}</div>
        </div>
        <div className="course__user__time d-flex align-items-center">
          <i class="fa-solid fa-clock me-2 clock-2"></i>

          <div className="time__value small">{props.time}hours</div>
        </div>
      </div>
      <div className="small ps-5">{props.comment}</div>
      {props.lastHr ? <p></p> : <hr />}
    </div>
  );
};

const Stars = ({ numStat, style }) => {
  return (
    <div className="course__star d-flex gap-4 mb-2">
      <div className="stars__bar__title small">{numStat} Stars</div>
      <div className="rating__bar my-auto">
        <div className="rating__bar__filled my-auto" style={style}></div>
      </div>
    </div>
  );
};
