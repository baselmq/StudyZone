import React, { useEffect, useState } from "react";
import "../css/authentication.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function checkEmail(email) {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return email.match(emailPattern);
}

function ForgotPassForm() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [status, setStatus] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (status) {
      // Redirect to the homepage when 'success' is true
      // navigate("/login"); // Replace '/' with the actual homepage path
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    }
  }, [status, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkEmail(email)) {
      //   window.location.href = "otp.html";
      try {
        const { data } = await axios.post(
          "http://localhost:8000/api/user/forgot-password",
          { email }
        );
        console.log(data);
        setSuccess(data.data);
        setStatus(data.success);
      } catch (error) {
        setError(error.response.data.error);
      }
    } else {
      setIsEmailValid(false);
    }
  };

  const handleKeyUp = (e) => {
    const email = e.target.value;
    setEmail(email);
    setIsEmailValid(true);
  };

  return (
    <>
      <Navbar />
      <body className="auth-forgot">
        <div className="container-auth center-flex">
          <h1 className="rest-password-title text-center mb-5">
            Forgot Password
          </h1>
          {/* -----------------*** form ***-----------------*** */}
          <form
            action=""
            className="form-auth center-flex"
            id="form-rest-password"
            onSubmit={handleSubmit}
          >
            {/* ---------------*** email ***---------------*** */}
            <div
              className={`field email-field ${isEmailValid ? "" : "invalid"}`}
            >
              <label htmlFor="email">Email:</label>
              <div className="input-container">
                <i className="fa-solid fa-envelope auth-icon"></i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@example.com"
                  onKeyUp={handleKeyUp}
                />
              </div>
              {!isEmailValid && (
                <span className="error email-error">
                  Please enter a valid email
                </span>
              )}
            </div>
            {/* --------------*** button ***--------------*** */}
            <button className="btn-auth btn-rest-password">
              Reset Password
            </button>
          </form>
          <div className="login-rest">
            <Link to="/login">Login</Link>
          </div>
          {error && <span className="error-message">{error}</span>}
          {success && (
            <span className="success-message mt-3 d-block">
              A confirmation message has been sent to your email
            </span>
          )}
        </div>
      </body>
      <Footer />
    </>
  );
}

export default ForgotPassForm;
