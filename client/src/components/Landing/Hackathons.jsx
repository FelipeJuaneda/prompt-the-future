import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import hackathonsImg from "../../assets/imgs/hackathons.png";
import chatgptIcon from "../../assets/icons/chatgpt.svg";
import openAiLogo from "../../assets/icons/openAiLogo.svg";
import logoPromptTheFuture from "../../assets/icons/logoNegro.svg";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";

const Hackathons = () => {
  return (
    <Container
      component={"section"}
      id="hackathons-section"
      sx={{ marginTop: 7 }}
      maxWidth="xl"
    >
      <Divider
        variant="middle"
        sx={{ backgroundColor: "secondary.main", marginBottom: 4 }}
      />
      <Box sx={{ padding: { xs: "30px 0", md: "50px" } }}>
        <Typography component={"h1"} variant="h4" color={"secondary.main"}>
          Hackathons
        </Typography>
      </Box>

      <Stack
        sx={{
          backgroundColor: "secondary.main",
          width: { xs: "100%", md: "75%" },
          margin: "auto",
          borderRadius: "15px",
          position: "relative",
          flexDirection: { xs: "column", md: "row" },
        }}
        direction="row"
      >
        <Stack
          gap={{ xs: 2, md: 1 }}
          sx={{
            padding: { xs: "25px 16px 10px 16px", md: 2 },
            justifyContent: "space-around",
            flex: 1,
          }}
        >
          <Box
            sx={{
              bgcolor: "#B670E0",
              position: "absolute",
              right: 0,
              top: { xs: 0, md: 25 },
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            <Typography
              variant="button"
              color="#000000"
              sx={{
                fontSize: "0.875rem",
                fontWeight: "bold",
                padding: "10px 10px 10px 30px",
              }}
            >
              FREE
            </Typography>
          </Box>
          <Typography
            sx={{ color: "black", fontWeight: "bold" }}
            component={"h2"}
            variant="h6"
          >
            Buenos Aires Tech Week - AI Hackathon Build LLM Applications With
            GPT-4
          </Typography>
          <Typography sx={{ color: "primary.main" }} variant="body2">
            Cree aplicaciones notables con comprensión avanzada de audio, visión
            y texto con el nuevo GPT-4o.
          </Typography>
          <Box>
            <Stack
              direction="row"
              alignItems="center"
              gap={1}
              sx={{ color: "#8627CC" }}
            >
              <EventIcon />
              <Typography
                variant="body2"
                component="span"
                sx={{ fontWeight: "bold", color: "#8627CC" }}
              >
                Fecha: Viernes 7 de Junio 2024
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              gap={1}
              sx={{ color: "#8627CC" }}
            >
              <LocationOnIcon />
              <Typography
                variant="body2"
                component="span"
                sx={{ fontWeight: "bold", color: "#8627CC" }}
              >
                Lugar: REMOTO Tech Week, Buenos Aires
              </Typography>
            </Stack>
          </Box>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"space-between"}
            flexWrap="wrap"
            gap={2}
          >
            <Stack direction={"row"} gap={2}>
              <Box
                component={"img"}
                src={chatgptIcon}
                alt="ChatGPT"
                sx={{ width: 30, height: 30 }}
              />
              <Box
                component={"img"}
                src={openAiLogo}
                alt="openAI"
                sx={{ width: 90 }}
              />
              <Box
                component={"img"}
                src={logoPromptTheFuture}
                alt="Prompt The Future"
                sx={{ width: 80 }}
              />
            </Stack>
            <Button
              variant="contained"
              LinkComponent={Link}
              to="/hackathon"
              sx={{
                textTransform: "none",
                backgroundColor: "#B670E0",
                borderRadius: 3,
                color: "secondary.main",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#CF94E6",
                },
              }}
            >
              Ver Hackathon
            </Button>
          </Stack>
        </Stack>
        <Box
          component={"img"}
          src={hackathonsImg}
          alt="Hackathons"
          sx={{
            width: { xs: "100%", md: 280 },
            height: { xs: 200, md: "auto" },
            objectFit: "cover",
            borderRadius: "15px",
            padding: "10px",
          }}
        />
      </Stack>
    </Container>
  );
};

export default Hackathons;
