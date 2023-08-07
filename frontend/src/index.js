import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CoursesContextProvider } from "./client/context/CoursesCxt";
import { UserDataProvider } from "./client/context/userCxt";
import LoadingPage from "./client/pages/Loading";

const root = ReactDOM.createRoot(document.getElementById("root"));

const loadingMarkup = <LoadingPage />;

root.render(
  <Suspense fallback={loadingMarkup}>
  <React.StrictMode>
    <UserDataProvider>
      <CoursesContextProvider>
        <App />
      </CoursesContextProvider>
    </UserDataProvider>
  </React.StrictMode>
  </Suspense>
);
