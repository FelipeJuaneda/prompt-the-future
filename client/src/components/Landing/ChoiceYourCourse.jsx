import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OnlineButton from "../../commons/OnlineButton";
import CourseCard from "./CourseCard";
import { getCoursesRequest } from "../../api/courses";

const ChoiceYourCourse = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getCourses() {
      try {
        const res = await getCoursesRequest();
        setCourses(res.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
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

      <OnlineButton />

      <Box sx={{ py: "40px" }}>
        <Typography
          color={"secondary.main"}
          sx={{ fontWeight: "bold" }}
          variant="h5"
        >
          Nuestros cursos
        </Typography>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {courses.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CourseCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ChoiceYourCourse;
