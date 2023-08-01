import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../Styles/App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Courses from "../Pages/Courses";
import CourseDetails from "../Pages/CourseDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import LandingPage from "./LandingPage";
import "bootstrap-icons/font/bootstrap-icons.css";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import ForgotPasswordInput from "../Components/ForgetPasswordInput";
import ResetPasswordInput from "../Components/ResetPasswordInput";
import PageLayout from "../admin-component/PageLayout";


const AppLayout = () => (
  <>
    <Nav />
    <Outlet />
    <Footer />
  </>
);



function App() {
  return (
    <>
     {/*Admin Dashboard*/}
    {/* <PageLayout /> */}

    
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" Component={LandingPage}></Route>
            <Route path="/courses" Component={Courses}></Route>
            <Route path="/category/:category" Component={Courses}></Route>

            <Route path="/courses/:courseId" Component={CourseDetails}></Route>
          </Route>

          <Route path="/login" Component={Login}></Route>
          <Route path="/register" Component={Register}></Route>
          <Route path="/forgotpassword" element={<ForgotPasswordInput />} />
          <Route
            path="/passwordreset/:resetToken"
            element={<ResetPasswordInput />}
          />

        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
