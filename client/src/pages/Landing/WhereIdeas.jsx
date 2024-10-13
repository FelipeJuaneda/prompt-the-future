import { Box, Button, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import learn from "../../assets/imgs/Landing/learn.png";
import design from "../../assets/imgs/Landing/design.png";
import code from "../../assets/imgs/Landing/code.png";
import share from "../../assets/imgs/Landing/share.png";

const imageData = [
  { label: "Learn", url: "/learn", image: learn },
  { label: "Design", url: "/design", image: design },
  { label: "Code", url: "/code", image: code },
  { label: "Share", url: "/share", image: share },
];

const WhereIdeas = () => {
  return (
    <Box sx={{ textAlign: "center", margin: "60px 0" }}>
      <Typography
        sx={{
          fontFamily: "Crimson Text",
          fontSize: "25px",
          marginBottom: "30px",
          letterSpacing: "1.5px",
        }}
        color={"#FFFFFF"}
      >
        Where ideas meet reality.
      </Typography>
      <Button
        sx={{
          background: "#5F5F5F",
          color: "#FFFFFF",
          fontSize: "12px",
          padding: "10px 22px",
          "&:hover": {
            background: "#5f5f5f99",
          },
        }}
      >
        Unirme
      </Button>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ marginTop: "40px" }}
      >
        {imageData.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={{ textAlign: "center" }}>
              <Link to={item.url} style={{ textDecoration: "none" }}>
                <img
                  src={item.image}
                  alt={item.label}
                  style={{
                    width: "100%",
                    maxWidth: "300px",
                    borderRadius: "8px",
                    position: "relative",
                    zIndex: "1",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: "18px",
                    color: "#FFFFFF",
                    marginTop: "15px",
                  }}
                >
                  {item.label}
                </Typography>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhereIdeas;
