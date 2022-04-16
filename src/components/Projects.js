import React from "react";
import projects from "../text/projects";

import {
  Container,
  Button,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

const Projects = () => {
  const renderedProjects = projects
    .filter(
      (project) =>
        project.name === "NoNo Audiología" ||
        project.name === "Diccionario programación"
    )
    .map((project) => {
      return (
        <Card
          key={project.name}
          sx={{ background: "#c5c6c8", maxWidth: "50%" }}
        >
          <CardMedia component="img" alt={project.name} image={project.image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {project.name}
            </Typography>
            <Typography variant="body2" color="#0b0c10">
              {project.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button color="secondary" variant="contained" size="small">
              Visitar
            </Button>
            <Button color="secondary" variant="contained" size="small">
              Código
            </Button>
          </CardActions>
        </Card>
      );
    });

  return (
    <Box
      sx={{
        background: "#c5c6c8",
      }}
    >
      <Container
        maxWidth="md"
        id="Proyectos"
        component="section"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        {renderedProjects}
      </Container>
    </Box>
  );
};
export default Projects;
