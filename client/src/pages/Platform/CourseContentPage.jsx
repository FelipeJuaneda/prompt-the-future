import React from "react";
import { useParams } from "react-router-dom";
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
import Loading from "../../commons/Loading";
import useCourseContent from "../../hooks/useCourseContent";
import HeaderContentPage from "../../components/Platform/HeaderContentPage";
import NoContentMessage from "../../components/Platform/NoContentMessage";

function CourseContentPage() {
  const { courseId } = useParams();
  const { content, loading } = useCourseContent(courseId);

  if (loading) return <Loading />;

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
    <>
      <HeaderContentPage content={content} />
      <Box sx={{ p: 3 }}>
        {content ? (
          <>
            {renderAccordion(content.videos, VideoLibraryIcon, "Videos")}
            {renderAccordion(content.readings, PictureAsPdfIcon, "Lecturas")}
            {renderAccordion(content.quizzes, QuizIcon, "Cuestionarios", true)}
          </>
        ) : (
          <NoContentMessage />
        )}
      </Box>
    </>
  );
}

export default CourseContentPage;
