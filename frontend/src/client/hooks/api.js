// api.js
import axios from "axios";

const BASE_URL = "http://localhost:8000/api/user";

// Function to handle user login
// export const loginUser = async (credentials) => {
//   const response = await axios.post(`${BASE_URL}/login`, credentials);
//   return response.data.token;
// };

// Function to handle token verification
export const verifyToken = async (token) => {
  const response = await axios.post(`${BASE_URL}/token`, { token });
  return response.data;
};
