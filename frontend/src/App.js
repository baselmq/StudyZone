import Courses from "./client/pages/Courses";
import Home from "./client/pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginForm from "./client/pages/Login";
import RegisterForm from "./client/pages/Register";
import ForgotPass from "./client/pages/ForgetPass";
import NewPasswordForm from "./client/pages/NewPass";
import HiddenLayer from "./client/context/HiddenLayer";
import CourseDetails from "./client/components/courses/CourseDetails";
import Cart from "./client/pages/Cart";
import PageLayout from "./admin/pages/PageLayout";
import UsersAdmin from "./admin/pages/Users";
import CoursesAdmin from "./admin/pages/Courses";
import LessonsAdmin from "./admin/pages/Lessons";
import AddUsers from "./admin/pages/AddUsers";
import AddCourses from "./admin/pages/AddCourses";
import AddLessons from "./admin/pages/AddLessons";
import PaymentForm from "./client/pages/PaymentForm";
import PaymentSuccess from "./client/pages/PaymentSuccess";

function App() {
  return (
    <BrowserRouter>
      <HiddenLayer />
      <Routes>
        {/*client Routes  */}

        <Route path="/" element={<Home />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route exact path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/forgot-password" element={<ForgotPass />}></Route>
        <Route path="/reset-password" element={<NewPasswordForm />}></Route>
        <Route path="/payment" element={<PaymentForm />}></Route>
        <Route path="/payment-success" element={<PaymentSuccess />}></Route>
        <Route
          path="/reset-password/:resetToken"
          element={<NewPasswordForm />}
        />
        <Route path="/cart" element={<Cart />}></Route>

        {/*admin Routes  */}
        <Route path="/admin" Component={PageLayout}></Route>
        <Route path="/admin/users" Component={UsersAdmin}></Route>
        <Route path="/admin/courses" Component={CoursesAdmin}></Route>
        <Route path="/admin/lessons" Component={LessonsAdmin}></Route>
        <Route path="/admin/add-users" Component={AddUsers}></Route>
        <Route path="/admin/add-courses" Component={AddCourses}></Route>
        <Route path="/admin/add-lessons" Component={AddLessons}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
