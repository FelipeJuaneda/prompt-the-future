import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Skeleton,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course, loading }) => {
  const formatPrice = (price) => {
    return price.toLocaleString("es-AR");
  };

  console.log(course);
  return (
    <Card
      sx={{
        maxWidth: 260,
        minHeight: 400,
        bgcolor: "secondary.main",
        borderRadius: "16px",
        boxShadow: 3,
        position: "relative",
        overflow: "visible",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {loading ? (
        <Skeleton
          variant="rectangular"
          width={260}
          height={400}
          sx={{ bgcolor: "primary.main" }}
        />
      ) : (
        <>
          <CardContent sx={{ padding: 3, flexGrow: 1 }}>
            <Typography variant="subtitle2" color="text.secondary">
              Nivel {course.level}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: "bold",
                mt: 1,
                minHeight: 64,
                alignContent: "center",
              }}
            >
              {course.title}
            </Typography>
            <Typography
              variant="body2"
              color="#3E3434"
              sx={{
                mt: 1.5,
                fontWeight: "bold",
                alignContent: "center",
                minHeight: 81,
                maxHeight: 90,
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                textOverflow: "ellipsis",
              }}
            >
              {course.overview}
            </Typography>
            <Divider sx={{ my: 1.5 }} />
            <Typography variant="body2" sx={{ fontSize: 14 }}>
              {course.duration}
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 3,
              pt: 0,
            }}
          >
            <Typography
              variant="body1"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              ${formatPrice(course.price)} ARS
            </Typography>
          </Box>
          <Button
            LinkComponent={Link}
            to={`/courses/details/${course._id}`}
            sx={{
              textTransform: "none",
              variant: "contained",
              bgcolor: "#8627CC",
              color: "secondary.main",
              "&:hover": {
                bgcolor: "#7b1fa2",
              },
              borderRadius: 20,
              width: "max-content",
              py: 0.2,
              px: 3,
              mx: "auto",
              mb: 2,
              display: "block",
            }}
          >
            Ver Curso
          </Button>
        </>
      )}
    </Card>
  );
};

export default CourseCard;
