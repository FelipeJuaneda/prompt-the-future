import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import CreateCourse from "./pages/CreateCourse";
import DeleteCourse from "./pages/DeleteCourse";
import EditCourse from "./pages/EditCourse";
import CourseDetail from "./pages/Landing/CourseDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Platform/Profile";
import ProtectedRoute from "./ProtectedRoute";
import Platform from "./pages/Platform/Platform";
import CourseContentPage from "./pages/Platform/CourseContentPage";
import PlatformLayout from "./layouts/PlatformLayout";
import PublicLayout from "./layouts/LandingLayout";
import NotFound from "./components/NotFound";
import EditProfile from "./pages/Platform/EditProfile";
import RoadMap from "./pages/Platform/RoadMap";
import SuccessPage from "./pages/Landing/SuccessPage";
import FailurePage from "./pages/Landing/FailurePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses/details/:id" element={<CourseDetail />} />
        <Route path={`/success-page/:courseId`} element={<SuccessPage />} />
        <Route path={`/failure-page/:courseId`} element={<FailurePage />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/platform" element={<PlatformLayout />}>
          <Route index element={<Platform />} />
          <Route
            path="course-content/:courseId"
            element={<CourseContentPage />}
          />
          <Route path="profile" element={<Profile />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="roadmaps" element={<RoadMap />} />
          <Route path="stats" element={<RoadMap />} />
        </Route>
        {/* <Route element={<ProtectedRoute />}>
          <Route path="/courses/create" element={<CreateCourse />} />
          <Route path="/courses/edit/:id" element={<EditCourse />} />
          <Route path="/courses/delete/:id" element={<DeleteCourse />} /> 
        </Route> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
