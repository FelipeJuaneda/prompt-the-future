import { useEffect, useState } from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { getCourseRequest } from "../../api/courses";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../../commons/Loading";
import { toast } from "sonner";

const FailurePage = () => {
  const [courseDetail, setCourseDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const { courseId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getCourse() {
      try {
        const res = await getCourseRequest(courseId);
        setCourseDetail(res.data);
      } catch (error) {
        toast.error("Error al obtener el curso");
        navigate("/");
      } finally {
        setLoading(false);
      }
    }
    getCourse();
  }, [courseId, navigate]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box
          sx={{
            background: "linear-gradient(to right, #ff4b1f, #ff9068)",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 3,
          }}
        >
          <Box
            sx={{
              background: "rgba(255, 255, 255, 0.8)",
              borderRadius: 2,
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              backdropFilter: "blur(10px)",
              maxWidth: "600px",
              width: "100%",
              padding: 4,
              textAlign: "center",
            }}
          >
            <ErrorOutlineIcon
              sx={{
                fontSize: 60,
                color: "red",
                mb: 2,
              }}
            />
            <Typography
              variant="h4"
              component="div"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Error en la compra
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Hubo un problema al intentar comprar el curso:
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold", mb: 3 }}
            >
              {courseDetail.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              {courseDetail.overview}
            </Typography>
            <Button
              LinkComponent={Link}
              to="/"
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2 }}
            >
              Volver al Inicio
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default FailurePage;
