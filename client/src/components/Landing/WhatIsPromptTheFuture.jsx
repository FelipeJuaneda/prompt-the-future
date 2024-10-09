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

const WhatIsPromptTheFuture = () => {
  return (
    <Container
      sx={{
        backgroundImage: `url(${fondoImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "376px",
        p: 7,
      }}
      component={"section"}
      maxWidth="xl"
    >
      <Grid container spacing={4} sx={{ alignItems: "center" }}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography
              component={"span"}
              variant="h4"
              sx={{
                fontWeight: "bold",
                textAlign: "start",
                width: "50%",
                margin: "auto",
                display: "block",
              }}
            >
              ¿Que es{" "}
              <Typography
                component={"span"}
                variant="h4"
                sx={{ color: "#8627CC", fontWeight: "bold" }}
              >
                Prompt
              </Typography>
              <br />
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="h4"
                color={"black"}
              >
                The Future?
              </Typography>
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {[
              {
                icon: rocketIcon,
                title: "Crear nunca fue tan facil",
                text: "Gracias a la revolucion de la IA, materializar ideas y projectos es mucho mas facil. PTF es tu entorno perfecto para crear utilizando inteligencia artificial.",
              },
              {
                icon: certificateIcon,
                title: "Aprende con los mejores profesionales",
                text: "Certificate con profesionales que utilizan IA en su carrera profesional y son reconocidos por su excelencia academica.",
              },
              {
                icon: comunityIcon,
                title: "Participa activamente de una comunidad.",
                text: "Conviertete en parte de nuestra comunidad, aportando experiencias, recursos y participando de nuestras actividades para ganar experiencia practica.h",
              },
              {
                icon: tecnologyIcon,
                title:
                  "Trabaja con las tecnologias mas nuevas y revolucionarias",
                text: "Todos nuestros cursos y actividades estan constantemente actualizadas para utilizar las tecnologias mas avanzadas y novedosas.",
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

export default WhatIsPromptTheFuture;
