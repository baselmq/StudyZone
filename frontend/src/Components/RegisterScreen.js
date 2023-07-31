import React, { useState, useEffect } from "react";
// import LoginIcons from "./loginIcons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// I Changed Register_input to RegisterScreen
const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setComfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("auth_token")){
        navigate("/");
    }
  },[])

  const registerHandler = async (e) => {
    e.preventDefault();
    console.log("username:", username);
    console.log("email:", email);
    console.log("password:", password);
    console.log("confirmPassword:", confirmPassword);
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    if (password !== confirmPassword) {
      setPassword("");
      confirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Password do not match");
    }
    try {
      const { data } = await axios.post(
        "/api/auth/register",
        { username, email, password },
        config
      );
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("username", username);
      localStorage.setItem("login", true);
      navigate("/");
    } catch (error) {
      console.log(error.response); // Add this line to log the error response
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="login_container">
      <form className="login-form" onSubmit={registerHandler}>
        <div className="column">
          <div className="input-groups_title">
            <h1>Sign up</h1>
          </div>
          {/* username */}
          <div className="input-groups">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your Username"
              required=""
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {/* email */}
          <div className="input-groups">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email"
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* password */}
          <div className="input-groups">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              required=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* confirmPassword */}
          {/* I have changed repassword to confirm password */}
          <div className="input-groups">
            <label htmlFor="Repassword">Confirm Password</label>
            <input
              type="password"
              id="Repassword"
              name="password"
              placeholder="Enter your Password"
              required=""
              value={confirmPassword}
              onChange={(e) => setComfirmPassword(e.target.value)}
            />
          </div>
          <h6 className="error__message mt-3 text-danger">{error}</h6>
          {/* sign up button */}
          <div className="input-groups">
            <button className="btn-login m-auto" type="submit">
              Sign up
            </button>
          </div>
          {/* shifting to login in if you have account */}
          <div className="checkbox signup-link">
            <p style={{ fontSize: 18 }}>
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>
        </div>
        {/* sign up img */}
        <div className="registration_column_img"></div>
      </form>
    </div>
  );
};

export default RegisterScreen;
