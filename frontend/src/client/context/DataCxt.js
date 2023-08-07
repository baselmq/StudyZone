import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const UserDataContext = createContext();

export function useUserData() {
  return useContext(UserDataContext);
}

export function UserDataProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [cookie, setCookie] = useCookies("access_token");
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

          // Set the decrypted user data using the context
          setUserData(decryptedUserData);
        } catch (error) {
          console.error("Error while decrypting token:", error);
          // If there's an error with decryption, you can handle it here (e.g., clear the cookie)
        }
      }
    };

    checkAndDecryptToken();
  }, [cookie.access_token]); // Only re-run the effect if the access_token cookie changes

  useEffect(() => {
    const token = cookie.access_token;
    if (!token) {
      // If the token is cleared or not available, set user data to null
      setUserData(null);
    }
  }, [cookie.access_token]); // Only re-run the effect if the access_token cookie changes

  // Listen for changes in the userData or cookie and force a rerender
  useEffect(() => {}, [userData, cookie]);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
}
