import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import OnlineButton from "../../commons/OnlineButton";
import CourseCard from "./CourseCard";
import { getCoursesRequest } from "../../api/courses";
import Carrousele from "../../commons/Carrousele";

const OurCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skeletonCount, setSkeletonCount] = useState(2);

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
    <Container
      id="cursos-section"
      sx={{ backgroundColor: "primary.main" }}
      maxWidth="lg"
    >
      <Box sx={{ padding: "60px 0" }}>
        <Typography
          variant="h6"
          sx={{ textAlign: "center", fontWeight: "bold" }}
          color={"secondary.main"}
        >
          Unite a la comunidad de IA con mayor excelencia Académica.
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

        <Carrousele>
          {loading
            ? Array.from({ length: skeletonCount }).map((_, index) => (
                <SwiperSlide key={index}>
                  <CourseCard loading={true} />
                </SwiperSlide>
              ))
            : courses.map((course, index) => (
                <SwiperSlide key={index}>
                  <CourseCard course={course} loading={false} />
                </SwiperSlide>
              ))}
        </Carrousele>
      </Box>
    </Container>
  );
};

export default OurCourses;
