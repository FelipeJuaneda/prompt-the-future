import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { getContentsRequest } from "../api/content";
import { getCourseRequest } from "../api/courses";

const useCourseContent = (courseId) => {
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const [responseContent, responseCourse] = await Promise.all([
          getContentsRequest(courseId),
          getCourseRequest(courseId),
        ]);

        const content = {
          ...responseContent.data,
          title: responseCourse.data.title,
          description: responseCourse.data.description,
        };

        setContent(content);
      } catch (error) {
        console.error("Error fetching course content:", error);
        toast.error(error.response?.data?.message || "Error fetching content", {
          duration: 4000,
        });
        if (error.response && error.response.status === 403) {
          navigate("/");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [courseId, navigate]);

  return { content, loading };
};

export default useCourseContent;
