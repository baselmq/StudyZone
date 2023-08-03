import Card from './Card';
import React from 'react';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import CoursesInfo from '../data/CoursesInfo';
const handleDragStart = (e) => e.preventDefault();

let list= CoursesInfo.slice(0,8).map((course) => (
  <div className='m-auto w-100 d-flex justify-content-center' onDragStart={handleDragStart}>
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
    </div>

    ))

    console.log(list)

const CardSlider = () => {
  const responsive = {
    0: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1200: { items: 4 }
  };

  const items = list


  const nextButton = ({ isDisabled }) => (
    <button style={{border: "50%"}}
      className="next-btn"
      disabled={isDisabled}
      aria-label="Next Slide">
      <img width={"25px"} height={"25px"} src="../Images/next.svg" alt="next" />
    </button>
  );

  const prevButton = ({ isDisabled }) => (
    <button
      className="prev-btn"
      disabled={isDisabled}
      aria-label="Next Slide"
    >
      <img width={"25px"} height={"25px"} src="../Images/prev.svg" alt="prev" />
    </button>
  );

  return (
    <AliceCarousel
      disableDotsControls={true}
      infinite={true}
      items={items}
      responsive={responsive}
      renderNextButton={nextButton}
      renderPrevButton={prevButton}
    />
  );
}

export default CardSlider;
