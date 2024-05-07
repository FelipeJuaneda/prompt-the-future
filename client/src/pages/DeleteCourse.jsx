import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { deleteCourseRequest } from "../api/courses";

const DeleteCourse = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteCourse = async () => {
    setLoading(true);
    try {
      await deleteCourseRequest(id);
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      alert("Algo salio mal intentando borrar el curso, mire la consola.");
      console.log(error);
    }
  };
  return (
    <Container maxWidth="sm">
      <Box mt={4} textAlign="center">
        <Typography variant="h5" gutterBottom>
          ¿Estás seguro de que deseas eliminar este curso?
        </Typography>
        <Box mt={2}>
          <Button
            variant="contained"
            color="error"
            onClick={handleDeleteCourse}
            disabled={loading}
          >
            {loading ? "Borrando..." : "Si, borrar"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default DeleteCourse;
