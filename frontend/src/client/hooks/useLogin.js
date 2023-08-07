// useRegistration.js
import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [cookie, setCookie] = useCookies("access_token");

  const loginUser = async (email, password) => {
    const data = {
      email: email,
      password: password,
    };

    try {
      setIsLoading(true);
      setError(null);

      // Send a POST request to the server with axios
      const response = await axios.post(
        "http://localhost:8000/api/user/login",
        data
      );

      // Handle the success response
      const token = response.data.token;
      localStorage.setItem("login", "true");
      setCookie("access_token", token, { path: "/" });
      setSuccess(true);
    } catch (error) {
      // Handle the error response
      //   console.log(error.response.data.error)
      setError(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, success, loginUser };
};

export default useLogin;
