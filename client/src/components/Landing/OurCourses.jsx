import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OnlineButton from "../../commons/OnlineButton";
import CourseCard from "./CourseCard";
import { getCoursesRequest } from "../../api/courses";

const OurCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await getCoursesRequest();
        setCourses(response.data.data);
      } catch (error) {
        console.error("Error al cargar los cursos:", error);
      } finally {
        setLoading(false);
      }
    };
    getCourses();
  }, []);

  return (
    <Container sx={{ backgroundColor: "primary.main" }} maxWidth="lg">
      <Box sx={{ padding: "60px 0" }}>
        <Typography
          variant="h6"
          sx={{ textAlign: "center", fontWeight: "bold" }}
          color={"secondary.main"}
        >
          Únete a la comunidad de Inteligencia{" "}
          <Typography
            component="span"
            variant="h6"
            sx={{ display: "inline", fontWeight: "bold" }}
          >
            Artificial
            <br />
          </Typography>
          más grande a nivel hispanohablante
        </Typography>
      </Box>

      <Box sx={{ paddingLeft: 4 }}>
        <OnlineButton />
      </Box>

      <Box sx={{ py: "40px" }}>
        <Typography
          color={"secondary.main"}
          sx={{ fontWeight: "bold" }}
          variant="h4"
        >
          Nuestros cursos
        </Typography>

        <Grid
          container
          spacing={4}
          padding={"70px 0"}
          justifyContent="center"
          alignItems="center"
        >
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CourseCard course={course} loading={loading} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default OurCourses;
