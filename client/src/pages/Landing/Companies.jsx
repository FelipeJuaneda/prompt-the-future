import { Box, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SEO from "../../commons/Seo";

const Companies = () => {
  return (
    <>
      <SEO
        title="Cursos para Empresas | Prompt The Future"
        description="Personalizamos cursos para empresas que buscan implementar Inteligencia Artificial en sus procesos. Contacta con nosotros para más información."
        keywords="cursos para empresas, inteligencia artificial para empresas, personalización de cursos, Prompt The Future, AI en negocios, cursos de IA para empresas "
        canonical="https://prompt-the-future.com/companies"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "background.default",
          padding: 4,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", color: "primary.main" }}
          >
            <span style={{ color: "#8627CC" }}>Prompt</span> The Future
          </Typography>
          <Typography
            variant="h5"
            component="p"
            align="center"
            gutterBottom
            sx={{ color: "text.secondary" }}
          >
            Personalizamos Cursos para empresas que están buscando utilizar
            Inteligencia Artificial en toda su cadena de trabajos.
          </Typography>
          <Typography
            variant="h6"
            component="p"
            align="center"
            sx={{ color: "text.secondary", marginBottom: 4 }}
          >
            Ponte en contacto en{" "}
            <a
              href="mailto:admin@prompt-the-future.com"
              style={{ color: "#8627CC" }}
            >
              admin@prompt-the-future.com
            </a>{" "}
            o llamando a{" "}
            <a href="tel:+5401140853574" style={{ color: "#8627CC" }}>
              +54 011 4085 3574
            </a>
            .
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
      </Box>
    </>
  );
};

export default Companies;
