import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./client/Styles/App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Courses from "./client/Pages/Courses";
import CourseDetails from "./client/Pages/CourseDetails";
import Login from "./client/Pages/Login";
import Register from "./client/Pages/Register";
import LandingPage from "./client/Pages/LandingPage";
import "bootstrap-icons/font/bootstrap-icons.css";
import Nav from "./client/Components/Nav";
import Footer from "./client/Components/Footer";
import ForgotPasswordInput from "./client/Components/ForgetPasswordInput";
import ResetPasswordInput from "./client/Components/ResetPasswordInput";
import Cart from "./client/Pages/Cart";
import Payment from "./client/Pages/Payment";
import PageLayout from "./admin/pages/PageLayout";
import PaymentSuccess from "./client/Pages/PaymentSuccess";
import UsersAdmin from "./admin/pages/Users";
import CoursesAdmin from "./admin/pages/Courses";
import CourseInfo from "./admin/pages/CourseInfo";
import LessonsAdmin from "./admin/pages/Lessons";
import AddUsers from "./admin/pages/AddUsers";
import AddCourses from "./admin/pages/AddCourses";
import AddLessons from "./admin/pages/AddLessons";
<<<<<<< HEAD
import { useContext } from "react";
import { AuthCxt } from "./client/context/AuthContext";
=======
import { CoursesContextProvider } from "./admin/context/CoursesCxt";
import LessonInfo from "./admin/pages/LessonInfo";

>>>>>>> 8553f7426dba1d7157c16549f5726d28525c6108

const AppLayout = () => (
  <>
    <Nav />
    <Outlet />
    <Footer />
  </>
);

function App() {
  const { data, loading } = useContext(AuthCxt);
  console.log(data);
  return (
    <>
      {/*Admin Dashboard*/}
      {/* <PageLayout /> */}

      <BrowserRouter>
        <Routes>
          {/*client Routes  */}
          <Route element={loading ? <div>Loading...</div> : <AppLayout />}>
            <Route path="/" Component={LandingPage}></Route>
            <Route path="/courses" Component={Courses}></Route>
            <Route path="/category/:category" Component={Courses}></Route>
            <Route path="/courses/:courseId" Component={CourseDetails}></Route>
            <Route path="/cart" Component={Cart}></Route>
          </Route>

          <Route path="/cart" Component={Cart}></Route>
          <Route path="/payment" Component={Payment}></Route>
          <Route path="/paymentSuccess" Component={PaymentSuccess}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/register" Component={Register}></Route>
          <Route path="/forgotpassword" element={<ForgotPasswordInput />} />
          <Route
            path="/passwordreset/:resetToken"
            element={<ResetPasswordInput />}
          />

          {/*admin Routes  */}
          <Route path="/admin" Component={PageLayout}></Route>
          <Route path="/admin/users" Component={UsersAdmin}></Route>
          <Route path="/admin/courses" Component={CoursesAdmin}></Route>
          <Route path="/admin/courses-info" Component={CourseInfo}></Route>
          <Route path="/admin/lessons" element={ <CoursesContextProvider><LessonsAdmin/></CoursesContextProvider>}></Route>
          <Route path="/admin/add-users" Component={AddUsers}></Route>
          <Route path="/admin/add-courses" Component={AddCourses}></Route>
          <Route path="/admin/add-lessons" Component={AddLessons}></Route>
          <Route path="/admin/lesson-info" Component={LessonInfo}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
