import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="d-flex flex-column empty-cart-container">
      <h4 className="pt-5 pb-4 fw-bold">Shopping Cart</h4>

      <h6 className=" ">Your cart is empty. Keep shopping to find a course!</h6>
      <Link to="/courses" className="btn-auth text-center text-decoration-none w-25">
        Keep shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
