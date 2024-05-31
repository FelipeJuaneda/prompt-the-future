import { Box, Stack, TextField, Button, Typography, Link } from "@mui/material";

export default function ForgotPasswordForm({
  handleForgotPasswordSubmit,
  register,
  errors,
  setForgotPassword,
}) {
  return (
    <Stack gap={3} sx={{ textAlign: "center", marginBottom: 4 }}>
      <Box>
        <Typography variant="h4" fontWeight="bold">
          Restablecer contraseña
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ingresa tu correo electrónico y te enviaremos un código para
          restablecerla.
        </Typography>
      </Box>
      <Box component={"form"}>
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
        <Button
          variant="contained"
          fullWidth
          type="submit"
          onClick={handleForgotPasswordSubmit}
          sx={{
            marginTop: "10px",
            backgroundColor: "primary.main",
            padding: "10px 20px",
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
        >
          Enviar
        </Button>
      </Box>
      <Link
        underline="hover"
        sx={{
          mt: 1,
          textAlign: "center",
          display: "block",
          color: "primary.main",
          cursor: "pointer",
        }}
        onClick={() => setForgotPassword(false)}
      >
        Volver a Iniciar sesión
      </Link>
    </Stack>
  );
}
