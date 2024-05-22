import { useEffect, useState } from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { getCourseRequest } from "../../api/courses";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../../commons/Loading";
import { toast } from "sonner";

const SuccessPage = () => {
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
            background: "linear-gradient(to right, #6a11cb, #2575fc)",
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
            <CheckCircleOutlineIcon
              sx={{
                fontSize: 60,
                color: "green",
                mb: 2,
              }}
            />
            <Typography
              variant="h4"
              component="div"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              ¡Gracias por tu compra!
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Has comprado exitosamente el curso:
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
              to="/platform"
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2 }}
            >
              Ir a Mis Cursos
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};

export default SuccessPage;
