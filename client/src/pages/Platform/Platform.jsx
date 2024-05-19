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
  Button,
} from "@mui/material";
import Spinner from "../../commons/Spinner";

function Platform() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

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
      {courses.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "50vh",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 3,
            p: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            No tienes cursos disponibles actualmente.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Explora nuestros cursos y comienza a aprender hoy mismo.
          </Typography>
          <Button
            LinkComponent={Link}
            to="/"
            variant="contained"
            color="primary"
            size="large"
          >
            Ver Cursos Disponibles
          </Button>
        </Box>
      ) : (
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
      )}
    </Container>
  );
}

export default Platform;
