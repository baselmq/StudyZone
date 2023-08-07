// HiddenLayer.js
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useUserData } from "./userCxt";

const HiddenLayer = () => {
  const [cookie, setCookie] = useCookies("access_token");
  const { userData, setUserData } = useUserData();
  const BASE_URL = "http://localhost:8000/api/user";

  useEffect(() => {
    const checkAndDecryptToken = async () => {
      const token = cookie.access_token;
      if (token) {
        try {
          // Send the token to the server for decryption
          const response = await axios.post(`${BASE_URL}/token`, { token });

          // Assuming the server returns the decrypted data in the response
          const decryptedUserData = response.data.user;
          localStorage.setItem("id", decryptedUserData._id);
          // Set the decrypted user data using the context
          setUserData(decryptedUserData);
        } catch (error) {
          console.error("Error while decrypting token:", error);
          // If there's an error with decryption, you can handle it here (e.g., clear the cookie)
        }
      }
    };

    checkAndDecryptToken();
  }, [cookie, setUserData]);
  useEffect(() => {
    const token = cookie.access_token;
    if (!token) {
      // If the token is cleared or not available, set user data to null
      setUserData(null);
    }
  }, [cookie, setUserData]);
  useEffect(() => {
    const token = cookie.access_token;
    if (!token) {
      // If the token is cleared or not available, set user data to null
      setUserData(null);
    }
  }, [cookie.access_token]); // Only re-run the effect if the access_token cookie changes
  return null; // The component doesn't render anything and only works in the background
};

export default HiddenLayer;
