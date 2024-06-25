import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NoContentMessage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 5,
        backgroundColor: "white",
        p: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" gutterBottom>
        No hay contenido disponible en este momento.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Por favor, regresa más tarde o contacta con el soporte si crees que esto
        es un error.
      </Typography>
      <Button
        sx={{ mt: 3 }}
        variant="contained"
        color="primary"
        onClick={() => navigate("/platform")}
      >
        Volver a la Plataforma
      </Button>
    </Box>
  );
};

export default NoContentMessage;
