import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useAuth } from "../../context/AuthContext";
import logoNegro from "../../assets/icons/logoNegro.svg";

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { resetPasswordFunction } = useAuth();
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordResetSubmit = handleSubmit(async (values, event) => {
    event.preventDefault();
    if (!token) {
      toast.error("Token no válido o expirado");
      return;
    }
    toast.promise(resetPasswordFunction(token, values.password), {
      loading: "Restableciendo contraseña...",
      success: () => {
        navigate("/login");
        return "Contraseña restablecida correctamente";
      },
      error: "Error al restablecer la contraseña",
    });
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      <Box sx={{ mb: 4 }}>
        <img
          src={logoNegro}
          alt="Logo Prompt The Future"
          style={{ maxWidth: "100px" }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: "450px",
          borderRadius: 2,
          textAlign: "center",
          p: 3,
          backgroundColor: "secondary.main",
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
          Restablecer contraseña
        </Typography>
        <form onSubmit={handlePasswordResetSubmit}>
          <TextField
            id="password"
            label="Nueva contraseña"
            variant="outlined"
            fullWidth
            type={showPassword ? "text" : "password"}
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
            })}
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
              mb: 3,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: errors.password ? "error.main" : "primary.main",
                },
                "&:hover fieldset": {
                  borderColor: errors.password ? "error.main" : "primary.dark",
                },
                "&.Mui-focused fieldset": {
                  borderColor: errors.password ? "error.main" : "primary.main",
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
            Restablecer contraseña
          </Button>
        </form>
      </Box>
    </Box>
  );
}
