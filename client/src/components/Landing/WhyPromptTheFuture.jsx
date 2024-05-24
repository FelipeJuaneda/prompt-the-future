import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import fondoImg from "../../assets/imgs/whyPromptTheFuture.png";
import certificateIcon from "../../assets/icons/certificateIcon.svg";
import comunityIcon from "../../assets/icons/comunityIcon.svg";
import rocketIcon from "../../assets/icons/rocketIcon.svg";
import tecnologyIcon from "../../assets/icons/tecnologyIcon.svg";

const WhyPromptTheFuture = () => {
  return (
    <Container maxWidth="xl">
      <Divider variant="middle" sx={{ backgroundColor: "secondary.main" }} />
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        sx={{ padding: "60px 0" }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "secondary.main",
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
          }}
        >
          Aprende
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "secondary.main",
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
          }}
        >
          Innova
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "secondary.main",
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
          }}
        >
          Transforma
        </Typography>
      </Stack>
      <Grid
        container
        spacing={4}
        sx={{ alignItems: "center", minHeight: "500px" }}
      >
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundImage: `url(${fondoImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "20px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minHeight: "376px",
              p: 4,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textAlign: "right",
                display: "block",
              }}
            >
              ¿Por qué{" "}
              <Typography
                variant="h4"
                component="span"
                sx={{ color: "#8627CC", fontWeight: "bold" }}
              >
                Prompt
              </Typography>
              <br />
              The Future?
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {[
              {
                icon: rocketIcon,
                title: "Potencia tu carrera profesional",
                text: "Aprende a utilizar la IA para potenciar tu carrera y adaptarte a las nuevas tecnologías, manteniéndote en la vanguardia del desarrollo tecnológico.",
              },
              {
                icon: certificateIcon,
                title: "Certifícate con empresas líderes de la Industria",
                text: "Nuestros certificados están avalados por los mejores profesionales trabajando con IA y las empresas líderes de la industria.",
              },
              {
                icon: comunityIcon,
                title: "Participa activamente de una comunidad.",
                text: "Conviértete en parte de nuestra comunidad, aportando experiencias, recursos y participando de nuestras actividades para ganar experiencia práctica.",
              },
              {
                icon: tecnologyIcon,
                title:
                  "Trabaja con las tecnologías más nuevas y revolucionarias",
                text: "Todos nuestros cursos y actividades están constantemente actualizadas para utilizar las tecnologías más novedosas.",
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    bgcolor: "#454444",
                    borderRadius: 3,
                    height: 180,
                    p: 2,
                    overflow: "hidden",
                  }}
                >
                  <Stack
                    width={"100%"}
                    direction={"row"}
                    justifyContent={"space-between"}
                    gap={2}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: "bold",
                        textAlign: "start",
                        color: "white",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Box
                      component={"img"}
                      src={item.icon}
                      alt={item.title}
                      sx={{ width: 25, height: 25 }}
                    />
                  </Stack>
                  <Typography
                    variant="caption"
                    sx={{
                      textAlign: "start",
                      color: "white",
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyPromptTheFuture;
