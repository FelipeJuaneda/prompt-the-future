import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import CreateCourse from "./pages/CreateCourse";
import DeleteCourse from "./pages/DeleteCourse";
import EditCourse from "./pages/EditCourse";
import CourseDetail from "./pages/Landing/CourseDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoute from "./ProtectedRoute";
import Platform from "./pages/Platform/Platform";
import CourseContentPage from "./pages/Platform/CourseContentPage";
import PlatformLayout from "./layouts/PlatformLayout";
import PublicLayout from "./layouts/LandingLayout";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses/details/:id" element={<CourseDetail />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/platform" element={<PlatformLayout />}>
          <Route index element={<Platform />} />
          <Route
            path="course-content/:courseId"
            element={<CourseContentPage />}
          />
          <Route path="profile" element={<Profile />} />
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
