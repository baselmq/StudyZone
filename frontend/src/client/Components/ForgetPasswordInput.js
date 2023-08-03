import { useState } from "react";
import axios from "axios";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
      <div className="login_container">
        <form onSubmit={forgotPasswordHandler} className="login-form">
          <div className="column">
            <div className="input-groups_title">
              <h1>Forgot Password</h1>
              {error && <span className="error-message">{error}</span>}
              {success && <span className="success-message">{success}</span>}
            </div>
            <div className="form-group">
              <p className="forgotpassword-screen__subtext">
                Please enter the email address you register your account with.
                We will send you reset password confirmation to this email
              </p>
              <div className="input-groups">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  required
                  id="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="input-groups">
              <button className="btn-forget mt-4" type="submit">
              Send Email
              </button>
            </div>
          </div>
          <div className="reset_column_img"></div>


        </form>
      </div>
  );
};

export default ForgotPasswordScreen;
