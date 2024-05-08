import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";

const CourseCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 260,
        bgcolor: "secondary.main",
        borderRadius: "16px",
        boxShadow: 3,
      }}
    >
      <CardContent sx={{ padding: 3 }}>
        <Typography variant="subtitle2" color="text.secondary">
          Nivel principiante
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", mt: 1 }}
        >
          Fundamentos de Inteligencia Artificial
        </Typography>
        <Typography
          variant="body2"
          color="#3E3434"
          sx={{ mt: 1.5, fontWeight: "bold" }}
        >
          Aprende las bases de la inteligencia Artificial y cómo aplicarla en tu
          vida profesional.
        </Typography>
        <Divider sx={{ my: 1.5 }} />
        <Typography variant="body2" sx={{ fontSize: 14 }}>
          6 Semanas / 1 Clase semanal de 2h
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: 2.2,
            mb: 2,
          }}
        >
          <Typography
            variant="body1"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            $40.000 ARS
          </Typography>
          <Box sx={{ bgcolor: "#B670E0" }}>
            <Typography
              variant="button"
              color="#000000"
              sx={{
                fontSize: "0.875rem",
                fontWeight: "bold",
                padding: "0px 10px 0px 35px",
              }}
            >
              20%
            </Typography>
          </Box>
        </Box>
        <Button
          sx={{
            textTransform: "none",
            variant: "contained",
            bgcolor: "#8627CC",
            color: "secondary.main",
            "&:hover": {
              bgcolor: "#7b1fa2",
            },
            borderRadius: 20,
            width: "auto",
            py: 0.2,
            px: 3,
            mx: "auto",
            display: "block",
          }}
        >
          Ver Curso
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
