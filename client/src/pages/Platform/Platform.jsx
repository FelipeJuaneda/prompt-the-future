import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCoursesForUser } from "../../api/content";

function Platform() {
  const [courses, setCourses] = useState([]);
  console.log("🚀 ~ Platform ~ courses:", courses);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await getCoursesForUser();
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
        navigate("/login");
      }
    }

    fetchCourses();
  }, [navigate]);

  return (
    <div>
      <h1>Mis Cursos</h1>
      {courses.map((course) => (
        <div key={course._id}>
          <h2>{course.title}</h2>
          <Link to={`course-content/${course._id}`}>Acceder al Curso</Link>
        </div>
      ))}
    </div>
  );
}

export default Platform;
