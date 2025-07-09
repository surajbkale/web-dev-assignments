import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Courses from "../pages/Courses";
import PurchasedCourses from "../pages/PurchasedCourses";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/purchased-courses" element={<PurchasedCourses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
