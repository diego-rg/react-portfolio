import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Container,
  Box,
  Button,
  useScrollTrigger,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const sections = ["Inicio", "Proyectos", "Portfolio", "Contacto"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <AppBar
      position="sticky"
      sx={{
        background: {
          sm: "primary.main",
          md: trigger ? "primary.main" : "transparent",
        },
        boxShadow: trigger ? 3 : "none",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            diego-rg
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
              {sections.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            diego-rg
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {sections.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

    // <AppBar
    //   position="sticky"
    //   sx={{
    //     background: trigger ? "red" : "transparent",
    //     boxShadow: "none",
    //     maxWidth: "lg",
    //     margin: "auto",
    //   }}
    // >
    //   <Toolbar>
    //     <IconButton
    //       onClick={handleOpenNavMenu}
    //       size="large"
    //       edge="start"
    //       color="inherit"
    //       aria-label="menu"
    //       sx={{ mr: 2 }}
    //     >
    //       <MenuIcon />
    //     </IconButton>
    //     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //       diego-rg
    //     </Typography>
    //     <Menu
    //       id="menu-appbar"
    //       anchorEl={navState}
    //       anchorOrigin={{
    //         vertical: "bottom",
    //         horizontal: "left",
    //       }}
    //       keepMounted
    //       transformOrigin={{
    //         vertical: "top",
    //         horizontal: "left",
    //       }}
    //       open={Boolean(navState)}
    //       onClose={handleCloseNavMenu}
    //       sx={{
    //         display: { xs: "block", md: "none" },
    //       }}
    //     >
    //       {sections.map((page) => (
    //         <MenuItem key={page} onClick={handleCloseNavMenu}>
    //           <Typography textAlign="center">{page}</Typography>
    //         </MenuItem>
    //       ))}
    //     </Menu>
    //   </Toolbar>
    // </AppBar>
  );
};

export default Header;
