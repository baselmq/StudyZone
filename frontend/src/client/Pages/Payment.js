import React from "react";
import "../Styles/App.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Payment = () => {
  let navigate = useNavigate();
  return (
    <div className="login_container">
      <form className="login-form">
        <div className="column">
          <div className="input-groups_title">
            <h1>Payment details</h1>
          </div>
          {/* Name */}
          <div className="input-groups">
            <label htmlFor="username">Name on card</label>
            <input
              type="text"
              id="text"
              name="text"
              placeholder="Enter your name as appearing on your card"
              required=""
            />
          </div>
          {/* Card number */}
          <div className="input-groups">
            <label htmlFor="number">Credit Card Number</label>
            <input
              type="text"
              id="number"
              name="number"
              placeholder="XXXX XXXX XXXX XXXX"
              required=""
              maxLength="16"
            />
          </div>
          {/* date & cvv */}
          <div className="input-groups expiry-cvv">
            <div>
              <label htmlFor="expiry-date">Expiry Date:</label>
              <input
                type="text"
                id="expiry-date"
                name="expiry-date"
                placeholder="MM/YY"
                maxLength="5"
                required
              />
            </div>

            <div className="">
              <label htmlFor="number">CVV</label>
              <input
                type="text"
                id="text"
                name="text"
                placeholder="3-number digets"
                maxLength="3"
                required=""
              />
            </div>
          </div>

          <div className="input-groups checkbox ">
            <div style={{ display: "flex", gap: 10 }}>
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">I've a promo code</label>
            </div>
          </div>

          <div className="d-flex justify-content-between input-groups">
            <div>Subtotal</div>
            <div>$ 96</div>
          </div>
          <div className="d-flex justify-content-between input-groups">
            <div>Tax</div>
            <div>$ 4</div>
          </div>
          <div className="line input-groups"></div>
          <div className="d-flex justify-content-between input-groups ">
            <h5>Total</h5>
            <h5>$ 100</h5>
          </div>

          {/* payment btn */}
          <div className="input-groups">
            <Link to={"/paymentSuccess"}>
              {" "}
              <button className="btn-login mb-1" type="submit">
                Make Payment
              </button>
            </Link>
            
          </div>
        </div>
        <div className="payment_column_img"></div>
      </form>
    </div>
  );
};

export default Payment;
