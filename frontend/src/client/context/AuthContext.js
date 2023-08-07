import { createContext, useEffect, useReducer } from "react";

export const AuthCxt = createContext();

const authReducer = (state, action) => {
   switch (action.type) {
      case "LOGIN":
         return { user: action.payload };

      case "LOGOUT":
         return { user: null };

      default:
         return state;
   }
};

export const AuthContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(authReducer, {
      user: null,
   });
   useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));

      if (user) {
         dispatch({
            type: "LOGIN",
            payload: user,
         });
      }
   }, []);
   console.log("user state", state);
   return (
      <AuthCxt.Provider value={{ ...state, dispatch }}>
         {children}
      </AuthCxt.Provider>
   );
};



// import { createContext, useEffect, useState } from "react";
// import { useCookies } from "react-cookie";
// import axios from "axios";
// export const AuthCxt = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [cookie, setCookie] = useCookies("access_token");
//   const [data, setData] = useState("");
//   const [loading, setLoading] = useState(true); // Add a loading state
//   const fetchData = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8000/api/user/token",
//         {
//           token: cookie.access_token,
//         }
//       );
//       const data = await response.data;
//       setData(data.user);
//       setLoading(false); // Set loading to false after the data is fetched
//     } catch (error) {
//       console.log(error);
//       setLoading(false); // Set loading to false in case of an error
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [loading]);

//   // Show loading while data is being fetched
//   //   if (loading) {
//   //     return <div>Loading...</div>;
//   //   }

//   // Once the data is available, render the children with the AuthCxt.Provider
//   return (
//     <AuthCxt.Provider value={{ data, loading }}>{children}</AuthCxt.Provider>
//   );
// };
