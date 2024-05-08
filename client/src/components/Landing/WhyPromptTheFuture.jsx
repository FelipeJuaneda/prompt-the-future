import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import fondoImg from "../../assets/imgs/whyPromptTheFuture.png";

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
          sx={{ textAlign: "center", fontWeight: "bold" }}
          color={"secondary.main"}
        >
          Aprende
        </Typography>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", fontWeight: "bold" }}
          color={"secondary.main"}
        >
          Innova
        </Typography>
        <Typography
          variant="h5"
          sx={{ textAlign: "center", fontWeight: "bold" }}
          color={"secondary.main"}
        >
          Transforma
        </Typography>
      </Stack>
      <Grid
        container
        spacing={4}
        sx={{ alignItems: "center", minHeight: "500px" }}
      >
        {/* Bloque de la izquierda */}
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
              minHeight: "400px",
              p: 4,
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", textAlign: "right", display: "block" }}
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

        {/* Bloque de la derecha con tarjetas */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {[
              { icon: "🚀", text: "Potencia tu carrera profesional" },
              {
                icon: "🎓",
                text: "Certifícate con empresas líderes de la Industria",
              },
              { icon: "👥", text: "Participa activamente de una comunidad." },
              {
                icon: "🌐",
                text: "Trabaja con las tecnologías mas nuevas y revolucionarias",
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "#454444",
                    borderRadius: 3,
                    height: 180,
                    gap: 2,
                    p: 2,
                  }}
                >
                  <Box sx={{ fontSize: 24 }}>{item.icon}</Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
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
