import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./RegisterScreen.css";

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
    <div className="register-screen">
      <form onSubmit={registerHandler} className="register-screen__form">
        <h3 className="register-screen__title">Register</h3>
        {error && <span className="error-message"> {error}</span>}
        {/* username */}
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            required
            id="name"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* email */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* password */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            required
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* confirm password */}
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setComfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <span className="register-screen__subtext">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default RegisterScreen;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// import "./RegisterScreen.css";

// const RegisterScreen = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();
//   useEffect(() => {
//     if (localStorage.getItem("authToken")) {
//       navigate("/");
//     }
//   }, []);

//   const registerHandler = async (e) => {
//     e.preventDefault();

//     const config = {
//       header: {
//         "Content-Type": "application/json",
//       },
//     };

//     if (password !== confirmPassword) {
//       setPassword("");
//       setConfirmPassword("");
//       setTimeout(() => {
//         setError("");
//       }, 5000);
//       return setError("password do not match");
//     }

//     try {
//       const { data } = await axios.post(
//         "/api/auth/register",
//         { username, email, password },
//         config
//       );

//       localStorage.setItem("authToken", data.token);
//       navigate("/");
//     } catch (error) {
//       setError(error.response.data.error);
//       setTimeout(() => {
//         setError("");
//       }, 5000);
//     }
//   };
//   return (
//     <div className="register-screen">
//       <form onSubmit={registerHandler} className="register-screen__form">
//         <h3 className="register-screen__title">Regsiter</h3>
//         {error && <span className="error-message">{error}</span>}
//         <div className="form-group">
//           <label htmlFor="name">username</label>
//           <input
//             type="text"
//             required
//             id="name"
//             placeholder="enter your username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">email</label>
//           <input
//             type="email"
//             required
//             id="email"
//             placeholder="enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">password</label>
//           <input
//             type="password"
//             required
//             id="password"
//             placeholder="enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="confirmpassword">confirm password</label>
//           <input
//             type="password"
//             required
//             id="confirmpassword"
//             placeholder="confirm your password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">register</button>

//         <span className="register-screen__subtext">
//           already have an account? <Link to="/login">Login</Link>{" "}
//         </span>
//       </form>
//     </div>
//   );
// };

// export default RegisterScreen;

