import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function checkPassword(password) {
  const passPattern =
    /^(?=.*[A-Za-z0-9@$!%*#?&\u0600-\u06FF])[A-Za-z0-9@$!%*#?&\u0600-\u06FF]{8,}$/;
  return password.match(passPattern);
}

function NewPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  let { resetToken } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordsMatch =
      password === confirmPassword && confirmPassword !== "";
    const allFieldsValid = checkPassword(password) && passwordsMatch;

    if (allFieldsValid) {
      try {
        const { data } = await axios.put(
          `http://localhost:8000/api/user/reset-password/${resetToken}`,
          {
            password,
          }
        );

        setSuccess(data.data);
      } catch (error) {
        setError(error.response.data.error);
      }
      // Perform the registration logic or redirect to another page
      //   window.location.href = "login.html";
    } else {
      setPasswordError(!checkPassword(password));
      setConfirmPasswordError(!passwordsMatch);
    }
  };

  const handleKeyUp = () => {
    setPasswordError(!checkPassword(password));
    setConfirmPasswordError(password !== confirmPassword);
  };

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else if (field === "confirm-password") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <>
      <Navbar />
      <body className="auth">
        <div className="container-auth center-flex">
          <h1 className="new-pass-title text-center mb-5">Change Password</h1>
          <form
            action=""
            className="form-auth center-flex"
            id="form-new-pass"
            onSubmit={handleSubmit}
          >
            <div
              className={`field pass-field ${passwordError ? "invalid" : ""}`}
            >
              <label htmlFor="password">Password:</label>
              <div className="input-container">
                <i className="fa-solid fa-lock auth-icon"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyUp={handleKeyUp}
                />
                <i
                  className={`fi ${
                    showPassword ? "fi-sr-eye" : "fi-sr-eye-crossed"
                  } eye-icon`}
                  onClick={() => togglePasswordVisibility("password")}
                  style={{ color: showPassword ? "#49bbbd" : "#49bbbd" }}
                ></i>
              </div>
              {passwordError && (
                <span className="error pass-error">
                  Please enter a password with at least 8 characters, including
                  numbers and symbols
                </span>
              )}
            </div>
            <div
              className={`field confirm-pass-field ${
                confirmPasswordError ? "invalid" : ""
              }`}
            >
              <label htmlFor="confirm-password">Confirm Password:</label>
              <div className="input-container">
                <i className="fa-solid fa-lock auth-icon"></i>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm-password"
                  name="confirmPassword"
                  placeholder="Enter your password again"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onKeyUp={handleKeyUp}
                />
                <i
                  className={`fi ${
                    showConfirmPassword ? "fi-sr-eye" : "fi-sr-eye-crossed"
                  } eye-icon`}
                  onClick={() => togglePasswordVisibility("confirm-password")}
                  style={{ color: showConfirmPassword ? "#49bbbd" : "#49bbbd" }}
                ></i>
              </div>
              {confirmPasswordError && (
                <span className="error confirm-pass-error">
                  Please enter the password again
                </span>
              )}
            </div>
            <button className="btn-auth btn-new-pass" type="submit">
              Reset Password
            </button>
          </form>
          {error && <span className="error-message d-block mt-3">{error} </span>}
          {success && (
            <span className="success-message d-block mt-3">
              {success} <Link to="/login" className="login-link">Login</Link>
            </span>
          )}
        </div>
      </body>
      <Footer />
    </>
  );
}

export default NewPasswordForm;
