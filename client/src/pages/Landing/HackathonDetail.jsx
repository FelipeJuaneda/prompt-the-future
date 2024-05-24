import { Box, Button, Container, Stack, Typography, Grid } from "@mui/material";
import OnlineButton from "../../commons/OnlineButton";
import discord from "../../assets/icons/discord.svg";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import fondoImg from "../../assets/imgs/whyPromptTheFuture.png";
import { useAuth } from "../../context/AuthContext";
import { sendEventEmail } from "../../api/email";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import SEO from "../../commons/Seo";

const HackathonDetail = () => {
  const { isAuthenticated, user, setRedirectAfterLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleJoin = async () => {
    if (!user && !isAuthenticated) {
      setRedirectAfterLogin(location.pathname);
      navigate("/login");
      throw new Error("User not authenticated");
    }
    const eventDetails = {
      name: "Buenos Aires Tech Week - AI Hackathon",
      date: "Viernes 7 de Junio 2024",
      location: "REMOTO Tech Week, Buenos Aires",
    };
    const dataUser = {
      email: user.email,
      name: `${user.name} ${user.surname}`,
    };
    try {
      const response = await sendEventEmail(dataUser, eventDetails);
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  };
  const handlerClick = (values, event) => {
    toast.promise(handleJoin, {
      loading: "Enviando...",
      success: "Se ha enviado un correo con la información del evento",
      error: (error) =>
        error.message === "User not authenticated"
          ? "Debes tener una cuenta para unirte"
          : "Hubo un error al enviar el correo",
    });
  };

  return (
    <>
      <SEO
        title="Detalles del Hackathon | Prompt The Future"
        description="Únete a los Hackathons de Prompt The Future y participa en eventos tecnológicos emocionantes. Aprende a construir aplicaciones con GPT-4 y colabora con líderes de la industria en un entorno remoto y estimulante. ¡Inscríbete ahora! ¡No te lo pierdas!"
        keywords="Hackathons, Prompt The Future, GPT-4, eventos tecnológicos, aplicaciones IA, colaboración tecnológica, Hackathon remoto, Buenos Aires Tech Week, IA en la industria, innovación tecnológica, Discord PTF, Hackathon Discord, Hackathon AI, Hackathon GPT-4, Hackathon Buenos Aires Tech Week, Hackathon REMOTO Tech Week, Hackathon IA, Hackathon IA Buenos Aires, Hackathon IA REMOTO, Hackathon IA Tech Week, Hackathon IA GPT-4, Hackathon IA Discord, Hackathon IA PTF, Hackathon IA Prompt The Future"
        canonical="https://prompt-the-future.com/hackathon"
      />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography
          sx={{ marginBottom: 2 }}
          variant="body2"
          color="secondary.main"
        >
          Viernes, Junio 7 2024 - 1:00 PM America/Buenos_Aires
        </Typography>
        <OnlineButton />
        <Box sx={{ width: { xs: "100%", md: "75%" }, my: 4 }}>
          <Typography
            sx={{ marginBottom: 3, fontWeight: "bold" }}
            variant="h4"
            color="secondary.main"
          >
            Buenos Aires Tech Week - AI Hackathon Build LLM Applications With
            GPTo
          </Typography>
          <Typography variant="h5" color="secondary.main">
            Cree aplicaciones notables con comprensión avanzada de audio, visión
            y texto con el nuevo GPT-4o.
          </Typography>
          <Stack sx={{ my: 4 }} direction="row" spacing={2}>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "#B670E0",
                borderRadius: "10px",
                color: "white",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#CF94E6",
                },
              }}
              onClick={handlerClick}
            >
              Unirme
            </Button>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                borderRadius: "10px",
                backgroundColor: "secondary.main",
                color: "#B670E0",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                "&:hover": {
                  backgroundColor: "transparent",
                  borderColor: "#CF94E6",
                  color: "#CF94E6",
                },
              }}
            >
              Discord
              <Box
                component="img"
                src={discord}
                alt="Prompt The FutureDiscord"
                sx={{ width: 20, height: 20, ml: 1 }}
              />
            </Button>
          </Stack>
        </Box>
        {/* Únete a la Revolución de la Inteligencia Artificial */}
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            p: 3,
            boxShadow: 3,
            mb: 4,
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mb: 2, color: "#8627CC" }}
          >
            ¡Únete a la Revolución de la Inteligencia Artificial en la Tech Week
            de Buenos Aires!
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2, color: "#8627CC" }}>
            ¿Estás listo para ser parte de un evento que marcará un antes y un
            después en el mundo de la inteligencia artificial?{" "}
            <Box component="span" sx={{ fontWeight: "bold" }}>
              Prompt The Future
            </Box>{" "}
            presenta su primer hackathon, una competencia vibrante y llena de
            energía, donde los mejores talentos se reunirán para crear
            herramientas innovadoras basadas en modelos de lenguaje para
            diversas industrias.
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2 }}>
            <EventIcon sx={{ color: "#8627CC" }} />
            <Typography variant="body2" sx={{ color: "#8627CC" }}>
              <Box component="span" sx={{ fontWeight: "bold" }}>
                Fecha:
              </Box>
              Viernes 7 de Junio 2024
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
            <LocationOnIcon sx={{ color: "#8627CC" }} />
            <Typography variant="body2" sx={{ color: "#8627CC" }}>
              <Box component="span" sx={{ fontWeight: "bold" }}>
                Lugar:
              </Box>
              REMOTO Tech Week, Buenos Aires
            </Typography>
          </Stack>
        </Box>

        {/* ¿Qué es el LLM Hackathon de Prompt The Future? */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "secondary.main", mb: 2 }}
          >
            ¿Qué es el LLM Hackathon de Prompt The Future?
          </Typography>
          <Typography variant="body1" sx={{ color: "secondary.main", mb: 2 }}>
            Nuestro hackathon es un evento diseñado para fomentar la
            creatividad, la innovación y la colaboración entre desarrolladores,
            ingenieros, diseñadores y entusiastas de la IA. Durante 3 días
            intensivos, los participantes trabajarán en equipos para desarrollar
            soluciones que aprovechen el poder de los modelos de lenguaje, con
            el objetivo de transformar industrias y resolver problemas del mundo
            real.
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", color: "secondary.main", mb: 2 }}
          >
            Desafíos del Hackathon
          </Typography>
          <Typography variant="body1" sx={{ color: "secondary.main" }}>
            Los participantes tendrán la oportunidad de elegir entre varios
            desafíos centrados en diferentes sectores como la salud, la
            educación, el comercio, la finanza, y más. Cada equipo deberá
            desarrollar una herramienta o aplicación que utilice modelos de
            lenguaje para abordar problemas específicos y presentar soluciones
            viables y creativas.
          </Typography>
        </Box>

        {/* ¿Por qué participar en el Hackathon de Prompt The Future? */}
        <Box
          sx={{
            mb: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
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
              minHeight: { xs: "100px", md: "310px" },

              p: 4,
              flex: 0.5,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                display: "block",
                width: "100%",
              }}
            >
              ¿Por qué participar en el Hackathon de{" "}
              <Typography
                variant="h5"
                component="span"
                sx={{ color: "#8627CC", fontWeight: "bold" }}
              >
                Prompt{" "}
              </Typography>
              The Future?
            </Typography>
          </Box>

          <Stack
            flex={1}
            justifyContent={"space-evenly"}
            gap={{ xs: 1.5, md: 0 }}
          >
            <Typography variant="body1" sx={{ color: "secondary.main" }}>
              <Box
                component="span"
                sx={{ fontWeight: "bold", color: "secondary.main" }}
              >
                ° Networking:
              </Box>{" "}
              Conecta con profesionales de la industria, mentores y potenciales
              inversores.
            </Typography>
            <Typography variant="body1" sx={{ color: "secondary.main" }}>
              <Box
                component="span"
                sx={{ fontWeight: "bold", color: "secondary.main" }}
              >
                ° Aprendizaje:
              </Box>{" "}
              Accede a talleres y charlas impartidas por expertos en IA y
              tecnología.
            </Typography>
            <Typography variant="body1" sx={{ color: "secondary.main" }}>
              <Box
                component="span"
                sx={{ fontWeight: "bold", color: "secondary.main" }}
              >
                ° Innovación:
              </Box>{" "}
              Desafíate a ti mismo y a tu equipo a crear soluciones disruptivas
              que puedan impactar positivamente en la sociedad.
            </Typography>
            <Typography variant="body1" sx={{ color: "secondary.main" }}>
              <Box
                component="span"
                sx={{ fontWeight: "bold", color: "secondary.main" }}
              >
                ° Reconocimiento:
              </Box>{" "}
              Gana visibilidad y reconocimiento en una de las semanas
              tecnológicas más importantes de la región.
            </Typography>
          </Stack>
        </Box>

        {/* ¿Cómo Inscribirse? */}
        <Box sx={{ my: 4 }}>
          <Typography
            sx={{ mb: 4 }}
            textAlign={"center"}
            color={"secondary.main"}
          >
            ¡Todos son bienvenidos! Ya seas un desarrollador experimentado, un
            estudiante apasionado por la tecnología, un diseñador creativo, o
            simplemente alguien con ideas innovadoras, este hackathon es para
            ti.
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", mb: 2, color: "secondary.main" }}
          >
            ¿Cómo Inscribirse?
          </Typography>
          <ol style={{ padding: 0, marginLeft: "1rem" }}>
            <li style={{ color: "white" }}>
              <Typography
                variant="body1"
                sx={{ color: "secondary.main", mb: 2 }}
              >
                <Box component="span" sx={{ fontWeight: "bold" }}>
                  Regístrate:
                </Box>{" "}
                Clickea en UNIRME e ingresa tu email para hacerte una cuenta en
                PTF. Recibirás un mail de confirmación.
              </Typography>
            </li>
            <li style={{ color: "white" }}>
              <Typography
                variant="body1"
                sx={{ color: "secondary.main", mb: 2 }}
              >
                <Box component="span" sx={{ fontWeight: "bold" }}>
                  Entra al Discord:
                </Box>{" "}
                Todo el Hackathon se va a estar haciendo por el servidor de PTF
                en Discord.
              </Typography>
            </li>
            <li style={{ color: "white" }}>
              <Typography
                variant="body1"
                sx={{ color: "secondary.main", mb: 2 }}
              >
                <Box component="span" sx={{ fontWeight: "bold" }}>
                  Forma tu equipo:
                </Box>{" "}
                Puedes inscribirte con tu equipo ya formado o unirte a otros
                participantes el primer día del evento.
              </Typography>
            </li>
            <li style={{ color: "white" }}>
              <Typography variant="body1" sx={{ color: "secondary.main" }}>
                <Box component="span" sx={{ fontWeight: "bold" }}>
                  Prepárate para Innovar:
                </Box>{" "}
                ¡Trae tu creatividad y pasión por la tecnología y prepárate para
                una experiencia inolvidable!
              </Typography>
            </li>
          </ol>
          <Typography variant="body1" sx={{ color: "secondary.main", mb: 2 }}>
            No pierdas la oportunidad de unirte a la revolución de la
            Inteligencia artificial!
          </Typography>
          <Typography variant="body1" sx={{ color: "secondary.main", mb: 4 }}>
            ¡Inscríbete ahora y sé parte del cambio!
          </Typography>
          <Stack direction="row" justifyContent={"center"} spacing={2}>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                backgroundColor: "#B670E0",
                borderRadius: "10px",
                color: "white",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#CF94E6",
                },
              }}
              onClick={handlerClick}
            >
              Unirme
            </Button>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                borderRadius: "10px",
                backgroundColor: "secondary.main",
                color: "#B670E0",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                "&:hover": {
                  backgroundColor: "transparent",
                  borderColor: "#CF94E6",
                  color: "#CF94E6",
                },
              }}
            >
              Discord
              <Box
                component="img"
                src={discord}
                alt="Prompt The Future Discord"
                sx={{ width: 20, height: 20, ml: 1 }}
              />
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default HackathonDetail;
