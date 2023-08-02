import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

import "../Styles/ResetPassword.css";

const ResetPasswordScreen = () => {
  let { resetToken } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const resetPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords don't match");
    }

    try {
      const { data } = await axios.put(
        `/api/auth/resetpassword/${resetToken}`,
        {
          password,
        },
        config
      );

      console.log(data);
      setSuccess(data.data);
    } catch (error) {
      // console.log(error);
      //setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
      <div className="login_container">
        <form onSubmit={resetPasswordHandler} className="login-form">
          <div className="column">
            <div className="input-groups_title">
              <h1>Reset Password</h1>
              {error && <span className="error-message">{error} </span>}
              {success && (
                <span className="success-message">
                  {success} <Link to="/login">Login</Link>
                </span>
              )}
            </div>
            {/* password */}

            <div className="input-groups">
              <label htmlFor="password">New Password:</label>
              <input
                type="password"
                required
                id="password"
                placeholder="Enter new password"
                autoComplete="true"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* Confirm password */}
            <div className="input-groups">
              <label htmlFor="confirmpassword">Confirm New Password:</label>
              <input
                type="password"
                required
                id="confirmpassword"
                placeholder="Confirm new password"
                autoComplete="true"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            {/* reset password button */}
            <div className="input-groups">
              <button className="btn-reset mt-4" type="submit">
                Reset Password
              </button>
            </div>
          </div>
          <div className="reset_column_img"></div>
        </form>
      </div>

  );
};

export default ResetPasswordScreen;
