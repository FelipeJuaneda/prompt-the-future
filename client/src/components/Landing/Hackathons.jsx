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
import langChainIcon from "../../assets/icons/langchain.svg";

const Hackathons = () => {
  return (
    <Container
      id="hackathons-section"
      sx={{ marginTop: 7, py: "60px" }}
      maxWidth="xl"
    >
      <Divider
        variant="middle"
        sx={{ backgroundColor: "secondary.main", marginBottom: 4 }}
      />
      <Box sx={{ padding: "60px 0" }}>
        <Typography variant="h4" color={"secondary.main"}>
          Hackathons
        </Typography>
      </Box>

      <Stack
        sx={{
          backgroundColor: "secondary.main",
          width: { xs: "100%", md: "75%" },
          margin: "auto",
          borderRadius: { xs: "15px 0px 15px 10px", md: "15px 0px 0px 15px" },
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
          }}
        >
          <Box
            sx={{
              bgcolor: "#B670E0",
              position: "absolute",
              right: 0,
              top: { xs: 0, md: 25 },
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
          <Typography sx={{ color: "black", fontWeight: "bold" }} variant="h6">
            LLMs Hackathon- Crea tu Aplicacion con modelos de Lenguaje
          </Typography>
          <Typography sx={{ color: "primary.main" }} variant="body1">
            Crea soluciones utilizando modelos de lenguaje diseñados para tareas
            especificas. Arma un equipo y compite por el premio mayor.
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Stack direction={"row"} gap={1}>
              <Box
                component={"img"}
                src={chatgptIcon}
                alt="ChatGPT"
                sx={{ width: { xs: 40, md: 50 }, height: { xs: 40, md: 50 } }}
              />
              <Box
                component={"img"}
                src={langChainIcon}
                alt="LangChain"
                sx={{ height: { xs: 40, md: 50 } }}
              />
            </Stack>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "#B670E0",
                color: "black",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#CF94E6",
                },
              }}
            >
              Unirme
            </Button>
          </Stack>
        </Stack>
        <Box
          component={"img"}
          src={hackathonsImg}
          alt="Hackathons"
          sx={{
            width: { xs: "100%", md: 280 },
            height: { xs: "150px", md: "auto" },
            objectFit: { xs: "cover" },
            borderRadius: { xs: "0px 0px 10px 10px", md: 0 },
          }}
        />
      </Stack>
    </Container>
  );
};

export default Hackathons;
