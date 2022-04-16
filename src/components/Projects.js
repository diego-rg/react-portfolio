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
  Container,
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
        <Grid item key={project.name}>
          <Card
            sx={{
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              background: "white",
              maxWidth: 500,
              height: 475,
              border: "1px solid #c5c6c8",
            }}
          >
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
                variant="h6"
                component="div"
                sx={{ padding: 0 }}
              >
                {project.name}
              </Typography>
              <Typography variant="body2" color="#0b0c10">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ marginTop: "auto", padding: 2 }}>
              <Button
                href={project.website}
                color="secondary"
                variant="outlined"
                size="small"
              >
                Visitar
              </Button>
              <Button
                href={project.code}
                color="secondary"
                variant="outlined"
                size="small"
              >
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
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          component="h4"
          variant="h4"
          sx={{
            marginY: { xs: 4, sm: 8 },
            textAlign: "center",
            color: "#0b0c10",
          }}
        >
          Proyectos principales
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: { md: "center", xl: "space-between" },
            alignItems: "center",
          }}
        >
          {renderedProjects}
        </Grid>
      </Container>
    </Box>
  );
};
export default Projects;
