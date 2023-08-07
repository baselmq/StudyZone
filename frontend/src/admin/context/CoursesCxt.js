// DataContext.js
import React, { createContext } from "react";
import { useAxios } from "../hooks/useAxios";

// Create a context for the data
export const CoursesCxt = createContext();

// Create a context provider that uses the useAxios hook
export const CoursesContextProvider = ({ children }) => {
  const url = "http://localhost:8000/api/admin/courses";
  // Use the useAxios hook with the given url
  const { data, loading, error } = useAxios(url);
  // Pass the value to the context provider
  return (
    <CoursesCxt.Provider value={{ data, loading, error }}>
      {children}
    </CoursesCxt.Provider>
  );
};
