import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QuizIcon from "@mui/icons-material/Quiz";
import { getContentsRequest } from "../../api/content";
import { toast } from "sonner";
import Spinner from "../../commons/Spinner";

function CourseContentPage() {
  const { courseId } = useParams();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      try {
        const response = await getContentsRequest(courseId);
        setContent(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching course content:", error);
        toast.error(error.response.data.message, { duration: 4000 });
        setLoading(false);
        if (error.response && error.response.status === 403) {
          navigate("/");
        }
      }
    };

    fetchContent();
  }, [courseId, history]);
  if (loading) return <Spinner />;

  if (!content)
    return <Typography variant="h6">No hay contenido disponible</Typography>;

  const renderAccordion = (items, Icon, label, isQuiz = false) => (
    <Accordion sx={{ bgcolor: "background.paper", mb: 2 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel-${label}-content`}
        id={`panel-${label}-header`}
      >
        <Typography>
          {label} <Icon />
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ flexDirection: "column" }}>
        {items.map((item) => (
          <Box key={item._id} sx={{ mb: 2 }}>
            {isQuiz ? (
              <>
                <Typography variant="subtitle1">{item.title}</Typography>
                <Button variant="contained" color="secondary">
                  Comenzar Cuestionario
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                color="primary"
                href={item.url}
                target="_blank"
                sx={{ mb: 2 }}
              >
                {item.title}
              </Button>
            )}
          </Box>
        ))}
      </AccordionDetails>
    </Accordion>
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Contenido del Curso
      </Typography>
      {renderAccordion(content.videos, VideoLibraryIcon, "Videos")}
      {renderAccordion(content.readings, PictureAsPdfIcon, "Lecturas")}
      {renderAccordion(content.quizzes, QuizIcon, "Cuestionarios", true)}
    </Box>
  );
}

export default CourseContentPage;
