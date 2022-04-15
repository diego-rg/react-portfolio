import React from "react";

import { Container, Typography } from "@mui/material";

const Portfolio = () => {
  return (
    <Container
      id="Portfolio"
      component="section"
      sx={{
        background: "#0b0c10",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h1"
          sx={{ color: "#45a29f", textAlign: "center" }}
        >
          diego rg
        </Typography>
        <Typography
          component="h4"
          variant="h4"
          sx={{ color: "#45a29f", textAlign: "center" }}
        >
          Desarrollador web
        </Typography>
      </Container>

      <Container maxWidth="md">
        <Typography sx={{ color: "#45a29f", textAlign: "center" }}>
          Desarrollador web autodidacta especializado el stack de JavaScript.
          Actualmente trabajando en mis proyectos personales con React,
          MaterialUI, Bootstrap, Node, Express, MongoDB, etc
        </Typography>
      </Container>
    </Container>
  );
};
export default Portfolio;
