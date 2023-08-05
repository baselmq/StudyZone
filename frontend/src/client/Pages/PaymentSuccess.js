import React from "react";
import { Link } from "react-router-dom";

function PaymentSuccess() {
  return (
    <div className="successPayment ">
      <img className="checkIcon" src="/Images/SuccessfulPayment.png" alt="" />
      <h4 className="my-4">Your Payment Transation was don successfully!</h4>
      <h2>Thank you for choosing Study Zone</h2>
      <Link to={"/"}>
        {" "}
        <button className="paymentSuccess-btn mt-3">
          Return to the home page
        </button>
      </Link>
    </div>
  );
}

export default PaymentSuccess;
