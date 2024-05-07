// import AdbIcon from "@mui/icons-material/Adb";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
import {
  AppBar,
  // Avatar,
  Box,
  Button,
  Container,
  // Divider,
  IconButton,
  // ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  // Tooltip,
  Typography,
} from "@mui/material";
// import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const pages = [
  { page: "Cursos", to: "/" },
  { page: "Hackathons", to: "/" },
  { page: "Eventos", to: "/" },
  { page: "Empresas", to: "/" },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);
  // const { isAuthenticated, user, logout } = useAuth();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar sx={{ backgroundColor: "primary.main" }} position="static">
      <Container sx={{ height: "75px" }} maxWidth="xl">
        <Toolbar sx={{ height: "100%" }} disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to={"/"}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "secondary.main",
              textDecoration: "none",
            }}
          >
            PTF
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.page}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.to}
                >
                  <Typography textAlign="center">{page.page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to={"/"}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "secondary.main",
              textDecoration: "none",
            }}
          >
            PTF
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: "45px",
            }}
          >
            {pages.map((page, i) => (
              <Button
                key={i}
                onClick={handleCloseNavMenu}
                sx={{
                  paddingRight: 0,
                  color: "white",
                  display: "block",
                  textTransform: "none",
                }}
                component={Link}
                to={page.to}
              >
                <Stack direction={"row"} alignItems={"center"}>
                  {page.page}
                  <ArrowDropDownIcon
                    sx={{ color: "secondary.main", fontSize: 20 }}
                  />
                </Stack>
              </Button>
            ))}
          </Box>
          <Stack direction={"row"} alignItems={"center"} sx={{ flexGrow: 0 }}>
            <Button sx={{ color: "secondary.main", textTransform: "none" }}>
              Plataforma
            </Button>
            <IconButton
              sx={{ color: "secondary.main" }}
              aria-label="plataforma"
            >
              <MenuIcon color="secondary.main" />
            </IconButton>
          </Stack>
          {/* <Box sx={{ flexGrow: 0 }}>
            {isAuthenticated ? (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user.email}>
                    {user.email.charAt(0).toUpperCase()}
                  </Avatar>
                </IconButton>
              </Tooltip>
            ) : (
              <Stack direction={"row"} gap={0}>
                <Button
                  component={Link}
                  to="/login"
                  color="inherit"
                  sx={{ textTransform: "none" }}
                >
                  Iniciar sesión
                </Button>
                <Button
                  component={Link}
                  to="/register"
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    backgroundColor: "white",
                    color: "#0d0d0d",
                    "&:hover": {
                      backgroundColor: "#0d0d0d",
                      color: "white",
                    },
                  }}
                >
                  Regístrate
                </Button>
              </Stack>
            )}

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {isAuthenticated && (
                <Box>
                  <MenuItem
                    component={Link}
                    to="/profile"
                    onClick={handleCloseUserMenu}
                    sx={{ justifyContent: "center" }}
                  >
                    <Typography textAlign="center">{user.email}</Typography>
                  </MenuItem>
                  <Divider variant="middle" />
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu();
                      logout();
                    }}
                  >
                    <ListItemIcon>
                      <LogoutOutlinedIcon fontSize="small" />
                    </ListItemIcon>
                    <Typography
                      sx={{ textTransform: "none" }}
                      textAlign="center"
                    >
                      Cerrar sesión
                    </Typography>
                  </MenuItem>
                </Box>
              )}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
