import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import OnlineButton from "../../commons/OnlineButton";
import CourseCard from "./CourseCard";
import Carrousele from "../../commons/Carrousele/Carrousele";
import { useCourses } from "../../context/CoursesContext";

const OurCourses = () => {
  const { courses, loading } = useCourses();
  const [skeletonCount, setSkeletonCount] = useState(2);

  return (
    <Container
      component={"section"}
      sx={{ backgroundColor: "primary.main" }}
      maxWidth="lg"
    >
      <Box sx={{ padding: "60px 0" }}>
        <Typography
          component={"h3"}
          variant="h6"
          sx={{ textAlign: "center", fontWeight: "bold" }}
          color={"secondary.main"}
        >
          Únete a la comunidad de IA con mayor excelencia Académica.
        </Typography>
      </Box>

      <Box sx={{ paddingLeft: 4 }}>
        <OnlineButton />
      </Box>

      <Box id="cursos-section" sx={{ py: "40px" }}>
        <Typography
          color={"secondary.main"}
          sx={{ fontWeight: "bold" }}
          component={"h4"}
          variant="h4"
        >
          Nuestros cursos
        </Typography>

        <Carrousele>
          {loading
            ? Array.from({ length: skeletonCount }).map((_, index) => (
                <SwiperSlide style={{ maxWidth: "260px" }} key={index}>
                  <CourseCard loading={true} />
                </SwiperSlide>
              ))
            : courses.map((course, index) => (
                <SwiperSlide style={{ maxWidth: "260px" }} key={index}>
                  <CourseCard course={course} loading={false} />
                </SwiperSlide>
              ))}
        </Carrousele>
      </Box>
    </Container>
  );
};

export default OurCourses;
