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
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getContentsRequest } from "../../api/content";

function CourseContentPage() {
  const { courseId } = useParams();
  const [content, setContent] = useState(null);
  console.log("🚀 ~ CourseContentPage ~ content:", content);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await getContentsRequest(courseId);
        setContent(response.data);
      } catch (error) {
        console.error("Error fetching course content:", error);
        setError("Failed to fetch course content");
      }
    };

    fetchContent();
  }, [courseId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Contenido del Curso
      </Typography>

      <Accordion sx={{ bgcolor: "background.paper", mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-videos-content"
          id="panel-videos-header"
        >
          <Typography>
            Videos <VideoLibraryIcon />
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ flexDirection: "column" }}>
          {content.videos.map((video) => (
            <Box key={video._id} sx={{ mb: 2 }}>
              <video width="100%" controls>
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <Typography variant="subtitle1">{video.title}</Typography>
              <Typography variant="caption">{video.duration}</Typography>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ bgcolor: "background.paper", mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-readings-content"
          id="panel-readings-header"
        >
          <Typography>
            Lecturas <PictureAsPdfIcon />
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ flexDirection: "column" }}>
          {content.readings.map((reading) => (
            <Button
              key={reading._id}
              variant="contained"
              color="primary"
              href={reading.url}
              target="_blank"
              sx={{ mb: 2 }}
            >
              {reading.title}
            </Button>
          ))}
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ bgcolor: "background.paper", mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-quizzes-content"
          id="panel-quizzes-header"
        >
          <Typography>
            Cuestionarios <QuizIcon />
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ flexDirection: "column" }}>
          {content.quizzes.map((quiz) => (
            <Box key={quiz._id} sx={{ mb: 2 }}>
              <Typography variant="subtitle1">{quiz.title}</Typography>
              <Button variant="contained" color="secondary" href="#">
                Comenzar Cuestionario
              </Button>
            </Box>
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default CourseContentPage;
