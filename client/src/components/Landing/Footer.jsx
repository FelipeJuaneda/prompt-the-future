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
            <Link
              to={"/"}
              component={LinkRouter}
              underline="hover"
              style={{
                color: "white",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Curso Fundamentos Inteligencia Artificial
            </Link>
            <Link
              to={"/"}
              component={LinkRouter}
              underline="hover"
              style={{ color: "white" }}
            >
              Curso Prompt Engineering
            </Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Nosotros
            </Typography>
            <Link
              to={"/"}
              component={LinkRouter}
              underline="hover"
              style={{
                color: "white",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Equipo
            </Link>
            <Link
              to={"/"}
              component={LinkRouter}
              underline="hover"
              style={{ color: "white" }}
            >
              Profesores y Tutores
            </Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Contacto
            </Typography>
            <Link
              to={"/"}
              component={LinkRouter}
              underline="hover"
              style={{
                color: "white",
                display: "block",
                marginBottom: "8px",
              }}
            >
              Email: info@example.com
            </Link>
            <Link
              to={"/"}
              component={LinkRouter}
              underline="hover"
              style={{ color: "white" }}
            >
              Whatsapp: +1 234 567 890
            </Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Discord
            </Typography>
            <Link
              to={"/"}
              component={LinkRouter}
              underline="hover"
              style={{ color: "white" }}
            >
              Únete a nuestro Discord!
            </Link>
          </Grid>
        </Grid>
        <Stack
          justifyContent={"center"}
          direction={"row"}
          gap={5}
          sx={{ pt: 5, pb: 2 }}
        >
          <Link to={"/"} component={LinkRouter} underline="hover">
            <Box
              component={"img"}
              src={linkedinIcon}
              alt=""
              sx={{ width: 30, height: 30, "&:hover": { opacity: 0.6 } }}
            />
          </Link>
          <Link to={"/"} component={LinkRouter} underline="hover">
            <Box
              component={"img"}
              src={instagramIcon}
              alt=""
              sx={{ width: 30, height: 30, "&:hover": { opacity: 0.6 } }}
            />
          </Link>
          <Link to={"/"} component={LinkRouter} underline="hover">
            <Box
              component={"img"}
              src={arrobaIcon}
              alt=""
              sx={{ width: 30, height: 30, "&:hover": { opacity: 0.6 } }}
            />
          </Link>
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
