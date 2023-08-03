import React from "react";
import "../Styles/Cart.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import EmptyCart from "../Components/EmptyCart";

const Cart = () => {
  return (
    <>
      <h1 id="Title" class="pt-5 fw-bold">
        Shopping Cart
      </h1>
      <div
        className="d-flex flex-sm-column flex-lg-row  flex-md-row justify-content-lg-evenly  justify-content-md-evenly pt-5"
        id="main-container"
      >
        {/* if the cart is empty */}
        {/* <EmptyCart /> */}

        <div id="cart-section">
        <div id="no-of-courses" className="border-bottom fw-bold">
            2 courses in Cart
          </div> 
        {/* first course */}
        <div className="d-inline-flex flex-row justify-content-start justify-content-md-evenly justify-content-sm-evenly border-bottom pb-4 mt-4">
            <div id="col-1">
              <img
                src="../Images/course-image.jpg"
                alt="courseimage"
                className="course_image"
              />
            </div>
            <div id="col-2">
              <span className="text-wrap fw-bold">Course Name </span>
              <br />
              <span className="fs-6">By Jonas</span>
              <br />
              <span>10 lessons</span>
            </div>
            <div id="col-3" className="ms-lg-auto ms-md-auto">
              <Button className="remove-btn" variant="link">
                Remove
              </Button>
            </div>
          </div>
        {/* second course */}
        <div className="d-inline-flex flex-row justify-content-start justify-content-md-evenly justify-content-sm-evenly border-bottom pb-4 mt-4">
            <div id="col-1">
              <img
                src="../Images/course-image.jpg"
                alt="courseimage"
                className="course_image"
              />
            </div>
            <div id="col-2">
              <span className="text-wrap fw-bold">Course Name </span>
              <br />
              <span className="fs-6">By Jonas</span>
              <br />
              <span>10 lessons</span>
            </div>
            <div id="col-3" className="ms-lg-auto ms-md-auto">
              <Button className="remove-btn" variant="link">
                Remove
              </Button>
            </div>
          </div>
        </div>
        <div id="checkout-section">
          <div id="total" className="fw-bold">
            Total:
          </div>
          <span className="fw-bold fs-1">$149.98</span>
          <br />
          <Link to="/payment">
            <button id="checkout-btn" className="btnSignUp p-2">
              Checkout
            </button>
          </Link>
        </div>
       </div> 
    </>
  );
};

export default Cart;
