import React from "react";
import { Link } from "react-router-dom";
import "../css/index.css";
import "../css/authentication.css";
import success from "../assets/icons/success.svg";
function PaymentSuccess() {
  return (
    <div className="successPayment ">
      <img className="checkIcon" src={success} alt="success" />
      <h4 className="my-4">Your Payment Transaction was don successfully!</h4>
      <h3>Thank you for choosing Study Zone</h3>
      <Link to={"/"}>
        {" "}
        <button className="btn-auth mt-4">Return to the home page</button>
      </Link>
    </div>
  );
}

export default PaymentSuccess;
