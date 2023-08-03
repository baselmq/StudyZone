import React from "react";
import "../Styles/payment.css"

const Payment = () => {
  return (
    <div className="payment">
      <div className="row pay_row">
        <div className="col-75 pay_75">
          <div className="container pay_container">
            <form action="/">
              <div className="row pay_row">
                <div className="col-50 pay_50">
                  <h3>Billing Address</h3>
                  <label htmlFor="fname">
                    <i className="fa fa-user"></i> Full Name
                  </label>
                  <input
                    className="pay_input"
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Full Name"
                  />
                  <label htmlFor="email">
                    <i className="fa fa-envelope"></i> Email
                  </label>
                  <input
                  className="pay_input"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Name@example.com"
                  />
                  <label htmlFor="adr">
                    <i className="fa fa-address-card-o"></i> Address
                  </label>
                  <input
                  className="pay_input"
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="Address"
                  />
                  <label htmlFor="city">
                    <i className="fa fa-institution"></i> City
                  </label>
                  <input className="pay_input" type="text" id="city" name="city" placeholder="City" />

                  <div className="row pay_row">
                    <div className="col-50 pay_50">
                      <label htmlFor="state">State</label>
                      <input className="pay_input" type="text" id="state" name="state" placeholder="NY" />
                    </div>
                    <div className="col-50 pay_50">
                      <label htmlFor="zip">Zip</label>
                      <input className="pay_input" type="text" id="zip" name="zip" placeholder="10001" />
                    </div>
                  </div>
                </div>

                <div className="col-50 pay_50">
                  <h3>Payment</h3>
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i className="fa fa-cc-visa" style={{ color: "navy" }}></i>
                    <i className="fa fa-cc-amex" style={{ color: "blue" }}></i>
                    <i className="fa fa-cc-mastercard" style={{ color: "red" }}></i>
                    <i className="fa fa-cc-discover" style={{ color: "orange" }}></i>
                  </div>
                  <label htmlFor="cname">Name on Card</label>
                  <input
                  className="pay_input"
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="Your Name in card"
                  />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input
                  className="pay_input"
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                  />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input
                  className="pay_input"
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                  />
                  <div className="row pay_row">
                    <div className="col-50 pay_50">
                      <label htmlFor="expyear">Exp Year</label>
                      <input className="pay_input" type="text" id="expyear" name="expyear" placeholder="2018" />
                    </div>
                    <div className="col-50 pay_50">
                      <label htmlFor="cvv">CVV</label>
                      <input className="pay_input" type="text" id="cvv" name="cvv" placeholder="123" />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input
                  type="checkbox"
                  checked="checked"
                />
                Shipping address same as billing
              </label>
              <input type="submit" value="Continue to checkout" className="btn pay_btn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
