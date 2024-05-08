import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import CreateCourse from "./pages/CreateCourse";
import DeleteCourse from "./pages/DeleteCourse";
import EditCourse from "./pages/EditCourse";
import ShowCourse from "./pages/Platform/ShowCourse";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/courses/create" element={<CreateCourse />} />
        <Route path="/courses/details/:id" element={<ShowCourse />} />
        <Route path="/courses/edit/:id" element={<EditCourse />} />
        <Route path="/courses/delete/:id" element={<DeleteCourse />} />
      </Route>
    </Routes>
  );
};

export default App;
