import React from "react";
import projects from "../text/projects";

import {
  Button,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
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
        <Grid
          item
          sm={12}
          md={6}
          key={project.name}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card sx={{ background: "white", maxWidth: 500 }}>
            <Box sx={{ padding: 2 }}>
              <CardMedia
                component="img"
                height="auto"
                alt={project.name}
                image={project.image}
              />
            </Box>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ padding: 0 }}
              >
                {project.name}
              </Typography>
              <Typography variant="body2" color="#0b0c10">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ padding: 2 }}>
              <Button color="secondary" variant="contained" size="small">
                Visitar
              </Button>
              <Button color="secondary" variant="contained" size="small">
                Código
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    });

  return (
    <Box
      component="section"
      id="Proyectos"
      sx={{
        background: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        spacing="24"
        container
        maxWidth="lg"
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          padding: 3,
        }}
      >
        {renderedProjects}
      </Grid>
    </Box>
  );
};
export default Projects;
