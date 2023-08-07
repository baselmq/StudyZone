import React from "react";
import CourseVideo from "./CourseVideo";
import Rating from "@mui/material/Rating";

const CourseAfterPayment = ({ course }) => {
  return (
    <>
      <CourseVideo />
      <div className="course__rating_after rounded container p-3 col-12 col-md-12 col-xl-12 mx-auto row gap-5 order-2 order-xl-1 my-3">
        <h5 className="text-center">{course.courseName}</h5>
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
              className, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
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
              className, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
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
              className, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseAfterPayment;
