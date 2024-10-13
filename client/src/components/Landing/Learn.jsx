import { Box, Container, Stack, Typography } from "@mui/material";
import imgLearn from "../../assets/imgs/Landing/learn.png";
import Carrousele from "../../commons/Carrousele/Carrousele";
import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { useCourses } from "../../context/CoursesContext";
import CourseCard from "./CourseCard";

const Learn = () => {
  const { courses, loading } = useCourses();
  const [skeletonCount, setSkeletonCount] = useState(2);

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          color: "white",
          padding: { xs: "10px", md: "20px" },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#ffffff",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Learn
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
          sx={{ marginBottom: "40px" }}
        >
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Crimson Text",
                marginBottom: "20px",
                width: { xs: "100%", md: "80%" },
                margin: "auto auto 20px auto",
              }}
            >
              &quot;We are likely to see the emergence of artificial
              intelligence not just as a tool we use, but as a collaborator in
              the creation of art, science, and society&quot;
            </Typography>
            <Typography>Yuval Noah Harari</Typography>
          </Box>

          <Box
            component="img"
            src={imgLearn}
            alt="Design Image"
            sx={{
              width: { xs: "100%", md: "40%" },
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Stack>

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
      </Box>
    </Container>
  );
};

export default Learn;
