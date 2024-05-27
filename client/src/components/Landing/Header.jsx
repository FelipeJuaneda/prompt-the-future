import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
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
  Slide,
  useScrollTrigger,
  Fab,
  Fade,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import logo from "../../assets/icons/logoBlanco.svg";
import {
  Link as ScrollLink,
  animateScroll as scroll,
  scroller,
} from "react-scroll";

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
  const [targetSection, setTargetSection] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    if (targetSection) {
      scroller.scrollTo(targetSection, {
        duration: 500,
        smooth: true,
        offset: -75,
      });
      setTargetSection(null);
    }
  }, [location, targetSection]);

  const handleNavClick = (section) => {
    if (location.pathname === "/") {
      scroller.scrollTo(section, {
        duration: 500,
        smooth: true,
        offset: -75,
      });
    } else {
      setTargetSection(section);
      navigate("/", { replace: true });
    }
  };

  return (
    <Box component={"header"}>
      <HideOnScroll {...props}>
        <AppBar sx={{ backgroundColor: "primary.main" }}>
          <Container sx={{ height: "75px" }} maxWidth="xl">
            <Toolbar
              id="back-to-top-anchor"
              sx={{ height: "75px !important" }}
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
                <img
                  src={logo}
                  alt="Logo Prompt The Future"
                  style={{ height: 30 }}
                />
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
                <img
                  src={logo}
                  alt="Logo Prompt The Future"
                  style={{ height: 30 }}
                />
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
                  <Button
                    key={i}
                    onClick={() => handleNavClick(page.to)}
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
                <Box sx={{ flexGrow: 1 }}>
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
                  >
                    {pages.map((page) => (
                      <MenuItem onClick={handleCloseNavMenu} key={page.page}>
                        <Button
                          onClick={() => handleNavClick(page.to)}
                          sx={{ color: "inherit", textTransform: "none" }}
                        >
                          {page.page}
                        </Button>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Stack>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar sx={{ height: "75px" }} />
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  );
}

export default Header;
