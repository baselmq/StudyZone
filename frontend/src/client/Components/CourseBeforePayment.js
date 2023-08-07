import React from "react";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router";
<<<<<<< HEAD

=======
>>>>>>> 8553f7426dba1d7157c16549f5726d28525c6108
const CourseBeforePayment = ({ course }) => {
  let navigate = useNavigate();
  return (
    <>
      <div className="course__details__background">
        <img className="w-100" src="..\Images\background.jpg" alt="img" />
      </div>

      <div className="course__details container row m-auto my-4 ">
        <div className="course__rating rounded p-3 col-12 col-md-12 col-xl-7 mx-auto row gap-5 order-2 order-xl-1">
          <div className="course__rating-stats mx-auto col-3 bg-white d-flex justify-content-center flex-column gap-3 rounded-2 py-4">
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
            <div className="course__star d-flex gap-4 mb-2">
              <div className="stars__bar__title small">5 Stars</div>
              <div className="rating__bar my-auto">
                <div className="rating__bar__filled my-auto"></div>
              </div>
            </div>
            <div className="course__star d-flex gap-4 mb-2">
              <div className="stars__bar__title small">4 Stars</div>
              <div className="rating__bar my-auto">
                <div className="rating__bar__filled my-auto w-75"></div>
              </div>
            </div>
            <div className="course__star d-flex gap-4 mb-2">
              <div className="stars__bar__title small">3 Stars</div>
              <div className="rating__bar my-auto">
                <div className="rating__bar__filled my-auto w-25"></div>
              </div>
            </div>
            <div className="course__star d-flex gap-4 mb-2">
              <div className="stars__bar__title small">2 Stars</div>
              <div className="rating__bar my-auto">
                <div
                  className="rating__bar__filled my-auto"
                  style={{ width: "9%" }}
                ></div>
              </div>
            </div>
            <div className="course__star d-flex gap-4">
              <div className="stars__bar__title small">1 Stars</div>
              <div className="rating__bar my-auto">
                <div
                  className="rating__bar__filled my-auto"
                  style={{ width: "16%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="course__comments col-12 col-md-12 col-xl-12">
            <div className="course__comment__all d-flex gap-2 flex-column">
              <div className="course__comment__info d-flex justify-content-between align-items-center">
                <div className="profile__comment d-flex align-items-center gap-1">
                  <img
                    src="..\Images\profile.png"
                    alt=""
                    className="profile__img rounded"
                    style={{ width: "45px" }}
                  />
                  <div className="user__name__comment fw-bold text-black">
                    User
                  </div>
                </div>
                <div className="course__user__time d-flex align-items-center gap-1">
                  <img
                    src="..\Images\time.svg"
                    alt=""
                    className="comment__time"
                    style={{ width: "20px" }}
                  />
                  <div className="time__value small">3 hours</div>
                </div>
              </div>
              <div>
<<<<<<< HEAD
                className, launched less than a year ago by Blackboard
                co-founder Michael Chasen, integrates exclusively...
=======
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
>>>>>>> 8553f7426dba1d7157c16549f5726d28525c6108
              </div>
              <hr />
            </div>
            <div className="course__comment__all d-flex gap-2 flex-column">
              <div className="course__comment__info d-flex justify-content-between align-items-center">
                <div className="profile__comment d-flex align-items-center gap-1">
                  <img
                    src="..\Images\profile.png"
                    alt=""
                    className="profile__img rounded"
                    style={{ width: "45px" }}
                  />
                  <div className="user__name__comment fw-bold text-black">
                    User
                  </div>
                </div>
                <div className="course__user__time d-flex align-items-center gap-1">
                  <img
                    src="..\Images\time.svg"
                    alt=""
                    className="comment__time"
                    style={{ width: "20px" }}
                  />
                  <div className="time__value small">3 hours</div>
                </div>
              </div>
              <div>
<<<<<<< HEAD
                className, launched less than a year ago by Blackboard
                co-founder Michael Chasen, integrates exclusively...
=======
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
>>>>>>> 8553f7426dba1d7157c16549f5726d28525c6108
              </div>
              <hr />
            </div>
            <div className="course__comment__all d-flex gap-2 flex-column">
              <div className="course__comment__info d-flex justify-content-between align-items-center">
                <div className="profile__comment d-flex align-items-center gap-1">
                  <img
                    src="..\Images\profile.png"
                    alt=""
                    className="profile__img rounded"
                    style={{ width: "45px" }}
                  />
                  <div className="user__name__comment fw-bold text-black">
                    User
                  </div>
                </div>
                <div className="course__user__time d-flex align-items-center gap-1">
                  <img
                    src="..\Images\time.svg"
                    alt=""
                    className="comment__time"
                    style={{ width: "20px" }}
                  />
                  <div className="time__value small">3 hours</div>
                </div>
              </div>
              <div>
<<<<<<< HEAD
                className, launched less than a year ago by Blackboard
                co-founder Michael Chasen, integrates exclusively...
=======
                Class, launched less than a year ago by Blackboard co-founder
                Michael Chasen, integrates exclusively...
>>>>>>> 8553f7426dba1d7157c16549f5726d28525c6108
              </div>
            </div>
          </div>
        </div>

        <div
          className="course__info col-4 col-sm-4 col-md-4 border order-1 order-xl-2 mb-4 mx-auto bg-white rounded-4 p-3 border-0 shadow"
          style={{ marginTop: "-12%" }}
        >
          <div className="course__img">
            <img src={course.image} alt="img" width={"100%"} height={"300px"} />
          </div>
          <h3 className="course__name text-dark mt-1">{course.courseName}</h3>
          <div className="course__desc">{course.description}</div>
          <h2 className="price text-black fw-bold my-3 ms-1">
            ${course.price}
          </h2>
          <button
            className="buy__button btn btn-info"
            onClick={() => {
              console.log(sessionStorage.getItem("login") === "true");
              if (sessionStorage.getItem("login") === "true") {
                sessionStorage.setItem("coursePayed", true);
                window.location.reload();
              } else {
<<<<<<< HEAD
                navigate("/payment");
=======
                navigate("/cart");
>>>>>>> 8553f7426dba1d7157c16549f5726d28525c6108
              }
            }}
          >
            Buy Now
          </button>
          <hr />
          <div className="course__payment__info d-flex flex-column gap-3">
            <h5 className="text-dark fw-bold">This Course includes :</h5>
            <div className="course__payment d-flex gap-2">
              <img
                width={"25px"}
                height={"25px"}
                src="..\Images\icon1.svg"
                alt="icon"
              />
              <div className="fw-bold">Money Back Guarantee</div>
            </div>
            <div className="course__payment d-flex gap-2">
              <img
                width={"25px"}
                height={"25px"}
                src="..\Images\camera.svg"
                alt="icon"
              />
              <div className="fw-bold">Access on all devices</div>
            </div>
            <div className="course__payment d-flex gap-2">
              <img
                width={"25px"}
                height={"25px"}
                src="..\Images\certificate.svg"
                alt="icon"
              />
              <div className="fw-bold">Certification of completion</div>
            </div>
            <div className="course__payment d-flex gap-2">
              <img
                width={"25px"}
                height={"25px"}
                src="..\Images\time_green.svg"
                alt="icon"
              />
              <div className="fw-bold">{course.hours}</div>
            </div>
            <div className="course__payment d-flex gap-2">
              <img
                width={"25px"}
                height={"25px"}
                src="..\Images\language.svg"
                alt="icon"
              />
              <div className="fw-bold">{course.language}</div>
            </div>
          </div>

          <hr />
          <div className="course__knowledge d-flex flex-column gap-2">
            <h5 className="course__learn text-dark fw-bold">
              What you'll learn :
            </h5>
            <div className="course__learning__points d-flex flex-column gap-3">
              <div className="course__learning d-flex gap-2">
                <img
                  width={"25px"}
                  height={"25px"}
                  src="..\Images\check.svg"
                  alt="icon"
                />
                <div className="fw-bold">{course.whatyouwillearn[0]}</div>
              </div>

              <div className="course__learning d-flex gap-2">
                <img
                  width={"25px"}
                  height={"25px"}
                  src="..\Images\check.svg"
                  alt="icon"
                />
                <div className="fw-bold">{course.whatyouwillearn[1]}</div>
              </div>

              <div className="course__learning d-flex gap-2">
                <img
                  width={"25px"}
                  height={"25px"}
                  src="..\Images\check.svg"
                  alt="icon"
                />
                <div className="fw-bold">{course.whatyouwillearn[2]}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseBeforePayment;
