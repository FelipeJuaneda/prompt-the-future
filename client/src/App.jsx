import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import CourseDetail from "./pages/Landing/CourseDetail";
import Profile from "./pages/Platform/Profile";
import ProtectedRoute from "./ProtectedRoute";
import Platform from "./pages/Platform/Platform";
import CourseContentPage from "./pages/Platform/CourseContentPage";
import PlatformLayout from "./layouts/PlatformLayout";
import RoadMap from "./pages/Platform/RoadMap";
import PublicLayout from "./layouts/LandingLayout";
import NotFound from "./components/NotFound";
import SuccessPage from "./pages/Landing/SuccessPage";
import FailurePage from "./pages/Landing/FailurePage";
import ComingSoon from "./components/ComingSoon";
import ResetPassword from "./pages/Auth/ResetPassword";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/Login";
import ScrollToTop from "./utils/ScrollToTop";
import Courses from "./pages/Platform/Courses";
import Design from "./pages/Landing/Design";
import Learn from "./components/Landing/Learn";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses/details/:id" element={<CourseDetail />} />
          <Route path={`/success-page/:courseId`} element={<SuccessPage />} />
          <Route path={`/failure-page/:courseId`} element={<FailurePage />} />
          <Route path={`/design`} element={<Design />} />
          <Route path={`/learn`} element={<Learn />} />
          <Route path={`/code`} element={<ComingSoon />} />
          <Route path={`/share`} element={<ComingSoon />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>
        {/* <Route path={"/platform"} element={<ComingSoon />} /> */}
        <Route element={<ProtectedRoute />}>
          <Route path="/platform" element={<PlatformLayout />}>
            <Route index element={<Platform />} />
            <Route
              path="course-content/:courseId"
              element={<CourseContentPage />}
            />
            <Route path="profile" element={<Profile />} />
            <Route path="courses" element={<Courses />} />
            <Route path="roadmaps" element={<RoadMap />} />
            <Route path="stats" element={<RoadMap />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
