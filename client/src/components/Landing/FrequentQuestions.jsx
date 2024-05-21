import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const questions = [
  {
    question: "Que dedicación requieren los programas?",
    answer:
      "La dedicación varía según el programa, pero en general se espera que los estudiantes dediquen unas pocas horas cada semana a sus estudios.",
  },
  {
    question: "Hay un nivel mínimo de estudios o conocimientos previos?",
    answer:
      "No se requiere un nivel mínimo de estudios previos, pero tener conocimientos básicos relacionados puede ser útil.",
  },
  {
    question: "Hay una certificación final?",
    answer:
      "Sí, todos nuestros programas ofrecen una certificación final al completar satisfactoriamente todos los módulos.",
  },
];

const FrequentQuestions = () => {
  return (
    <Container
      sx={{
        backgroundColor: "primary.main",
        borderRadius: "8px",
      }}
      maxWidth="xl"
    >
      <Typography
        variant="h4"
        sx={{
          color: "#fff",
          padding: { xs: "30px 0", md: "60px" },
        }}
      >
        Preguntas frecuentes
      </Typography>
      <Box sx={{ width: { xs: "100%", md: "75%" }, margin: "auto" }}>
        {questions.map((item, index) => (
          <Accordion
            key={index}
            sx={{
              backgroundColor: "#D9D9D9",
              borderRadius: "10px",
              marginBottom: "20px",
              "&:before": {
                display: "none",
              },
              "&:first-of-type": {
                borderRadius: "10px",
              },
              "&:last-of-type": {
                borderRadius: "10px",
              },
              "&:first-of-type .MuiAccordionSummary-root": {
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              },
              "&:last-of-type .MuiAccordionDetails-root": {
                borderBottomLeftRadius: "10px",
                borderBottomRightRadius: "10px",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{
                minWidth: 0,
                "&.Mui-expanded": {
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "primary.main",
                  my: "4px",
                  fontSize: {
                    xs: "0.9rem",
                    sm: "1.1rem",
                    md: "1.2rem",
                    lg: "1.3rem",
                  },
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                "&.Mui-expanded": {
                  borderBottomLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.9rem",
                    sm: "1rem",
                    md: "1.1rem",
                    lg: "1.2rem",
                  },
                }}
              >
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default FrequentQuestions;
