import React from "react";

import { Container, Typography, Button } from "@mui/material";

const About = () => {
  return (
    <Container
      component="section"
      sx={{
        paddingBottom: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="sm">
        <Typography component="h1" variant="h1" sx={{ textAlign: "center" }}>
          diego rg
        </Typography>
        <Typography component="h4" variant="h4" sx={{ textAlign: "center" }}>
          Desarrollador web
        </Typography>
      </Container>

      <Container maxWidth="md">
        <Typography sx={{ textAlign: "center", paddingBottom: 4 }}>
          Desarrollador web autodidacta especializado el stack de JavaScript.
          Actualmente trabajando en mis proyectos personales con React,
          MaterialUI, Bootstrap, Node, Express, MongoDB, etc
        </Typography>
        <Button variant="outlined" sx={{ margin: "auto" }}>
          Contacto
        </Button>
      </Container>
    </Container>
  );
};
export default About;
