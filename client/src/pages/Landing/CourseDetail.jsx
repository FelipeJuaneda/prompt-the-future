import { Typography, Button, Box, Container, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "../../commons/Loading";
import OnlineButton from "../../commons/OnlineButton";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AcordionDetailCourses from "../../components/Landing/AcordionDetailCourses";
// import { createPaymentForCourse } from "../../api/payment";
// import { useAuth } from "../../context/AuthContext";
import { toast } from "sonner";
import { useCourses } from "../../context/CoursesContext";
import SEO from "../../utils/Seo";

function CourseDetail() {
  const [courseDetail, setCourseDetail] = useState({});
  const [loading, setLoading] = useState(true);
  // const { user, isAuthenticated, setRedirectAfterLogin } = useAuth();
  const navigate = useNavigate();
  // const location = useLocation();
  const { id } = useParams();
  const { getCourse } = useCourses();

  useEffect(() => {
    async function fetchCourse() {
      try {
        const res = await getCourse(id);
        setCourseDetail(res);
      } catch (error) {
        toast.error("Error al obtener el curso");
        navigate("/");
      } finally {
        setLoading(false);
      }
    }
    fetchCourse();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  // const handleBuyCourse = async () => {
  //   if (!isAuthenticated) {
  //     setRedirectAfterLogin(location.pathname);
  //     navigate("/login");
  //     return;
  //   }
  //   try {
  //     const courseDetailPayment = {
  //       id: courseDetail._id,
  //       title: courseDetail.title,
  //       overview: courseDetail.overview,
  //       price: courseDetail.price,
  //     };
  //     const response = await createPaymentForCourse(courseDetailPayment, user);
  //     if (response.data.init_point) {
  //       window.location.href = response.data.init_point;
  //     } else {
  //       toast.error("No se pudo iniciar el proceso de pago");
  //       console.error("No se pudo iniciar el proceso de pago");
  //     }
  //   } catch (error) {
  //     console.error("Error al comprar el curso:", error);
  //     toast.error(error.response.data.message);
  //   }
  // };

  const comisiones = [
    {
      titulo: "Comosión o",
      descripcion: "1/Jul al 12/Agos de 2024 - Comisión 01 ",
    },
    {
      titulo: "Comisión 2",
      descripcion: "19/Ago al 30/Ago de 2024 - Comisión 02 ",
    },
  ];
  return (
    <>
      <SEO
        title={`${courseDetail.title} | Prompt The Future`}
        description={`Descubre el curso ${courseDetail.title} en Prompt The Future. ${courseDetail.description}`}
        keywords={`curso ${courseDetail.title}, Prompt The Future, educación en IA, curso de Inteligencia Artificial, ${courseDetail.title} en Prompt The Future`}
        canonical={`https://prompt-the-future.com/courses/details/${id}`}
      />

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
          src={courseDetail.img}
          alt="Robot Prompt The Future"
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
            Curso de {courseDetail.title}
          </Typography>

          <Box sx={{ paddingBottom: 3 }}>
            <OnlineButton />
          </Box>

          <Typography
            variant="body1"
            sx={{ color: "secondary.main", paddingBottom: 5 }}
          >
            •Tutoría personalizada
            <br />
            •Límite de Alumnos por Comisión
            <br />
            •Projecto Académico Final
          </Typography>
          <Typography
            whiteSpace={"pre-line"}
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
              Información sobre el curso
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
                {comisiones.map((comision, index) => (
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
                    <Box
                      sx={{
                        color: "text.primary",
                        flexGrow: 1,
                        px: 2,
                      }}
                    >
                      <Typography fontWeight={"bold"} variant="body1">
                        {comision.descripcion}
                      </Typography>
                    </Box>
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
        {/* <Button
            sx={{ backgroundColor: "green", "&:hover": { bgcolor: "#098609" } }}
            variant="outlined"
            onClick={handleBuyCourse}
          >
            Comprar curso
          </Button> */}
      </Container>
    </>
  );
}

export default CourseDetail;
