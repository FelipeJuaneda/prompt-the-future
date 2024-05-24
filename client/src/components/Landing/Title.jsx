import { Box, Button, Container, Typography } from "@mui/material";
import fondoLanding from "../../assets/imgs/fondoLanding.png";

const Title = () => {
  return (
    <Box
      component={"section"}
      sx={{
        height: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${fondoLanding})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        flexDirection: "column",
        color: "secondary.main",
        px: { xs: 3, sm: 10, md: 25 },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          width: "100%",
          animation: "enter 2s ease-in forwards",
          "@keyframes enter": {
            "0%": { opacity: 0, transform: "translateY(-20px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: 10,
              height: "100%",
              bgcolor: "secondary.main",
              position: "absolute",
              left: -20,
            }}
          />
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: "#8627CC",
              fontWeight: "bold",
              fontSize: {
                xs: "2.5rem",
                sm: "3.9rem",
                md: "4.7rem",
                lg: "5.5rem",
                xl: "7rem",
              },
            }}
          >
            Prompt
          </Typography>
          <Typography
            variant="h1"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: "bold",
              marginBottom: 0,
              fontSize: {
                xs: "2.5rem",
                sm: "3.9rem",
                md: "4.7rem",
                lg: "5.5rem",
                xl: "7rem",
              },
            }}
          >
            The Future
          </Typography>
        </Box>
        <Box
          sx={{ paddingLeft: { xs: "10px", md: "17px" }, marginTop: "10px" }}
        >
          <Typography
            component={"p"}
            variant="h6"
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              fontSize: { xs: "0.75rem", sm: "1rem", md: "1.25rem" },
            }}
          >
            Transforma el mundo con la Inteligencia Artificial
          </Typography>
          <Button
            sx={{
              mt: 2,
              py: 1,
              px: 3,
              bgcolor: "secondary.main",
              color: "primary.main",
              borderRadius: 2,
              textTransform: "none",
              fontSize: { xs: "0.75rem", sm: "1rem", md: "1.25rem" },
              transition: "all 0.3s",
              "&:hover": {
                opacity: "0.8",
                backgroundColor: "secondary.main",
                boxShadow: "none",
              },
            }}
          >
            Inscribirme ahora
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Title;
