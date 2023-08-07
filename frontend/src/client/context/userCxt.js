// UserDataContext.js
import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const UserDataContext = createContext();

export function useUserData() {
  return useContext(UserDataContext);
}

export function UserDataProvider({ children }) {
  const [userData, setUserData] = useState(null);
  const [cookie, setCookie] = useCookies("access_token");

  useEffect(() => {}, [userData, cookie]);
  
  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
}
