import { Box, Typography, Stack, Link, Grid, Container } from "@mui/material";
import imgDesign from "../../assets/imgs/Landing/design.png"; 
import design2 from "../../assets/imgs/design2.png";

const Design = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          color: "white",
          padding: { xs: "10px", md: "20px" },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#ffffff",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Design
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
          sx={{ marginBottom: "40px" }}
        >
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Crimson Text",
                marginBottom: "20px",
                width: { xs: "100%", md: "80%" },
                margin: "auto auto 20px auto",
              }}
            >
              “Right now, people talk about being an AI company. There was a
              time after the iPhone App Store launch where people talked about
              being a mobile company. But no software company says they’re a
              mobile company now because it’d be unthinkable to not have a
              mobile app. And it’ll be unthinkable not to have intelligence
              integrated into every product and service. It’ll just be an
              expected, obvious thing.”
            </Typography>
            <Link
              href="#"
              sx={{
                color: "white",
                textDecoration: "underline",
              }}
            >
              Sam Altman
            </Link>
            , co-founder and CEO,{" "}
            <Link
              href="#"
              sx={{
                textDecoration: "underline",
                color: "white",
              }}
            >
              OpenAI
            </Link>
          </Box>

          <Box
            component="img"
            src={imgDesign}
            alt="Design Image"
            sx={{
              width: { xs: "100%", md: "40%" },
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Stack>

        {/* Portfolio Section */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#ffffff",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Portfolio
        </Typography>

        <Stack
          direction="row"
          justifyContent="space-between"
          flexWrap="wrap"
          sx={{ marginBottom: "40px" }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <Box
              key={index}
              component="img"
              src={imgDesign}
              alt={`Portfolio Image ${index + 1}`}
              sx={{
                width: { xs: "100%", md: "30%" },
                height: "auto",
                marginBottom: "20px",
                borderRadius: "8px",
              }}
            />
          ))}
        </Stack>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Box
              component="img"
              src={imgDesign}
              alt="Large Image Left"
              sx={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack spacing={4}>
              <Box
                component="img"
                src={imgDesign}
                alt="Top Right Image"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
              {/* Segunda imagen derecha con efecto hover */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  borderRadius: "8px",
                  overflow: "hidden", // Para asegurarnos que la imagen extra no sobresalga
                }}
              >
                {/* Imagen original */}
                <Box
                  component="img"
                  src={imgDesign}
                  alt="Bottom Right Image"
                  sx={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    borderRadius: "8px",
                    transition: "opacity 0.3s ease-in-out", // Suaviza el efecto de aparición
                  }}
                />
                {/* Imagen de hover (design2) */}
                <Box
                  component="img"
                  src={design2}
                  alt="Hover Image"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "180%",
                    height: "100%",
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out", 
                    objectFit: "cover",
                    "&:hover": {
                      opacity: 1, 
                    },
                  }}
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Design;
