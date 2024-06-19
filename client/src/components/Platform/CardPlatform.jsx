import {
  Card,
  CardContent,
  Typography,
  Box,
  CardMedia,
  LinearProgress,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";

const CardPlatform = ({ course }) => {
  return (
    <Card
      sx={{
        backgroundColor: "secondary.main",
        borderRadius: 2,
        boxShadow: 3,
        minWidth: 300,
        maxWidth: 300,
        minHeight: 250,
      }}
    >
      <CardActionArea
        component={Link}
        to={`course-content/${course._id}`}
        sx={{ height: "100%" }}
      >
        <CardMedia
          component="img"
          image={course.img}
          alt="Course Image"
          sx={{ height: 140, objectFit: "cover" }}
        />
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: 110,
            p: 2,
          }}
        >
          <Box>
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: "bold",
                color: "text.primary",
                mb: 2,
                fontSize: "1.25rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {course.title}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "grey.200",
              borderRadius: 5,
              height: 10,
            }}
          >
            <LinearProgress
              variant="determinate"
              value={75}
              sx={{
                height: 10,
                borderRadius: 5,
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#8627CC",
                },
              }}
            />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardPlatform;
