import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  Drawer as MuiDrawer,
  IconButton,
  useTheme,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BookIcon from "@mui/icons-material/Book";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import FeedbackIcon from "@mui/icons-material/Feedback";
import LogoutIcon from "@mui/icons-material/Logout";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import styled from "@emotion/styled";
import { useAuth } from "../../context/AuthContext";

const drawerWidth = 270;

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
  { name: "Cursos", href: "/platform/courses", icon: <BookIcon /> },
  { name: "Roadmaps", href: "/platform/roadmaps", icon: <AltRouteIcon /> },
  { name: "Estadísticas", href: "/platform/stats", icon: <ShowChartIcon /> },
];

function Dashboard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { logout, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const initialOpenState =
    JSON.parse(localStorage.getItem("dashboardOpen")) || false;
  const initialLockState =
    JSON.parse(localStorage.getItem("dashboardLocked")) || false;
  const [open, setOpen] = useState(initialOpenState);
  const [isLocked, setIsLocked] = useState(initialLockState);

  const logoutHandler = async () => {
    try {
      await logout();
      toast.success("¡Deslogueado con éxito!", { duration: 5000 });
      navigate("/login");
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleDrawerOpen = () => {
    if (!isLocked && !isMobile) {
      setOpen(true);
    }
  };

  const handleDrawerClose = () => {
    if (!isLocked && !isMobile) {
      setOpen(false);
    }
  };

  const toggleLock = () => {
    const newLockState = !isLocked;
    setIsLocked(newLockState);
    localStorage.setItem("dashboardLocked", newLockState);
    if (newLockState) {
      setOpen(true);
    }
  };

  useEffect(() => {
    if (!isLocked) {
      localStorage.setItem("dashboardOpen", open);
    }
  }, [open, isLocked]);

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
            justifyContent="space-between"
            alignItems="center"
            spacing={4}
            direction="row"
          >
            <Stack direction="row" spacing={1.5}>
              <Tooltip
                title="Perfil"
                slotProps={{
                  popper: {
                    modifiers: [
                      {
                        name: "offset",
                        options: {
                          offset: [0, -6],
                        },
                      },
                    ],
                  },
                }}
              >
                <Link style={{ textDecoration: "none" }} to="profile">
                  <Avatar
                    alt={`@${user.name}`}
                    src={user.img || "/placeholder-avatar.jpg"}
                    sx={{
                      width: 50,
                      height: 50,
                      cursor: "pointer",
                      marginLeft: "5px",
                    }}
                  >
                    {user.name[0].toUpperCase()}
                  </Avatar>
                </Link>
              </Tooltip>

              <Stack
                sx={{
                  maxWidth: "120px",
                  overflow: "hidden",
                  visibility: open ? "visible" : "hidden",
                  opacity: open ? 1 : 0,
                  transition:
                    "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
                }}
                marginLeft={0}
                direction="column"
                spacing={0.5}
              >
                <Typography sx={{ fontSize: 16, color: "#fff" }}>
                  {user?.displayName ||
                    `${
                      user?.name?.charAt(0).toUpperCase() + user?.name?.slice(1)
                    } ${
                      user?.surname?.charAt(0).toUpperCase() +
                      user?.surname?.slice(1)
                    }` ||
                    user?.email}
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
            </Stack>
            <Tooltip
              title={isLocked ? "Desbloquear dashboard" : "Bloquear dashboard"}
              slotProps={{
                popper: {
                  modifiers: [
                    {
                      name: "offset",
                      options: {
                        offset: [0, -6],
                      },
                    },
                  ],
                },
              }}
            >
              <IconButton onClick={toggleLock} sx={{ color: "#949494" }}>
                {isLocked ? <LockIcon /> : <LockOpenIcon />}
              </IconButton>
            </Tooltip>
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
                        backgroundColor: "#8627CC",
                        position: "absolute",
                        left: 0,
                        transition: "left 0.3s ease-in-out",
                      }}
                    />
                  )}
                  {page.icon}
                </ListItemIcon>
                <ListItemText
                  primary={page.name}
                  sx={{
                    visibility: open ? "visible" : "hidden",
                    opacity: open ? 1 : 0,
                    transition:
                      "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Stack>
        <Stack sx={{ color: "#fff" }} direction="column">
          <ListItemButton sx={{ paddingLeft: 0, height: 48 }}>
            <ListItemIcon sx={{ color: "#fff", justifyContent: "center" }}>
              <FeedbackIcon />
            </ListItemIcon>
            <ListItemText
              primary="Soporte"
              sx={{
                visibility: open ? "visible" : "hidden",
                opacity: open ? 1 : 0,
                transition:
                  "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
              }}
            />
          </ListItemButton>
          <Divider variant="fullWidth" sx={{ background: "#2f2f2f" }} />
          <ListItemButton
            onClick={logoutHandler}
            sx={{ paddingLeft: 0, height: 48 }}
          >
            <ListItemIcon sx={{ color: "#fff", justifyContent: "center" }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText
              primary="Cerrar sesión"
              sx={{
                visibility: open ? "visible" : "hidden",
                opacity: open ? 1 : 0,
                transition:
                  "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
              }}
            />
          </ListItemButton>
        </Stack>
      </Stack>
    </Drawer>
  );
}

export default Dashboard;
