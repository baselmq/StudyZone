import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./courses.css";
import CardCourse from "./CardCourse";
import { CoursesCxt } from "../../context/CoursesCxt";

const CarouselCourses = () => {
  const [screenSize, setScreenSize] = useState("");
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [listData, setListData] = useState([]);
  const { data, loading, error } = useContext(CoursesCxt);

  const getScreenSize = () => {
    const width = window.innerWidth;
    if (width >= 1200) {
      setScreenSize("large");
    } else if (width >= 992) {
      setScreenSize("medium");
    } else if (width < 576) {
      setScreenSize("ExtraSmall");
    } else {
      setScreenSize("small");
    }
  };

  useEffect(() => {
    getScreenSize();
    window.addEventListener("resize", getScreenSize);

    return () => {
      window.removeEventListener("resize", getScreenSize);
    };
  }, []);

  useEffect(() => {
    if (data) {
      const courses = data["data"]["courses"];

      const chunkCourses = (courses, chunkSize) => {
        const chunkedCourses = [];
        for (let i = 0; i < courses.length; i += chunkSize) {
          chunkedCourses.push(courses.slice(i, i + chunkSize));
        }
        return chunkedCourses;
      };

      const chunkedCoursesLg = chunkCourses(courses, 4);
      const chunkedCoursesMd = chunkCourses(courses, 3);
      const chunkedCoursesSm = chunkCourses(courses, 2);
      const chunkedCoursesEsm = chunkCourses(courses, 1);

      let listData =
        screenSize === "large"
          ? chunkedCoursesLg
          : screenSize === "medium"
          ? chunkedCoursesMd
          : screenSize === "ExtraSmall"
          ? chunkedCoursesEsm
          : chunkedCoursesSm;

      // Check if the active item index is out of range after resizing
      setActiveItemIndex((prevIndex) => {
        return prevIndex >= listData.length ? listData.length - 1 : prevIndex;
      });

      setListData(listData);
    }
  }, [screenSize, data]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (data) {
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner custom-carousel-inner">
          {listData.map((courseChunk, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === activeItemIndex ? "active" : ""
              }`}
            >
              <div className="row cards-wrapper">
                {courseChunk.map((course, courseIndex) => (
                  <div key={courseIndex} className="col">
                    <CardCourse {...course} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev custom-carousel-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next custom-carousel-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
  return null;
};

export default CarouselCourses;

// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "./courses.css";
// import image from "../../assets/image/Lp_flutter.svg";
// const Card = ({ imgSrc, title, description }) => {
//   return (
//     <div className="card">
//       <img src={imgSrc} className="card-img-top" alt="Course" />
//       <div className="card-body">
//         <h5 className="card-title">{title}</h5>
//         <p className="card-text">{description}</p>
//         <a href="#" className="btn btn-primary">
//           Go somewhere
//         </a>
//       </div>
//     </div>
//   );
// };

// const CarouselCourses = () => {
//   const [screenSize, setScreenSize] = useState("");

//   const getScreenSize = () => {
//     const width = window.innerWidth;
//     if (width >= 1200) {
//       setScreenSize("large");
//     } else if (width >= 992) {
//       setScreenSize("medium");
//     } else {
//       setScreenSize("small");
//     }
//   };

//   useEffect(() => {
//     getScreenSize();
//     window.addEventListener("resize", getScreenSize);

//     return () => {
//       window.removeEventListener("resize", getScreenSize);
//     };
//   }, []);
//   const courses = [
//     {
//       imgSrc: image,
//       title: "Course 1",
//       description: "Description for Course 1",
//     },
//     {
//       imgSrc: image,
//       title: "Course 2",
//       description: "Description for Course 2",
//     },
//     {
//       imgSrc: image,
//       title: "Course 3",
//       description: "Description for Course 3",
//     },
//     {
//       imgSrc: image,
//       title: "Course 4",
//       description: "Description for Course 1",
//     },
//     {
//       imgSrc: image,
//       title: "Course 5",
//       description: "Description for Course 2",
//     },
//     {
//       imgSrc: image,
//       title: "Course 6",
//       description: "Description for Course 3",
//     },
//     {
//       imgSrc: image,
//       title: "Course 7",
//       description: "Description for Course 3",
//     },
//     {
//       imgSrc: image,
//       title: "Course 8",
//       description: "Description for Course 3",
//     },
//     // Add more courses as needed
//   ];
//   const chunkCourses = (courses, chunkSize) => {
//     const chunkedCourses = [];
//     for (let i = 0; i < courses.length; i += chunkSize) {
//       chunkedCourses.push(courses.slice(i, i + chunkSize));
//     }
//     return chunkedCourses;
//   };

//   const chunkedCoursesLg = chunkCourses(courses, 4);
//   const chunkedCoursesMd = chunkCourses(courses, 2);
//   const chunkedCoursesSm = chunkCourses(courses, 1);
//   let listData =
//     screenSize === "large"
//       ? chunkedCoursesLg
//       : screenSize === "medium"
//       ? chunkedCoursesMd
//       : chunkedCoursesSm;
//   return (
//     <div
//       id="carouselExampleControls"
//       className="carousel slide"
//       data-bs-ride="carousel"
//     >
//       <div className="carousel-inner custom-carousel-inner">
//         {listData.map((course, index) => (
//           <div
//             key={index}
//             className={`carousel-item ${index === 0 ? "active" : ""}`}
//           >
//             {screenSize === "large" ? (
//               <div className="row cards-wrapper">
//                 <div className="col">
//                   <Card {...course[0]} />
//                 </div>
//                 <div className="col">
//                   <Card {...course[1]} />
//                 </div>
//                 <div className="col">
//                   <Card {...course[2]} />
//                 </div>
//                 <div className="col">
//                   <Card {...course[3]} />
//                 </div>
//               </div>
//             ) : screenSize === "medium" ? (
//               <div className="row cards-wrapper">
//                 <div className="col">
//                   <Card {...course[0]} />
//                 </div>
//                 <div className="col">
//                   <Card {...course[1]} />
//                 </div>
//               </div>
//             ) : (
//               <div className="row cards-wrapper">
//                 <div className="col">
//                   <Card {...course[0]} />
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//       <button
//         className="carousel-control-prev custom-carousel-prev"
//         type="button"
//         data-bs-target="#carouselExampleControls"
//         data-bs-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button
//         className="carousel-control-next custom-carousel-next"
//         type="button"
//         data-bs-target="#carouselExampleControls"
//         data-bs-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };

// export default CarouselCourses;
