import React, { useState, useEffect } from "react";
import "../css/authentication.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useNavigate } from "react-router-dom";

function PaymentForm() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [nameError, setNameError] = useState(true);
  const [cardNumberError, setCardNumberError] = useState(true);
  const [expiryDateError, setExpiryDateError] = useState(true);
  const [cvvError, setCvvError] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  let navigate = useNavigate();

  // Name Validation
  function checkName() {
    const namePattern = /^[A-Za-z\s.'\-À-ÿ]+$/;
    setNameError(!name.match(namePattern));
  }

  // Credit Card Number Validation
  function checkCardNumber() {
    const cardNumberPattern = /^\d{13,19}$/;

    setCardNumberError(!cardNumber.match(cardNumberPattern));
  }

  // Expiry date Validation
  function checkExpiryDate() {
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/(2[2-9]|[3-9]\d|\d{4})$/;

    setExpiryDateError(!expiryDate.match(expiryDatePattern));
  }

  // CVV Validation
  function checkCvv() {
    const cvvPattern = /^\d{3,4}$/;
    setCvvError(!cvv.match(cvvPattern));
  }

  // Form Submit Handler

  const handleSubmit = (event) => {
    event.preventDefault();
    checkName();
    checkCardNumber();
    checkExpiryDate();
    checkCvv();
    setFormSubmitted(true);

    // Only navigate to .paymentSuccess if the inputs are valid
    if (!nameError && !cardNumberError && !expiryDateError && !cvvError) {
      navigate("/payment-success");
    }
  };

  // Event listeners to trigger validation on user interactions
  useEffect(() => {
    if (formSubmitted) {
      checkName();
    }
  }, [name, formSubmitted]);

  useEffect(() => {
    if (formSubmitted) {
      checkCardNumber();
    }
  }, [cardNumber, formSubmitted]);

  useEffect(() => {
    if (formSubmitted) {
      checkExpiryDate();
    }
  }, [expiryDate, formSubmitted]);

  useEffect(() => {
    if (formSubmitted) {
      checkCvv();
    }
  }, [cvv, formSubmitted]);

  return (
    <>
      <Navbar />
      <body className="auth">
        <div className="container-auth center-flex">
          <h1 className="login-title text-center mb-5">Payment Details</h1>
          <form className="form-auth center-flex" onSubmit={handleSubmit}>
            {/* Name on card */}
            <div
              className={`field email-field ${
                formSubmitted && nameError ? "invalid" : ""
              }`}
            >
              <label htmlFor="name">Name on card</label>
              <div className="input-container">
                <i className="fa-solid fa-envelope auth-icon"></i>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="enter your name as written on your card"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              {formSubmitted && nameError && (
                <span className="error email-error">
                  enter your name as written on your card
                </span>
              )}
            </div>
            {/* Credit Card Number */}
            <div
              className={`field email-field ${
                formSubmitted && cardNumberError ? "invalid" : ""
              }`}
            >
              <label htmlFor="name">Credit Card Number</label>
              <div className="input-container">
                <i className="fa-solid fa-envelope auth-icon"></i>
                <input
                  placeholder="XXXX XXXX XXXX XXXX"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                />
              </div>
              {formSubmitted && cardNumberError && (
                <span className="error email-error">
                  enter Credit card number which consists from 16 digets
                </span>
              )}
            </div>

            <div className="row">
              {/* Expiry date */}
              <div className="col-6">
                <div
                  className={`field email-field ${
                    formSubmitted && setExpiryDateError ? "invalid" : ""
                  }`}
                >
                  <label htmlFor="name">Expiry Date</label>
                  <div className="input-container">
                    <i className="fa-solid fa-envelope auth-icon"></i>
                    <input
                      placeholder="MM/YY"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      required
                    />
                  </div>
                  {formSubmitted && expiryDateError && (
                    <span className="error email-error">
                      Enter your card Expiry Date
                    </span>
                  )}
                </div>
              </div>
              {/* CVV */}
              <div className="col-6">
                <div
                  className={`field email-field ${
                    formSubmitted && setCvvError ? "invalid" : ""
                  }`}
                >
                  <label htmlFor="name">CVV</label>
                  <div className="input-container">
                    <i className="fa-solid fa-envelope auth-icon"></i>
                    <input
                      placeholder="3-digets number"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      required
                    />
                  </div>
                  {formSubmitted && cvvError && (
                    <span className="error email-error">
                      Enter your card Expiry Date
                    </span>
                  )}
                </div>
              </div>
            </div>

            <button className="btn-auth" type="submit">
              Make Payment
            </button>
          </form>
        </div>
      </body>
      <Footer />
    </>
  );
}

export default PaymentForm;
