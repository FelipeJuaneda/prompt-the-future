import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCoursesForUser } from "../../api/content";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  CardActionArea,
} from "@mui/material";
// import { useAuth } from "../../context/AuthContext";
import Spinner from "../../commons/Spinner";

function Platform() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  // const { user, isAuthenticated, setRedirectAfterLogin } = useAuth();

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await getCoursesForUser();
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: "start" }}>
        Mis Cursos
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "start",
        }}
      >
        {courses.map((course) => (
          <Card
            key={course._id}
            sx={{
              width: "300px",
              borderRadius: 2,
              boxShadow: 3,
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.01)",
              },
            }}
          >
            <CardActionArea
              component={Link}
              to={`course-content/${course._id}`}
            >
              <CardMedia
                component="img"
                height="140"
                image={course.img}
                alt={course.title}
                sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                  {course.title}
                </Typography>
                <Typography variant="body2" color="primary">
                  Acceder al Curso
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default Platform;
