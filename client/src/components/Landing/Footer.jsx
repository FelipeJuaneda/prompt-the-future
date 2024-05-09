import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  Stack,
} from "@mui/material";
import arrobaIcon from "../../assets/icons/arroba.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import { Link as LinkRouter } from "react-router-dom";

const Footer = () => {
  return (
    <Container
      component={"footer"}
      maxWidth="xl"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        paddingTop: "24px ",
      }}
    >
      <Divider variant="middle" sx={{ backgroundColor: "secondary.main" }} />
      <Box sx={{ pt: 5, pb: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Educacion
            </Typography>
            <LinkRouter
              to={"/"}
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Curso Fundamentos Inteligencia Artificial
            </LinkRouter>
            <LinkRouter
              to={"/"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Curso Prompt Engineering
            </LinkRouter>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Nosotros
            </Typography>
            <LinkRouter
              to={"/"}
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Equipo
            </LinkRouter>
            <LinkRouter
              to={"/"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Profesores y Tutores
            </LinkRouter>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Contacto
            </Typography>
            <LinkRouter
              to={"/"}
              style={{
                textDecoration: "none",
                color: "white",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Email: info@example.com
            </LinkRouter>
            <LinkRouter
              to={"/"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Whatsapp: +1 234 567 890
            </LinkRouter>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Discord
            </Typography>
            <LinkRouter
              to={"/"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Únete a nuestro Discord!
            </LinkRouter>
          </Grid>
        </Grid>
        <Stack
          justifyContent={"center"}
          direction={"row"}
          gap={5}
          sx={{ pt: 5, pb: 2 }}
        >
          <LinkRouter to={"/"}>
            <Box
              component={"img"}
              src={linkedinIcon}
              alt=""
              sx={{ width: 30, height: 30, "&:hover": { opacity: 0.6 } }}
            />
          </LinkRouter>
          <LinkRouter to={"/"}>
            <Box
              component={"img"}
              src={instagramIcon}
              alt=""
              sx={{ width: 30, height: 30, "&:hover": { opacity: 0.6 } }}
            />
          </LinkRouter>
          <LinkRouter to={"/"}>
            <Box
              component={"img"}
              src={arrobaIcon}
              alt=""
              sx={{ width: 30, height: 30, "&:hover": { opacity: 0.6 } }}
            />
          </LinkRouter>
        </Stack>
        <Divider variant="middle" sx={{ backgroundColor: "secondary.main" }} />
        <Box sx={{ textAlign: "center", pt: 3 }}>
          <Typography variant="caption" sx={{ color: "white" }}>
            © Prompt The Future, Todos los Derechos Reservados
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
