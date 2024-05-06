import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSaveCourse = () => {
    const data = {
      title,
      price,
      img,
    };
    setLoading(true);
    axios
      .post("http://localhost:4000/courses", data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Crear un nuevo Curso
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Titulo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                variant="outlined"
                placeholder="ingresa el titulo del curso"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="precio"
                variant="outlined"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="ingresa el precio del curso"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Imagen URL"
                variant="outlined"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                placeholder="ingresa la url de la imagen "
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
                  onClick={handleSaveCourse}
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
