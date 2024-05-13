import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getContentsRequest } from "../../api/content";

function CourseContentPage() {
  const { courseId } = useParams();
  const [content, setContent] = useState(null);
  console.log("🚀 ~ CourseContentPage ~ content:", content);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await getContentsRequest(courseId);
        setContent(response.data);
      } catch (error) {
        console.error("Error fetching course content:", error);
        setError("Failed to fetch course content");
      }
    };

    fetchContent();
  }, [courseId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
      {/* Aquí puedes expandir la visualización de otros elementos del contenido del curso */}
    </div>
  );
}

export default CourseContentPage;
