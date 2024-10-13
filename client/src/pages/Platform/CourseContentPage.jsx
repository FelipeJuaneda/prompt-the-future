import { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Tabs, Tab, Chip, Link, Paper } from "@mui/material";

import Loading from "../../commons/Loading";
import useCourseContent from "../../hooks/useCourseContent";
import HeaderContentPage from "../../components/Platform/HeaderContentPage";
import PlayCircleIcon from "@mui/icons-material/PlayCircleOutline";

function CourseContentPage() {
  const { courseId } = useParams();
  const { content, loading } = useCourseContent(courseId);
  console.log("🚀 ~ CourseContentPage ~ content:", content);

  const [tabValue, setTabValue] = useState(0);
  const [moduleTabValue, setModuleTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue); // Maneja el cambio de tab horizontal
  };

  const handleModuleTabChange = (event, newValue) => {
    setModuleTabValue(newValue);
  };

  if (loading) return <Loading />;

  const renderModuleContent = (moduleIndex) => {
    return (
      <Box>
        <Typography variant="h6">Módulo {moduleIndex + 1}</Typography>
        <Paper sx={{ p: 2, mt: 2, backgroundColor: "#333", color: "white" }}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Box key={index} sx={{ mb: 4 }}>
              <Typography variant="h6">Clase {index + 1}: "Título"</Typography>
              {/* Icono de video */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#555",
                  height: "200px",
                  mt: 2,
                }}
              >
                <PlayCircleIcon sx={{ fontSize: 80, color: "red" }} />
              </Box>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Texto texto texto texto texto texto texto texto texto texto
                texto texto texto texto texto texto texto texto texto texto
                texto texto texto texto texto texto texto texto texto texto
                texto texto texto texto texto texto texto texto texto texto
                texto texto texto texto texto texto texto texto texto texto.
              </Typography>
            </Box>
          ))}
        </Paper>
      </Box>
    );
  };

  const renderTabContent = (tabIndex) => {
    switch (tabIndex) {
      case 0:
        return (
          <Box>
            <Typography color={"white"}>{content.description}</Typography>
            <Box>
              <Typography variant="h6" color={"white"} sx={{ my: 2 }}>
                Skills que vas a adquirir
              </Typography>
              <Chip
                label="Machine Learning"
                sx={{
                  backgroundColor: "#4D4D4D",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "0px 8px",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
                  borderRadius: "5px",
                }}
              />
            </Box>
          </Box>
        );
      case 1:
        return (
          <Box
            sx={{
              display: "flex",
              minHeight: "100vh",
              backgroundColor: "#2c2c2c",
              color: "white",
            }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={moduleTabValue}
              onChange={handleModuleTabChange}
              aria-label="Módulos"
              sx={{
                borderRight: 1,
                borderColor: "divider",
                backgroundColor: "#2c2c2c",
                width: "350px",
                padding: 1,
                position: "sticky",
                top: "20px",
                height: "max-content",
              }}
            >
              {Array.from({ length: 4 }).map((_, index) => (
                <Tab
                  label={`Módulo ${index + 1}`}
                  key={index}
                  sx={{
                    color: "white",
                    textAlign: "left",
                    "&.Mui-selected": {
                      backgroundColor: "#555",
                      color: "white",
                    },
                  }}
                />
              ))}
            </Tabs>

            <Box
              sx={{ flexGrow: 1, p: 3, background: "#454444", borderRadius: 3 }}
            >
              {renderModuleContent(moduleTabValue)}{" "}
            </Box>
          </Box>
        );
      case 2:
        return (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#4D4D4D",
              padding: "10px 20px",
              borderRadius: "8px",
              color: "white",
              marginBottom: "10px",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              FECHA
            </Typography>

            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              TEMA
            </Typography>

            <Link
              href="#"
              sx={{
                color: "#6c63ff",
                textDecoration: "none",
                fontWeight: "bold",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              LINK
            </Link>

            <Chip
              label="Modulo 1"
              sx={{
                backgroundColor: "#6c3483",
                color: "white",
                fontWeight: "bold",
                padding: "0 10px",
              }}
            />
          </Box>
        );
      case 3:
        return (
          <Typography>
            Prueba tus conocimientos con los cuestionarios.
          </Typography>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <HeaderContentPage content={content} />

      <Box sx={{ p: 3 }}>
        <Typography variant="h5" color={"white"} sx={{ mb: 2 }}>
          ¡Bienvenido a tu Curso!
        </Typography>
        <Typography variant="h5" color={"white"} sx={{ mb: 2 }}>
          {content.title}
        </Typography>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 4, p: 1 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="course tabs"
          TabIndicatorProps={{
            sx: { backgroundColor: "secondary.main" },
          }}
          sx={{
            "& .MuiTab-root": {
              color: "white",
            },
            "& .Mui-selected": {
              color: "white !important",
            },
          }}
        >
          <Tab label="Sobre el curso" />
          <Tab label="Módulos" />
          <Tab label="Clases en vivo" />
          <Tab label="Cuestionarios" />
        </Tabs>

        <Box sx={{ p: 3 }}>{renderTabContent(tabValue)}</Box>
      </Box>
    </>
  );
}

export default CourseContentPage;
