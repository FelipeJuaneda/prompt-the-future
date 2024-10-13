import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const HeaderContentPage = ({ content }) => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#111319", width: "100%" }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => navigate("/platform")}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            marginLeft: 2,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {content.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderContentPage;
