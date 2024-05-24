import {
  Box,
  Stack,
  Typography,
  TextField,
  Button,
  Link,
  Alert,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link as LinkRouter, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import fondoRegister from "../assets/imgs/fondoRegister.png";
import logoNegro from "../assets/icons/logoNegro.svg";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import SEO from "../commons/Seo";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
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

  const handlerOnSubmit = handleSubmit(async (values, event) => {
    event.preventDefault();
    toast.promise(signup(values), {
      loading: "Registrando...",
      success: (user) => {
        return `¡Bienvenido/a, ${user.name}!`;
      },
      error: "Error al registrarse",
    });
  });

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <SEO
        title="Registro | Prompt The Future"
        description="Crea tu cuenta en Prompt The Future y únete a la plataforma líder en educación y eventos de Inteligencia Artificial. Regístrate ahora para acceder a cursos, hackathons y más. ¡Es gratis!"
        keywords="registro, crear cuenta, Prompt The Future, educación en IA, hackathons, eventos de IA, plataforma de IA, cursos de IA, Inteligencia Artificial, registrarse en Prompt The Future, registrarse en plataforma de IA, registrarse en eventos de IA, registrarse en hackathons, registrarse en cursos de IA"
        canonical="https://prompt-the-future.com/register"
      />
      <Box
        component={"section"}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          height: "calc(100vh - 75px)",
          backgroundColor: "background.default",
          color: "text.primary",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: `url(${fondoRegister})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "50%",
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0), rgba(44,44,44,1))",
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: { xs: 3, sm: 6 },
            backgroundColor: "secondary.main",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "750px",
              textAlign: "center",
            }}
          >
            <Box sx={{ mb: 4 }}>
              <img
                src={logoNegro}
                alt="Logo Prompt The Future"
                style={{ maxWidth: "100px" }}
              />
            </Box>
            <Stack spacing={1} sx={{ textAlign: "center", marginBottom: 4 }}>
              <Typography variant="h4" fontWeight="bold">
                Crea tu cuenta
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ingresa tus datos para registrarte
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
            <Stack
              onSubmit={handlerOnSubmit}
              component={"form"}
              spacing={2}
              sx={{ mt: 3 }}
            >
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                  id="name"
                  label="Nombre"
                  variant="outlined"
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name ? "El nombre es requerido" : ""}
                  {...register("name", { required: true })}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: errors.name
                          ? "error.main"
                          : "primary.main",
                      },
                      "&:hover fieldset": {
                        borderColor: errors.name
                          ? "error.main"
                          : "primary.dark",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: errors.name
                          ? "error.main"
                          : "primary.main",
                      },
                    },
                  }}
                />
                <TextField
                  id="surname"
                  label="Apellido"
                  variant="outlined"
                  fullWidth
                  error={!!errors.surname}
                  helperText={errors.surname ? "El apellido es requerido" : ""}
                  {...register("surname", { required: true })}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: errors.surname
                          ? "error.main"
                          : "primary.main",
                      },
                      "&:hover fieldset": {
                        borderColor: errors.surname
                          ? "error.main"
                          : "primary.dark",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: errors.surname
                          ? "error.main"
                          : "primary.main",
                      },
                    },
                  }}
                />
              </Stack>
              <TextField
                id="email"
                label="Correo electrónico"
                variant="outlined"
                fullWidth
                type="email"
                error={!!errors.email}
                helperText={errors.email ? "El email es requerido" : ""}
                {...register("email", { required: true })}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: errors.email ? "error.main" : "primary.main",
                    },
                    "&:hover fieldset": {
                      borderColor: errors.email ? "error.main" : "primary.dark",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: errors.email ? "error.main" : "primary.main",
                    },
                  },
                }}
              />
              <TextField
                id="password"
                label="Contraseña"
                variant="outlined"
                fullWidth
                type={showPassword ? "text" : "password"}
                error={!!errors.password}
                helperText={errors.password ? "La contraseña es requerida" : ""}
                {...register("password", { required: true })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: errors.password
                        ? "error.main"
                        : "primary.main",
                    },
                    "&:hover fieldset": {
                      borderColor: errors.password
                        ? "error.main"
                        : "primary.dark",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: errors.password
                        ? "error.main"
                        : "primary.main",
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                fullWidth
                type="submit"
                sx={{
                  backgroundColor: "primary.main",
                  padding: "10px 20px",
                  fontSize: "1rem",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                }}
              >
                Registrarse
              </Button>
            </Stack>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", color: "text.secondary", mt: 3 }}
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
        </Box>
      </Box>
    </>
  );
}
