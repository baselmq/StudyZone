import "video.js/dist/video-js.css";
import "video.js/dist/video.js";
import "../Styles/App.css";
import Video from "./Video";
import { useState, useRef } from "react";
import Quiz from "./Quiz";

const CourseVideo = () => {
  let [display, setDisplay] = useState("");
  let [quizDisplay, setQuizDisplay] = useState("d-none");
  let videoRef = useRef(null);

  return (
    <div className="course__courses__tests container row p-4 m-auto rounded my-3">
      <div className="video__container col-12 col-xl-8" id="output-container">
        <Video display={display} videoRef={videoRef} />

        <Quiz display={quizDisplay} />
      </div>

      <div
        className="lessons__container col-12 col-xl-4 d-flex justify-content-start flex-column gap-3"
        style={{ overflow: "auto", height: "550px" }}
      >
        <h4>Course content</h4>

        <div
          className="lesson rounded d-flex justify-content-around flex-wrap p-3"
          onClick={() => {
            setDisplay("");
            setQuizDisplay("d-none");
          }}
        >
          <div className="lesson__title__logo d-flex gap-1 align-items-center">
            <div className="course__title">
              <img
                src="../Images/book.svg"
                className="mx-2 mb-1"
                width={"20px"}
                height={"20px"}
                alt="book"
              />
              <b>Lesson 1 : </b>Introduction to React.
            </div>
          </div>
          <div className="course__time my-auto">30 min</div>
        </div>

        <div
          className="lesson rounded d-flex justify-content-around flex-wrap p-3"
          onClick={() => {
            setDisplay("");
            setQuizDisplay("d-none");
          }}
        >
          <div className="lesson__title__logo d-flex gap-1 align-items-center">
            <div className="course__title">
              <img
                src="../Images/book.svg"
                className="mx-2 mb-1"
                width={"20px"}
                height={"20px"}
                alt="book"
              />
              <b>Lesson 2 : </b>Introduction to React.
            </div>
          </div>
          <div className="course__time my-auto">30 min</div>
        </div>

        <div
          className="lesson rounded d-flex justify-content-around flex-wrap p-3"
          onClick={() => {
            setDisplay("");
            setQuizDisplay("d-none");
          }}
        >
          <div className="lesson__title__logo d-flex gap-1 align-items-center">
            <div className="course__title">
              <img
                src="../Images/book.svg"
                className="mx-2 mb-1"
                width={"20px"}
                height={"20px"}
                alt="book"
              />
              <b>Lesson 3 : </b>Introduction to React.
            </div>
          </div>
          <div className="course__time my-auto">30 min</div>
        </div>

        <div
          className="lesson rounded d-flex justify-content-around flex-wrap p-3"
          onClick={() => {
            setDisplay("");
            setQuizDisplay("d-none");
          }}
        >
          <div className="lesson__title__logo d-flex gap-1 align-items-center">
            <div className="course__title">
              <img
                src="../Images/book.svg"
                className="mx-2 mb-1"
                width={"20px"}
                height={"20px"}
                alt="book"
              />
              <b>Lesson 4 : </b>Introduction to React.
            </div>
          </div>
          <div className="course__time my-auto">30 min</div>
        </div>

        <div
          className="lesson rounded d-flex justify-content-around flex-wrap p-3"
          onClick={() => {
            setDisplay("");
            setQuizDisplay("d-none");
          }}
        >
          <div className="lesson__title__logo d-flex gap-1 align-items-center">
            <div className="course__title">
              <img
                src="../Images/book.svg"
                className="mx-2 mb-1"
                width={"20px"}
                height={"20px"}
                alt="book"
              />
              <b>Lesson 5 : </b>Introduction to React.
            </div>
          </div>
          <div className="course__time my-auto">30 min</div>
        </div>

        <div
          className="lesson rounded d-flex justify-content-around flex-wrap p-3"
          onClick={() => {
            setDisplay("");
            setQuizDisplay("d-none");
          }}
        >
          <div className="lesson__title__logo d-flex gap-1 align-items-center">
            <div className="course__title">
              <img
                src="../Images/book.svg"
                className="mx-2 mb-1"
                width={"20px"}
                height={"20px"}
                alt="book"
              />
              <b>Lesson 6 : </b>Introduction to React.
            </div>
          </div>
          <div className="course__time my-auto">30 min</div>
        </div>

        <div
          className="lesson rounded d-flex justify-content-around flex-wrap p-3"
          onClick={() => {
            setDisplay("");
            setQuizDisplay("d-none");
          }}
        >
          <div className="lesson__title__logo d-flex gap-1 align-items-center">
            <div className="course__title">
              <img
                src="../Images/book.svg"
                className="mx-2 mb-1"
                width={"20px"}
                height={"20px"}
                alt="book"
              />
              <b>Lesson 7 : </b>Introduction to React.
            </div>
          </div>
          <div className="course__time my-auto">30 min</div>
        </div>

        <div
          className="lesson rounded d-flex justify-content-around flex-wrap p-3"
          onClick={() => {
            setDisplay("");
            setQuizDisplay("d-none");
          }}
        >
          <div className="lesson__title__logo d-flex gap-1 align-items-center">
            <div className="course__title">
              <img
                src="../Images/book.svg"
                className="mx-2 mb-1"
                width={"20px"}
                height={"20px"}
                alt="book"
              />
              <b>Lesson 8 : </b>Introduction to React.
            </div>
          </div>
          <div className="course__time my-auto">30 min</div>
        </div>
        <div
          className="lesson Quiz rounded d-flex justify-content-around flex-wrap p-3"
          onClick={() => {
            const video = videoRef.current;
            if (!video.paused) {
              video.pause();
            }
            setDisplay("d-none");
            setQuizDisplay("");
          }}
        >
          <div className="lesson__title__logo d-flex gap-1 align-items-center">
            <div className="course__title">
              <b>Quiz 1: </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseVideo;
