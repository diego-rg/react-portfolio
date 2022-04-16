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

const Portfolio = () => {
  const renderedProjects = projects.map((project) => {
    return (
      <Grid
        item
        sm={12}
        md={6}
        lg={4}
        key={project.name}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100%",
        }}
      >
        <Card sx={{ background: "white", maxWidth: 350, height: 450 }}>
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
            <Button
              href={project.website}
              color="secondary"
              variant="contained"
              size="small"
            >
              Visitar
            </Button>
            <Button
              href={project.code}
              color="secondary"
              variant="contained"
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
      id="Portfolio"
      sx={{
        background: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <Typography
        component="h4"
        variant="h4"
        sx={{ marginTop: 9, textAlign: "center", color: "#0b0c10" }}
      >
        Portfolio completo
      </Typography>
      <Grid
        container
        spacing="24"
        maxWidth="lg"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          padding: 3,
        }}
      >
        {renderedProjects}
      </Grid>
    </Box>
  );
};
export default Portfolio;
