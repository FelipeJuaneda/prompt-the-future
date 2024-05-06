import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateCourse from "./pages/CreateCourse";
import DeleteCourse from "./pages/DeleteCourse";
import EditCourse from "./pages/EditCourse";
import ShowCourse from "./pages/ShowCourse";
import Header from "./components/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
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
    </>
  );
};

export default App;
