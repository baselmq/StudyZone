import React from "react";
import "../Styles/Cart.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Link } from "react-router-dom";

const emptyCart = () => {
  return (
    <div className="d-flex flex-column empty-cart-container px-4">
        <h1 class="pt-5 pb-4 fw-bold">
        Shopping Cart
      </h1>
      <div id="empty-cart-no-of-courses" className="border-bottom fw-bold">
        0 courses in Cart
      </div>
      <h3 className="pt-5 text-center">
        Your cart is empty. Keep shopping to find a course!
      </h3>
      <Link to="/courses">
        <button id="keep-shopping-btn" className="btnSignUp p-2 mt-3 text-nowrap">
          Keep shopping
        </button>
      </Link>
    </div>
  );
};

export default emptyCart;
