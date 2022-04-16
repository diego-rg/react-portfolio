import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Container,
  Box,
  Link,
  useScrollTrigger,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const sections = ["Proyectos", "Portfolio", "Contacto"];

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
          xs: trigger ? "#0b0c10" : "transparent",
          sm: trigger ? "#0b0c10" : "transparent",
          md: trigger
            ? "linear-gradient(180deg,#48B0A8,#66fcf1)"
            : "transparent",
        },
        boxShadow: trigger ? 3 : "none",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link
              sx={{
                color: trigger ? "#202833" : "#c5c6c8",
                fontSize: "1.5rem",
              }}
              href="#"
            >
              diego-rg
            </Link>
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
                  <Link href={`#${page}`}>{page}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <Link sx={{ padding: 1.5 }} href="#">
              diego-rg
            </Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {sections.map((page) => (
              <Link
                key={page}
                sx={{
                  color: trigger ? "#202833" : "#c5c6c8",
                  paddingLeft: 2,
                }}
                href={`#${page}`}
              >
                {page}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
