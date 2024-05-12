import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  Alert,
  Link,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    signup,
    isAuthenticated,
    errors: registerErrors,
    redirectAfterLogin,
    setRedirectAfterLogin,
  } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      if (redirectAfterLogin) {
        navigate(redirectAfterLogin);
        setRedirectAfterLogin("");
      } else {
        navigate("/");
      }
    }
  }, [isAuthenticated, redirectAfterLogin, navigate]);
  const handlerOnSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <Box sx={{ mx: "auto", maxWidth: "md", p: 4 }}>
      <Stack spacing={3} sx={{ textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold">
          Regístrate
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Crea una cuenta para acceder a todas las funcionalidades.
        </Typography>
      </Stack>
      {registerErrors.map((error, i) => (
        <Alert
          sx={{ marginBottom: "20px" }}
          key={i}
          variant="outlined"
          severity="error"
        >
          {error}
        </Alert>
      ))}
      <Stack onSubmit={handlerOnSubmit} component={"form"} spacing={2}>
        <Stack spacing={2}>
          <TextField
            id="name"
            label="Nombre"
            variant="outlined"
            fullWidth
            {...register("name", { required: true })}
          />
          {errors.name && (
            <Alert variant="outlined" severity="warning">
              El nombre es requerido
            </Alert>
          )}
        </Stack>
        <Stack spacing={2}>
          <TextField
            id="surname"
            label="Apellido"
            variant="outlined"
            fullWidth
            {...register("surname", { required: true })}
          />
          {errors.surname && (
            <Alert variant="outlined" severity="warning">
              El apellido es requerido
            </Alert>
          )}
        </Stack>
        <Stack spacing={2}>
          <TextField
            id="email"
            label="Correo electrónico"
            variant="outlined"
            fullWidth
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <Alert variant="outlined" severity="warning">
              El email es requerido
            </Alert>
          )}
        </Stack>
        <Stack spacing={2}>
          <TextField
            id="password"
            label="Contraseña"
            variant="outlined"
            fullWidth
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <Alert variant="outlined" severity="warning">
              La contraseña es requerida
            </Alert>
          )}
        </Stack>
        <Button variant="contained" fullWidth type="submit">
          Registrarse
        </Button>
      </Stack>
      <Typography
        variant="body1"
        sx={{ textAlign: "center", color: "text.secondary", mt: 2 }}
      >
        ¿Ya tienes una cuenta?{" "}
        <Link
          component={LinkRouter}
          to="/login"
          underline="hover"
          color="primary"
        >
          Iniciar sesión
        </Link>
      </Typography>
    </Box>
  );
}
