import { Button, Box, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const OnlineButton = () => {
  return (
    <Button
      sx={{
        backgroundColor: "#8627CC",
        color: "secondary.main",
        padding: "3px 10px",
        borderRadius: "20px",
        textTransform: "none",
        minWidth: "0",
        boxShadow: "none",
        "&:hover": {
          backgroundColor: "#7b1fa2",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography
          sx={{ fontWeight: "bold", color: "secondary.main" }}
          variant="body2"
        >
          Online
        </Typography>
        <FiberManualRecordIcon
          sx={{ color: "red", fontSize: "small", marginRight: "5px" }}
        />
      </Box>
    </Button>
  );
};

export default OnlineButton;
