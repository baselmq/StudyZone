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
import Cart from "./Cart";
import Payment from "./Payment";
import PageLayout from "../admin-component/PageLayout";
import UsersAdmin from "../admin-pages/Users";
import CoursesAdmin from "../admin-pages/Courses";
import LessonsAdmin from "../admin-pages/Lessons";

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
            <Route path="/cart" Component={Cart}></Route>
            <Route path="/payment" Component={Payment}></Route>
          </Route>

          <Route path="/admin" Component={PageLayout}></Route>
          <Route path="/admin/users" Component={UsersAdmin}></Route>
          <Route path="/admin/courses" Component={CoursesAdmin}></Route>
          <Route path="/admin/lessons" Component={LessonsAdmin}></Route>
          <Route path="/cart" Component={Cart}></Route>
          <Route path="/payment" Component={Payment}></Route>
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
