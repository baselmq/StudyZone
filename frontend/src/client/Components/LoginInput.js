import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginInput = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authtoken")) {
      navigate("/");
    }
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );
      localStorage.setItem("authToken", data.token);
      // localStorage.setItem("username", username);
      localStorage.setItem("login", true);

      navigate("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="login_container">
      <form className="login-form" onSubmit={loginHandler}>
        <div className="column">
          <div className="input-groups_title">
            <h1>Welcome Back!</h1>
          </div>
          {/* email */}
          <div className="input-groups">
            <label htmlFor="username">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              tabIndex={1}
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
              tabIndex={2}
            />
          </div>

          <div className="input-groups checkbox ">
            <div style={{ display: "flex", gap: 10 }}>
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div>
              <Link
                to="/forgotpassword"
                className="login-screen__forgotpassword"
                tabIndex={4}
              >
                {" "}
                Forgot Password?
              </Link>{" "}
            </div>
          </div>
          {/* if there is an error */}
          <h6 className="error__message mt-3 text-danger">{error}</h6>
          {/* login btn */}
          <div className="input-groups">
            <button className="btn-login" type="submit">
              Login
            </button>
          </div>
          {/* if you don't have an account */}
          <div className="checkbox signup-link">
            <p style={{ fontSize: 18 }}>
              Don't have an account? <Link to="/register">Sign up</Link>
            </p>
          </div>
        </div>
        <div className="login_column_img"></div>
      </form>
    </div>
  );
};

export default LoginInput;


