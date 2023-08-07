import React, { useState, useEffect } from "react";
import "../css/authentication.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { isLoading, error, success, loginUser } = useLogin();

  // Email Validation
  function checkEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    setEmailError(!email.match(emailPattern));
  }

  // Password Validation
  function checkPassword() {
    setPasswordError(password === "");
  }

  // Form Submit Handler
  async function handleSubmit(e) {
    e.preventDefault();
    checkEmail();
    checkPassword();
    setFormSubmitted(true);

    if (!emailError && !passwordError) {
      loginUser(email, password);
    }
  }

  // Event listeners to trigger validation on user interactions
  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      // Redirect to the homepage when 'success' is true
      navigate("/"); // Replace '/' with the actual homepage path
      window.location.reload(); // Reload the site
    }
  }, [success, navigate]);
  useEffect(() => {
    if (formSubmitted) {
      checkEmail();
    }
  }, [email, formSubmitted]);

  useEffect(() => {
    if (formSubmitted) {
      checkPassword();
    }
  }, [password, formSubmitted]);

  return (
    <>
      <Navbar />
      <body className="auth">
        <div className="container-auth center-flex">
          <h1 className="login-title text-center mb-5">WELCOME BACK!</h1>
          <form className="form-auth center-flex" onSubmit={handleSubmit}>
            <div
              className={`field email-field ${
                formSubmitted && emailError ? "invalid" : ""
              }`}
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
              {formSubmitted && emailError && (
                <span className="error email-error">
                  Please enter a valid email
                </span>
              )}
            </div>

            <div
              className={`field pass-field ${
                formSubmitted && passwordError ? "invalid" : ""
              }`}
            >
              <label htmlFor="password">Password:</label>
              <div className="input-container">
                <i className="fa-solid fa-lock auth-icon"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i
                  className={`fi ${
                    showPassword ? "fi-sr-eye" : "fi-sr-eye-crossed"
                  } eye-icon`}
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ color: showPassword ? "#49bbbd" : "#49bbbd" }}
                ></i>
              </div>
              {formSubmitted && passwordError && (
                <span className="error pass-error">
                  Please enter a password
                </span>
              )}
            </div>

            <Link to="/forgot-password" className="forget-pass">
              Forgot Password?
            </Link>
            {/* Conditional rendering for loading and error messages */}
            <button type="submit" className="btn-auth ">
              {isLoading ? "Loading..." : "Login"}
            </button>
            {error && <span className="fetch-error">{error}</span>}
          </form>
          <div className="new-auth">
            Don't have an account?
            <Link to="/register" className="new-auth-link">
              <span> Register</span>
            </Link>
          </div>
        </div>
      </body>
      <Footer />
    </>
  );
}

export default LoginForm;
