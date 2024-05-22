import logo from "../assets/icons/logoBlanco.svg";
import Box from "@mui/material/Box";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "rgba(44, 44, 44, 0.8)",
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="Logo"
        sx={{
          width: 100,
          height: 100,
          animation: "pulse 1.5s infinite",
          "@keyframes pulse": {
            "0%": {
              transform: "scale(1)",
            },
            "50%": {
              transform: "scale(1.18)",
            },
            "100%": {
              transform: "scale(1)",
            },
          },
        }}
      />
    </Box>
  );
};

export default Loading;
