import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//Card components:
//parameters:1-width 2-imgLink 3-title 4-desc 5-price 6-categoryLogo 7-category 8-hours

const Card = (props) => {
  const navigate=useNavigate();
  return (
    <div className='card d-flex gap-1 flex-column rounded-4 p-3 shadow mx-3 my-3 position-relative' style={{width:props.width ,minWidth:"250px",height:props.height}} id={props.id} onClick={()=>{navigate(`/courses/${props.id}`)
  window.location.reload()
  }}>
        <div className="img__container mb-2">
            <img className='w-100 border border-1 rounded' src={props.imgLink} alt=""  height={"250px"}/>
        </div>
        <div className='card__category__info d-flex justify-content-between flex-wrap'>
            <div className='card__category__logo d-flex gap-1 align-items-center'>
                <img width={"15px"} src={props.categoryLogo} alt="img" />
                <div className="card__category__name">{props.category}</div>
            </div>
            <div className="card__category__lessons d-flex gap-1 align-items-center">
            <img  width={"15px"} src="../../Images/time.svg" alt="" />
                <div className="card__category__time">{props.hours}</div>
            </div>
        </div>
        <h5 className='card__course__name text-center mt-2'>{props.title}</h5>
        <div className="card__course__desc text-center my-3">{props.desc}</div>
        <div className="card__course__price align-self-end fw-bold position-absolute" style={{bottom:"10px"}}>${props.price}</div>
    </div>
  );
};
//Card default values
Card.defaultProps = {
  id: 0,
  
  width: "250px",
  height: "480px",
  imgLink: "../Images/logo-black.png",
  title: "Course Title",
  desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque soluta",
  price: 32,
  categoryLogo: "../Images/design.svg",
  category: "Design",
  hours: "21 Hours",
};
export default Card;
