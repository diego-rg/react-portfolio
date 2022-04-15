import React from "react";

import { Container, Typography } from "@mui/material";

const Projects = () => {
  return (
    <Container
      id="Proyectos"
      component="section"
      sx={{
        background: "#c5c6c8",
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
          sx={{ color: "#0b0c10", textAlign: "center" }}
        >
          diego rg
        </Typography>
        <Typography
          component="h4"
          variant="h4"
          sx={{ color: "#0b0c10", textAlign: "center" }}
        >
          Desarrollador web
        </Typography>
      </Container>

      <Container maxWidth="md">
        <Typography sx={{ color: "#0b0c10", textAlign: "center" }}>
          Desarrollador web autodidacta especializado el stack de JavaScript.
          Actualmente trabajando en mis proyectos personales con React,
          MaterialUI, Bootstrap, Node, Express, MongoDB, etc
        </Typography>
      </Container>
    </Container>
  );
};
export default Projects;
