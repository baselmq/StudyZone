import React, { useState, useEffect } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useRegistration from "../hooks/useRegister";
const FormRegister = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { isLoading, error, success, registerUser } = useRegistration();
  // Full Name Validation
  const checkFullName = () => {
    const namePattern = /^[\p{L}]{3,}$/u;
    return formSubmitted && !fullName.match(namePattern);
  };

  // Email Validation
  const checkEmail = () => {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return formSubmitted && !email.match(emailPattern);
  };

  // Password Validation
  const checkPassword = () => {
    const passPattern =
      /^(?=.*[A-Za-z0-9@$!%*#?&\u0600-\u06FF])[A-Za-z0-9@$!%*#?&\u0600-\u06FF]{8,}$/;
    return formSubmitted && !password.match(passPattern);
  };

  // Confirm Password Validation
  const checkConfirmPass = () => {
    return (
      formSubmitted && (password !== confirmPassword || confirmPassword === "")
    );
  };
  // Event listeners to trigger validation on user interactions
  const navigate = useNavigate();
  useEffect(() => {
    if (success) {
      // Redirect to the homepage when 'success' is true
      navigate("/login"); // Replace '/' with the actual homepage path
    }
  }, [success, navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    const allFieldsValid =
      !checkFullName() &&
      !checkEmail() &&
      !checkPassword() &&
      !checkConfirmPass();

    if (allFieldsValid) {
      const username = e.target.username.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      registerUser(username, email, password);
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth my-5">
        <div className="container-auth center-flex">
          <h1 className="register-title text-center mb-4">New Account</h1>
          <form
            onSubmit={handleSubmit}
            className="form-auth center-flex"
            id="form-register"
          >
            <div
              className={`field fullName-field ${
                checkFullName() ? "invalid" : ""
              }`}
            >
              <label htmlFor="fullName">Username:</label>
              <div className="input-container">
                <i className="fa-solid fa-user auth-icon"></i>
                <input
                  type="text"
                  id="fullName"
                  name="username"
                  placeholder="Enter username"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              {formSubmitted && checkFullName() && (
                <span className="error fullName-error">
                  Please enter username
                </span>
              )}
            </div>

            <div
              className={`field email-field ${checkEmail() ? "invalid" : ""}`}
            >
              <label htmlFor="email">Email:</label>
              <div className="input-container">
                <i className="fa-solid fa-envelope auth-icon"></i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {formSubmitted && checkEmail() && (
                <span className="error email-error">
                  Please enter a valid email
                </span>
              )}
            </div>

            <div
              className={`field pass-field ${checkPassword() ? "invalid" : ""}`}
            >
              <label htmlFor="password">Password:</label>
              <div className="input-container">
                <i className="fa-solid fa-lock auth-icon"></i>
                <input
                  type={showPass ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i
                  className={`fi ${
                    showPass ? "fi-sr-eye" : "fi-sr-eye-crossed"
                  } eye-icon`}
                  onClick={() => setShowPass(!showPass)}
                ></i>
              </div>
              {formSubmitted && checkPassword() && (
                <span className="error pass-error">
                  Please enter a password with at least 8 characters, including
                  numbers and symbols
                </span>
              )}
            </div>

            <div
              className={`field confirm-pass-field ${
                checkConfirmPass() ? "invalid" : ""
              }`}
            >
              <label htmlFor="confirm-password">Confirm Password:</label>
              <div className="input-container">
                <i className="fa-solid fa-lock auth-icon"></i>
                <input
                  type={showConfirmPass ? "text" : "password"}
                  id="confirm-password"
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <i
                  className={`fi ${
                    showConfirmPass ? "fi-sr-eye" : "fi-sr-eye-crossed"
                  } eye-icon`}
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                ></i>
              </div>
              {formSubmitted && checkConfirmPass() && (
                <span className="error confirm-pass-error">
                  Please enter a matching password
                </span>
              )}
            </div>

            {/* Conditional rendering for loading and error messages */}
            <button type="submit" className="btn-auth btn-register">
              {isLoading ? "Loading..." : "Register"}
            </button>
            {error && <span className="fetch-error">{error}</span>}
          </form>
          <div className="new-auth">
            Already have an account?
            <Link to="/login" className="new-auth-link">
              Login
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FormRegister;
