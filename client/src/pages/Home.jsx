import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import Spinner from "../components/Spinner";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4000/courses")
      .then((response) => {
        setCourses(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <Box>
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography sx={{ textAlign: "center" }} variant="h3">
          Cursos disponibles!
        </Typography>
        <Link to={"/courses/create"}>
          <AddIcon sx={{ color: "#ff8e3c" }} />
        </Link>
        {loading ? (
          <Spinner />
        ) : (
          <Stack flexWrap={"wrap"} direction={"row"} gap={4}>
            {courses.map((course) => {
              return (
                <Card key={course._id} sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={course.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {course.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {`El curso cuesta $${course.price}`}
                    </Typography>
                    <Stack direction={"row"} gap={1}>
                      <Link to={`/courses/details/${course._id}`}>
                        <VisibilityIcon sx={{ color: "#ff8e3c" }} />
                      </Link>
                      <Link to={`/courses/edit/${course._id}`}>
                        <EditIcon sx={{ color: "#ff8e3c" }} />
                      </Link>
                      <Link to={`/courses/delete/${course._id}`}>
                        <DeleteIcon sx={{ color: "#d9376e" }} />
                      </Link>
                    </Stack>
                  </CardContent>
                </Card>
              );
            })}
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default Home;
