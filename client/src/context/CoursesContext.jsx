import React, { createContext, useContext, useEffect, useState } from "react";
import { getCourseRequest, getCoursesRequest } from "../api/courses";

const CoursesContext = createContext();

export const useCourses = () => {
  return useContext(CoursesContext);
};

export const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getCoursesRequest();
        setCourses(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const getCourse = async (id) => {
    try {
      const response = await getCourseRequest(id);
      return response.data;
    } catch (error) {
      setError(error);
    }
  };

  return (
    <CoursesContext.Provider value={{ courses, loading, error, getCourse }}>
      {children}
    </CoursesContext.Provider>
  );
};
