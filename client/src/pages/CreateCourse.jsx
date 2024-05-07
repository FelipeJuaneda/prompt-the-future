import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { createCourseRequest } from "../api/courses";

const CreateCourse = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleSaveCourse = async (formData) => {
    formData.price = parseFloat(formData.price);
    setLoading(true);
    try {
      await createCourseRequest(formData);
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Crear un nuevo Curso
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Grid
            component={"form"}
            container
            spacing={3}
            onSubmit={handleSubmit(handleSaveCourse)}
          >
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Titulo"
                {...register("title", { required: true })}
                variant="outlined"
                placeholder="ingresa el titulo del curso"
                error={!!errors.title}
                helperText={errors.title ? "El titulo es requerido" : ""}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="precio"
                {...register("price", { required: true })}
                variant="outlined"
                type="number"
                placeholder="ingresa el precio del curso"
                error={!!errors.price}
                helperText={errors.price ? "El precio es requerido" : ""}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Imagen URL"
                {...register("img", { required: true })}
                variant="outlined"
                placeholder="ingresa la url de la imagen "
                error={!!errors.img}
                helperText={errors.img ? "La URL es requerida" : ""}
              />
            </Grid>
            <Grid item xs={12}>
              {loading ? (
                <Button variant="contained" fullWidth color="primary">
                  Creando...
                </Button>
              ) : (
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  type="submit"
                >
                  Crear Curso
                </Button>
              )}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default CreateCourse;
