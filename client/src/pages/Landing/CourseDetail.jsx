import { Typography, Button, Box, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Spinner from "../../commons/Spinner";
import robotImg from "../../assets/imgs/robot.png";
import { getCourseRequest } from "../../api/courses";
import OnlineButton from "../../commons/OnlineButton";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AcordionDetailCourses from "../../components/Landing/AcordionDetailCourses";
import { createPaymentForCourse } from "../../api/payment";
import { useAuth } from "../../context/AuthContext";

function CourseDetail() {
  const [courseDetail, setCourseDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const { user, isAuthenticated, setRedirectAfterLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    async function getCourse() {
      try {
        const res = await getCourseRequest(id);
        setCourseDetail(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCourse();
  }, [id]);

  const handleBuyCourse = async () => {
    if (!isAuthenticated) {
      setRedirectAfterLogin(location.pathname);
      navigate("/login");
      return;
    }
    try {
      setLoading(true);
      const courseDetailPayment = {
        id: courseDetail._id,
        title: courseDetail.title,
        overview: courseDetail.overview,
        price: courseDetail.price,
      };
      const response = await createPaymentForCourse(courseDetailPayment, user);
      setLoading(false);
      if (response.data.init_point) {
        window.location.href = response.data.init_point;
      } else {
        console.error("No se pudo iniciar el proceso de pago");
      }
    } catch (error) {
      console.error("Error al comprar el curso:", error);
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Container sx={{ py: 5 }} maxWidth="lg">
          <Box
            sx={{
              position: "absolute",
              width: { xs: 300, lg: 350 },
              right: 0,
              top: "6rem",
              display: { xs: "none", md: "container" },
            }}
            component={"img"}
            src={robotImg}
            alt="robot"
          />
          <Box sx={{ width: { xs: "100%", md: "65%", lg: "70%" } }}>
            <Typography
              variant={"h4"}
              sx={{
                color: "secondary.main",
                fontWeight: "bold",
                paddingBottom: 3,
              }}
            >
              {courseDetail.title}
            </Typography>

            <Box sx={{ paddingBottom: 3 }}>
              <OnlineButton />
            </Box>

            <Typography
              variant="body1"
              sx={{ color: "secondary.main", paddingBottom: 5 }}
            >
              •Corrección de proyectos prácticos
              <br />
              •Tutoría personalizada
            </Typography>
            <Typography
              variant="caption"
              sx={{ mb: 1, color: "secondary.main" }}
            >
              {courseDetail.description}
            </Typography>
          </Box>
          <Stack
            padding={{ xs: "60px 0", lg: "100px 0" }}
            justifyContent={"space-evenly"}
            direction={{ xs: "column", md: "row" }}
            gap={5}
          >
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "secondary.main",
                  paddingBottom: 4,
                }}
              >
                Informacion sobre el curso
              </Typography>

              <AcordionDetailCourses courseDetail={courseDetail} />
            </Box>
            <Stack
              direction={"column"}
              justifyContent={"space-between"}
              sx={{ width: { xs: "100%", md: "50%" }, maxHeight: "258px" }}
              gap={{ xs: 3 }}
            >
              <Button
                component="a"
                href={courseDetail.program}
                download
                variant="contained"
                endIcon={<FileDownloadOutlinedIcon />}
                sx={{
                  backgroundColor: "#B670E0",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#8627CC",
                  },
                  borderRadius: "20px",
                  padding: "5px 32px",
                  textTransform: "none",
                  width: "fit-content",
                  margin: "0 auto",
                }}
              >
                Descargar Programa
              </Button>
              <Box
                sx={{
                  width: "100%",
                  color: "common.white",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Comisiones
                </Typography>
                <Stack spacing={2}>
                  {[1, 2].map((index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        bgcolor: "secondary.main",
                        borderRadius: "15px",
                        p: 0.7,
                        boxShadow: 3,
                      }}
                    >
                      <Box sx={{ color: "text.primary", flexGrow: 1 }}></Box>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: "#B670E0",
                          color: "primary.main",
                          "&:hover": {
                            bgcolor: "#8627CC",
                          },
                          borderRadius: "20px",
                          textTransform: "none",
                          fontWeight: "bold",
                        }}
                      >
                        Unirme
                      </Button>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Stack>
          <Button
            sx={{ backgroundColor: "green", "&:hover": { bgcolor: "#098609" } }}
            variant="outlined"
            onClick={handleBuyCourse}
          >
            Comprar curso
          </Button>
        </Container>
      )}
    </>
  );
}

export default CourseDetail;
