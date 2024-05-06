import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateCourse from "./pages/CreateCourse";
import DeleteCourse from "./pages/DeleteCourse";
import EditCourse from "./pages/EditCourse";
import ShowCourse from "./pages/ShowCourse";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/create" element={<CreateCourse />} />
        <Route path="/courses/details/:id" element={<ShowCourse />} />
        <Route path="/courses/edit/:id" element={<EditCourse />} />
        <Route path="/courses/delete/:id" element={<DeleteCourse />} />
      </Routes>
    </>
  );
};

export default App;
