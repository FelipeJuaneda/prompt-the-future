import { Grid, Typography, Button, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../commons/Spinner";
import { getCourseRequest } from "../../api/courses";

export default function CourseDetail() {
  const [courseDetail, setCourseDetail] = useState({});
  console.log("🚀 ~ CourseDetail ~ courseDetail:", courseDetail);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  console.log("🚀 ~ CourseDetail ~ id:", id);
  useEffect(() => {
    setLoading(true);
    async function getCourse() {
      try {
        const res = await getCourseRequest(id);
        setCourseDetail(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getCourse();
  }, [id]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            "@media (max-width: 960px)": {
              gridTemplateColumns: "1fr",
            },
          }}
        >
          <Box
            sx={{
              padding: "24px",
              "@media (min-width: 960px)": {
                padding: "32px",
              },
            }}
          >
            <Typography variant="h5" gutterBottom>
              {courseDetail.title}
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              Learn the fundamentals of web development, including HTML, CSS,
              and JavaScript.
            </Typography>
            <Grid container spacing={1} alignItems="center" marginBottom={2}>
              <Grid item>
                <UserIcon />
              </Grid>
              <Grid item>
                <Typography variant="body2" color="textSecondary">
                  John Doe
                </Typography>
              </Grid>
              <Grid item>
                <ClockIcon />
              </Grid>
              <Grid item>
                <Typography variant="body2" color="textSecondary">
                  12 hours
                </Typography>
              </Grid>
            </Grid>
            <Button variant="outlined" fullWidth>
              Enroll Now
            </Button>
          </Box>
          <Box
            sx={{
              backgroundColor: "#f0f0f0",
              overflow: "hidden",
              borderRadius: "0px 12px 12px 0px",
            }}
          >
            <img
              alt="Course Image"
              src={courseDetail.img}
              width="600"
              height="400"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                aspectRatio: "600/400",
              }}
            />
          </Box>
        </Box>
      )}
    </>
  );
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginRight: "4px" }}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginRight: "4px" }}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
