import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";
import { styled } from "@mui/system";

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
          Prompt The Future
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
            sx={{ borderRadius: "50px", padding: "10px 20px" }}
          >
            Suscríbete para actualizaciones
          </Button>
        </Box>
      </Container>
    </StyledBox>
  );
};

export default ComingSoon;
