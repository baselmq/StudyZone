import React, { useState } from 'react';
import LoginIcons from './loginIcons';
import { Link,  useNavigate } from 'react-router-dom';


const Login_input = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const [errorMessage,setErrorMessage]= useState("");
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Check if username and password match the stored data
    let found=false;
    for(let i of userData){
      
      if (userData && i.email === username && i.password === password) {
        found=true;}
        // Valid login credentials
        if (found) {
          navigate('/');
          sessionStorage.setItem("username", username);
          sessionStorage.setItem("login", true);
        }else {
          // Invalid login credentials
          // alert('Invalid username or password');
          setErrorMessage("Invalid username or password.");
        }

        // Redirect to the desired page
        // Replace '/dashboard' with the path you want to redirect the user to after successful login
        // history.push('/dashboard');

    }


    // Clear the form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login_container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="column">
          <div className="input-groups_title">
            <h1>Welcome Back!</h1>
          </div>
          <div className="input-groups">
            <label htmlFor="username">Email</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your Username"
              required=""
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="input-groups">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              required=""
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="input-groups checkbox ">
            <div style={{ display: "flex", gap: 10 }}>
              <input type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div>
              <a href="#">Forgot password?</a>
            </div>

          </div>
          <h6 className='error__message mt-3 text-danger'>{errorMessage}</h6>

          <div className="input-groups">
            <button className="btn-login" type="submit">
              Login
            </button>
          </div>
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

export default Login_input;
