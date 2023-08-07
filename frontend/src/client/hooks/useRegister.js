// useRegistration.js
import { useState } from "react";
import axios from "axios";

const useRegistration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const registerUser = async (username, email, password) => {
    const data = {
      username: username,
      email: email,
      password: password,
    };

    try {
      setIsLoading(true);
      setError(null);

      // Send a POST request to the server with axios
      const response = await axios.post(
        "http://localhost:8000/api/user/register",
        data
      );

      // Handle the success response
      console.log(response.data);
      setSuccess(true);
    } catch (error) {
      // Handle the error response
    //   console.log(error.response.data.error)
      setError(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, success, registerUser };
};

export default useRegistration;
