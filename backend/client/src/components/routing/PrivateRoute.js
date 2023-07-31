import React from "react";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ element: Element, ...rest })=> {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("authToken") ? (
          <Element {...props} />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;

