import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  Stack,
} from "@mui/material";
import arrobaIcon from "../../assets/icons/arroba.svg";
import instagramIcon from "../../assets/icons/instagram.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import { Link as LinkRouter } from "react-router-dom";
import { useCourses } from "../../context/CoursesContext";

const Footer = () => {
  const { courses } = useCourses();

  return (
    <Container
      component={"footer"}
      maxWidth="xl"
      sx={{
        backgroundColor: "primary.main",
        color: "white",
        paddingTop: "24px",
      }}
    >
      <Divider variant="middle" sx={{ backgroundColor: "secondary.main" }} />
      <Box sx={{ pt: 5, pb: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Educación
            </Typography>
            {courses.map((course, index) => (
              <Link
                to={`/courses/details/${course._id}`}
                component={LinkRouter}
                underline="hover"
                style={{
                  color: "white",
                  display: "block",
                  marginBottom: index === courses.length - 1 ? "0px" : "8px",
                }}
                key={course._id}
              >
                Curso {course.title}
              </Link>
            ))}
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Nosotros
            </Typography>
            <Link
              to={"/"}
              component={LinkRouter}
              underline="hover"
              style={{
                color: "white",
                display: "block",
                marginBottom: "8px",
              }}
              aria-label="Equipo"
            >
              Equipo
            </Link>
            <Link
              to={"/"}
              component={LinkRouter}
              underline="hover"
              style={{ color: "white" }}
              aria-label="Profesores y Tutores"
            >
              Profesores y Tutores
            </Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Contacto
            </Typography>
            <Link
              underline="hover"
              href="mailto:Prompt The Future<admin@prompt-the-future.com>"
              style={{
                color: "white",
                display: "block",
                marginBottom: "8px",
              }}
              aria-label="Email: admin@prompt-the-future.com"
            >
              Email: admin@prompt-the-future.com
            </Link>
            <Link
              href="tel:+5401140853574"
              underline="hover"
              style={{ color: "white" }}
              aria-label="Whatsapp: +54 011 4085 3574"
            >
              Whatsapp: +54 011 4085 3574
            </Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Discord
            </Typography>
            <Link
              href="https://discord.com/invite/QBWdf3PA"
              target="_blank"
              underline="hover"
              style={{ color: "white" }}
              aria-label="Únete a nuestro Discord!"
            >
              Únete a nuestro Discord!
            </Link>
          </Grid>
        </Grid>
        <Stack
          justifyContent={"center"}
          direction={"row"}
          gap={5}
          sx={{ pt: 5, pb: 2 }}
        >
          <Link
            href="https://www.linkedin.com/company/prompt-the-future/"
            target="_blank"
            underline="hover"
            aria-label="LinkedIn"
          >
            <Box
              component={"img"}
              src={linkedinIcon}
              alt="Prompt The Future LinkedIn"
              sx={{ width: 30, height: 30, "&:hover": { opacity: 0.6 } }}
            />
          </Link>
          <Link
            href="https://www.instagram.com/prompt_thefuture?igsh=eGJ3enIxOHptYWl0&utm_source=qr"
            target="_blank"
            underline="hover"
            aria-label="Instagram"
          >
            <Box
              component={"img"}
              src={instagramIcon}
              alt="Prompt The Future Instagram"
              sx={{ width: 30, height: 30, "&:hover": { opacity: 0.6 } }}
            />
          </Link>
          <Link
            to={"/"}
            component={LinkRouter}
            underline="hover"
            aria-label="Email"
          >
            <Box
              component={"img"}
              src={arrobaIcon}
              alt="Prompt The Future Email"
              sx={{ width: 30, height: 30, "&:hover": { opacity: 0.6 } }}
            />
          </Link>
        </Stack>
        {/* <Divider variant="middle" sx={{ backgroundColor: "secondary.main" }} />
        <Box sx={{ textAlign: "center", pt: 3 }}>
          <Typography variant="caption" sx={{ color: "white" }}>
            © Prompt The Future, Todos los Derechos Reservados
          </Typography>
        </Box> */}
      </Box>
    </Container>
  );
};

export default Footer;
