import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box textAlign="center">
        <Typography
          variant="h2"
          sx={{ color: "white", fontWeight: "bold", mb: 3 }}
        >
          404
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "secondary.main" }}
        >
          Vaya, página no encontrada
        </Typography>
        <Typography sx={{ color: { xs: "grey.500", dark: "grey.400" }, mb: 3 }}>
          La página que buscas no existe o se ha movido.
        </Typography>
        <Button
          variant="contained"
          LinkComponent={Link}
          to="/"
          sx={{
            mt: 2,
            bgcolor: { xs: "grey.900", dark: "grey.50" },
            color: { xs: "grey.50", dark: "grey.900" },
            "&:hover": {
              bgcolor: { xs: "grey.900", dark: "grey.50" },
              opacity: 0.9,
            },
          }}
        >
          Ir a la página de inicio
        </Button>
      </Box>
    </Container>
  );
}
