import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(4),
}));

const ComingSoon = () => {
  return (
    <StyledBox>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", color: "text.primary" }}
        >
          <span style={{ color: "#8627CC" }}>Prompt</span> The Future
        </Typography>
        <Typography
          variant="h5"
          component="p"
          align="center"
          gutterBottom
          sx={{ color: "text.secondary", marginBottom: 4 }}
        >
          ¡Próximamente! Estamos trabajando en algo increíble para ti.
        </Typography>
        <Box sx={{ textAlign: "center", marginTop: 4 }}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/"
            sx={{
              borderRadius: "50px",
              padding: "10px 20px",
              backgroundColor: "#8627CC",
              "&:hover": {
                backgroundColor: "#6e20a9",
              },
            }}
            startIcon={<HomeIcon />}
          >
            Volver al Inicio
          </Button>
        </Box>
      </Container>
    </StyledBox>
  );
};

export default ComingSoon;
