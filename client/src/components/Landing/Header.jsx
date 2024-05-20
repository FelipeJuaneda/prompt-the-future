import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  Slide,
  useScrollTrigger,
  Fab,
  Fade,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import logo from "../../assets/icons/logo.svg";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const pages = [
  { page: "Cursos", to: "cursos-section" },
  { page: "Hackathons", to: "hackathons-section" },
  { page: "Eventos", to: "eventos-section" },
  { page: "Empresas", to: "empresas-section" },
];

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Fade in={trigger}>
      <Box
        onClick={() => scroll.scrollToTop()}
        role="presentation"
        sx={{ position: "fixed", bottom: 20, right: 20 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function Header(props) {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar sx={{ backgroundColor: "primary.main" }}>
          <Container sx={{ height: "75px" }} maxWidth="xl">
            <Toolbar
              id="back-to-top-anchor"
              sx={{ height: "100%" }}
              disableGutters
            >
              <Box
                component={RouterLink}
                to="/"
                onClick={() => scroll.scrollToTop()}
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img src={logo} alt="Logo" style={{ height: 30 }} />
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="open navigation menu"
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
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  keepMounted
                  transformOrigin={{ vertical: "top", horizontal: "left" }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: "block", md: "none" } }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.page} onClick={handleCloseNavMenu}>
                      <ScrollLink
                        to={page.to}
                        smooth={true}
                        duration={500}
                        offset={-70}
                      >
                        <Typography textAlign="center">{page.page}</Typography>
                      </ScrollLink>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box
                component={RouterLink}
                to="/"
                onClick={() => scroll.scrollToTop()}
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img src={logo} alt="Logo" style={{ height: 30 }} />
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                  gap: "45px",
                }}
              >
                {pages.map((page, i) => (
                  <ScrollLink
                    key={i}
                    to={page.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    style={{
                      color: "white",
                      display: "block",
                      textTransform: "none",
                      cursor: "pointer",
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        paddingRight: 0,
                        color: "white",
                        display: "block",
                        textTransform: "none",
                      }}
                    >
                      <Stack direction={"row"} alignItems={"center"}>
                        {page.page}
                        <ArrowDropDownIcon
                          sx={{ color: "secondary.main", fontSize: 20 }}
                        />
                      </Stack>
                    </Button>
                  </ScrollLink>
                ))}
              </Box>
              <Stack
                direction={"row"}
                alignItems={"center"}
                sx={{ flexGrow: 0 }}
              >
                <Button
                  component={RouterLink}
                  to={"/platform"}
                  sx={{ color: "secondary.main", textTransform: "none" }}
                >
                  Plataforma
                </Button>
                <IconButton
                  sx={{ color: "secondary.main" }}
                  aria-label="plataforma"
                >
                  <MenuIcon color="secondary.main" />
                </IconButton>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

export default Header;
