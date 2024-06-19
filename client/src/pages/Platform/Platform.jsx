import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCoursesForUser } from "../../api/content";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Button,
  Grid,
  Skeleton,
} from "@mui/material";
import { SwiperSlide } from "swiper/react";
import { useAuth } from "../../context/AuthContext";
import CarrouselePlatform from "../../commons/CarrouselePlatform/CarrouselePlatform";
import CardPlatform from "../../components/Platform/CardPlatform";

function Platform() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

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
    return (
      <Container
        maxWidth="lg"
        sx={{ mt: { xs: 2, md: 4 }, color: "#E0E0E0", overflow: "hidden" }}
      >
        <Box sx={{ mb: { xs: 2, md: 4 } }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar
                alt={`@${user.name}`}
                src={user.img || "/placeholder-avatar.jpg"}
                sx={{ width: { xs: 40, md: 60 }, height: { xs: 40, md: 60 } }}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="h4"
                sx={{
                  mb: 1,
                  color: "secondary.main",
                  fontSize: { xs: "1.5rem", md: "2.125rem" },
                }}
              >
                Bienvenido, {user.name} {user.surname}
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
              >
                Aquí están tus cursos disponibles.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ overflow: "hidden", minHeight: 350 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              textAlign: "start",
              color: "#FFF",
              fontSize: { xs: "1.25rem", md: "1.5rem" },
            }}
          >
            Mis Cursos
          </Typography>
          <CarrouselePlatform>
            {[...Array(2)].map((_, index) => (
              <SwiperSlide
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "auto",
                }}
              >
                <Skeleton
                  variant="rectangular"
                  width={300}
                  height={250}
                  sx={{
                    bgcolor: "#3A3A3A",
                    borderRadius: 2,
                    boxShadow: 3,
                    minWidth: 300,
                    maxWidth: 300,
                    minHeight: 250,
                  }}
                />
              </SwiperSlide>
            ))}
          </CarrouselePlatform>
        </Box>
      </Container>
    );
  }

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: { xs: 2, md: 4 }, color: "#E0E0E0", overflow: "hidden" }}
    >
      <Box sx={{ mb: { xs: 2, md: 4 } }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar
              alt={`@${user.name}`}
              src={user.img || "/placeholder-avatar.jpg"}
              sx={{ width: { xs: 40, md: 60 }, height: { xs: 40, md: 60 } }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="h4"
              sx={{
                mb: 1,
                color: "secondary.main",
                fontSize: { xs: "1.5rem", md: "2.125rem" },
              }}
            >
              Bienvenido, {user.name} {user.surname}
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
            >
              Aquí están tus cursos disponibles.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      {courses.length > 0 ? (
        <Box sx={{ overflow: "hidden", minHeight: 350 }}>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              textAlign: "start",
              color: "#FFF",
              fontSize: { xs: "1.25rem", md: "1.5rem" },
            }}
          >
            Mis Cursos
          </Typography>
          <CarrouselePlatform>
            {courses.map((course) => (
              <SwiperSlide
                key={course._id}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "auto",
                }}
              >
                <CardPlatform course={course} loading={loading} />
              </SwiperSlide>
            ))}
          </CarrouselePlatform>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "50vh",
            bgcolor: "#3A3A3A",
            borderRadius: 2,
            boxShadow: 3,
            p: { xs: 2, md: 4 },
            textAlign: "center",
            color: "#E0E0E0",
          }}
        >
          <Typography
            variant="h5"
            sx={{ mb: 2, fontSize: { xs: "1.25rem", md: "1.5rem" } }}
          >
            No tienes cursos disponibles actualmente.
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, fontSize: { xs: "0.875rem", md: "1rem" } }}
          >
            Explora nuestros cursos y comienza a aprender hoy mismo.
          </Typography>
          <Button
            LinkComponent={Link}
            to="/"
            variant="contained"
            color="primary"
            size="large"
            sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
          >
            Ver Cursos Disponibles
          </Button>
        </Box>
      )}
      <Box
        sx={{
          mt: 7,
          mb: 4,
          p: { xs: 2, md: 4 },
          bgcolor: "#3A3A3A",
          borderRadius: 2,
          textAlign: "center",
          color: "#E0E0E0",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            color: "secondary.main",
            fontSize: { xs: "1.25rem", md: "1.5rem" },
          }}
        >
          ¿Nuevo en nuestra plataforma?
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 3, fontSize: { xs: "0.875rem", md: "1rem" } }}
        >
          Explora nuestros cursos y empieza a aprender hoy mismo.
        </Typography>
        <Button
          LinkComponent={Link}
          to="/"
          variant="contained"
          color="secondary"
          size="large"
          sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
        >
          Explorar Cursos
        </Button>
      </Box>
    </Container>
  );
}

export default Platform;
