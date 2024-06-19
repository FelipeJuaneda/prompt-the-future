import { Outlet } from "react-router-dom";
import Dashboard from "../components/Platform/Dashboard";
import { Box } from "@mui/material";

function PlatformLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <Dashboard />
      <Box sx={{ flexGrow: 1, maxWidth: "100%", width: "100%" }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default PlatformLayout;
