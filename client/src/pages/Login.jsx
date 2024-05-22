import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  Link,
  Alert,
} from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { toast } from "sonner";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    signin,
    isAuthenticated,
    errors: loginErrors,
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

  const handlerOnSubmit = handleSubmit(async (values, event) => {
    event.preventDefault();
    toast.promise(signin(values), {
      loading: "Iniciando sesión...",
      success: (user) => {
        return `¡Bienvenido/a, ${user.name}!`;
      },
      error: "Error al iniciar sesión",
    });
  });

  return (
    <Box
      sx={{
        mx: "auto",
        maxWidth: "md",
        p: 4,
        backgroundColor: "secondary.main",
      }}
    >
      <Stack spacing={3} sx={{ textAlign: "center" }}>
        <Typography variant="h4" fontWeight="bold">
          Iniciar sesión
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Ingresa tus credenciales para acceder a tu cuenta.
        </Typography>
      </Stack>
      {loginErrors.map((error, i) => (
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
          Iniciar sesión
        </Button>
      </Stack>
      <Typography
        variant="body1"
        sx={{ textAlign: "center", color: "text.secondary", mt: 2 }}
      >
        ¿No tienes una cuenta?{" "}
        <Link
          component={LinkRouter}
          to="/register"
          underline="hover"
          color="primary"
        >
          Regístrate
        </Link>
      </Typography>
    </Box>
  );
}
