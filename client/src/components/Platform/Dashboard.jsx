import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SettingsIcon from "@mui/icons-material/Settings";
import FeedbackIcon from "@mui/icons-material/Feedback";
import LogoutIcon from "@mui/icons-material/Logout";
import MuiDrawer from "@mui/material/Drawer";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { toast } from "sonner";
import styled from "@emotion/styled";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(9)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const pages = [
  { name: "Home", href: "/platform", icon: <HomeIcon /> },
  { name: "Cursos", href: "courses", icon: <BookIcon /> },
  { name: "Roadmaps", href: "roadmaps", icon: <AltRouteIcon /> },
  { name: "Estadísticas", href: "stats", icon: <ShowChartIcon /> },
];

function Dashboard() {
  const { logout, user } = useAuth();
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const logoutHandler = async () => {
    await logout();
    toast.success("¡Deslogueado con éxito!", { duration: 5000 });
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      open={open}
      variant="permanent"
      onMouseEnter={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          borderRight: "1px solid #2f2f2f",
        },
      }}
    >
      <Stack
        direction="column"
        justifyContent="space-between"
        height="100%"
        sx={{ padding: "16px 10px", backgroundColor: "#111319" }}
      >
        <Stack spacing={4}>
          <Stack
            sx={{ minHeight: "51.5px" }}
            justifyContent="center"
            alignItems="center"
            spacing={4}
            direction="row"
          >
            <Stack direction="row" spacing={1}>
              <Link to="/profile">
                <Avatar
                  alt={user.displayName}
                  src={user.photoURL}
                  sx={{ width: 50, height: 50, cursor: "pointer" }}
                />
              </Link>

              {open && (
                <Stack
                  sx={{ maxWidth: "120px", overflow: "hidden" }}
                  direction="column"
                  spacing={0.5}
                >
                  <Typography sx={{ fontSize: 16, color: "#fff" }}>
                    {user?.displayName || user?.email}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 13,
                      backgroundColor: "#faff002e",
                      color: "#FFF500",
                      width: "fit-content",
                      padding: "2px 15px",
                      borderRadius: "30px",
                      textAlign: "center",
                    }}
                  >
                    Estudiante
                  </Typography>
                </Stack>
              )}
            </Stack>
            {open && (
              <Link to="edit-profile">
                <SettingsIcon
                  sx={{ color: "#949494", fontSize: "20px", cursor: "pointer" }}
                />
              </Link>
            )}
          </Stack>
          <List>
            {pages.map((page) => (
              <ListItemButton
                component={Link}
                to={page.href}
                sx={{
                  height: 48,
                  color: "#fff",
                  paddingLeft: 0,
                }}
                key={page.name}
              >
                <ListItemIcon
                  sx={{
                    color: "#fff",
                    justifyContent: "center",
                    position: "relative",
                    transition: "margin-left 0.3s ease-in-out",
                    marginLeft: location.pathname === page.href ? "16px" : "0",
                  }}
                >
                  {location.pathname === page.href && (
                    <Box
                      style={{
                        width: 7,
                        height: "100%",
                        backgroundColor: "#1F5BFF",
                        position: "absolute",
                        left: 0,
                        transition: "left 0.3s ease-in-out",
                      }}
                    />
                  )}
                  {page.icon}
                </ListItemIcon>
                {open && <ListItemText primary={page.name} />}
              </ListItemButton>
            ))}
          </List>
        </Stack>
        <Stack sx={{ color: "#fff" }} direction="column">
          <ListItemButton sx={{ paddingLeft: 0, height: 48 }}>
            <ListItemIcon sx={{ color: "#fff", justifyContent: "center" }}>
              <FeedbackIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Soporte" />}
          </ListItemButton>
          <Divider variant="fullWidth" sx={{ background: "#2f2f2f" }} />
          <ListItemButton
            onClick={logoutHandler}
            sx={{ paddingLeft: 0, height: 48 }}
          >
            <ListItemIcon sx={{ color: "#fff", justifyContent: "center" }}>
              <LogoutIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Cerrar sesión" />}
          </ListItemButton>
        </Stack>
      </Stack>
    </Drawer>
  );
}

export default Dashboard;
