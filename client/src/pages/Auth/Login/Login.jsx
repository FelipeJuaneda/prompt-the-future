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
import { Link as LinkRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import fondoLogin from "../../../assets/imgs/fondoLogin.png";
import logoNegro from "../../../assets/icons/logoNegro.svg";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailSentMessage from "./EmailSentMessage";
import ForgotPasswordForm from "./ForgotPasswordForm";
import SEO from "../../../utils/Seo";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
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
    requestPasswordResetFunction,
  } = useAuth();
  console.log("🚀 ~ Login ~ redirectAfterLogin:", redirectAfterLogin);
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

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleForgotPasswordSubmit = handleSubmit(async (values, event) => {
    event.preventDefault();
    toast.promise(requestPasswordResetFunction(values.email), {
      loading: "Enviando correo electrónico...",
      success: () => {
        setEmailSent(true);
        return "Correo electrónico enviado";
      },
      error: (err) => {
        return err.response.data.message || "Error al iniciar sesión";
      },
    });
  });

  return (
    <>
      <SEO
        title="Iniciar Sesión | Prompt The Future"
        description="Inicia sesión en Prompt The Future para acceder a tu cuenta y explorar nuestros cursos y eventos de Inteligencia Artificial. ¡Únete a la comunidad de IA más grande de habla hispana!"
        keywords="iniciar sesión, login, Prompt The Future, educación en IA, hackathons de IA, eventos de IA, Inteligencia Artificial, plataforma de IA, cursos de IA, comunidad de IA, certificados de IA, IA, comunidad de IA de habla hispana"
        canonical="https://prompt-the-future.com/login"
      />
      <Box
        component={"section"}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          minHeight: "calc(100vh - 75px)",
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
            backgroundImage: `url(${fondoLogin})`,
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
              borderRadius: 2,
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
            {forgotPassword ? (
              emailSent ? (
                <EmailSentMessage />
              ) : (
                <ForgotPasswordForm
                  handleForgotPasswordSubmit={handleForgotPasswordSubmit}
                  register={register}
                  errors={errors}
                  setForgotPassword={setForgotPassword}
                />
              )
            ) : (
              <>
                <Stack
                  spacing={1}
                  sx={{ textAlign: "center", marginBottom: 4 }}
                >
                  <Typography variant="h4" fontWeight="bold">
                    ¡Bienvenido de vuelta!
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Ingresa tus datos
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
                <Stack
                  onSubmit={handlerOnSubmit}
                  component={"form"}
                  spacing={2}
                  sx={{ mt: 3 }}
                >
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
                          borderColor: errors.email
                            ? "error.main"
                            : "primary.main",
                        },
                        "&:hover fieldset": {
                          borderColor: errors.email
                            ? "error.main"
                            : "primary.dark",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: errors.email
                            ? "error.main"
                            : "primary.main",
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
                    helperText={
                      errors.password ? "La contraseña es requerida" : ""
                    }
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
                    Iniciar sesión
                  </Button>
                  <Link
                    underline="hover"
                    sx={{
                      mt: 1,
                      textAlign: "center",
                      display: "block",
                      color: "primary.main",
                      cursor: "pointer",
                    }}
                    onClick={() => setForgotPassword(true)}
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </Stack>
                <Typography
                  variant="body1"
                  sx={{ textAlign: "center", color: "text.secondary", mt: 3 }}
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
              </>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
