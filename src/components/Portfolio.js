import React from "react";
import projects from "../text/projects";

import { useTranslation } from "react-i18next";

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

const Portfolio = () => {
  const { t } = useTranslation();

  const renderedProjects = projects.map((project) => {
    return (
      <Grid item key={project.name}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            background: "white",
            maxWidth: 350,
            height: 450,
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
              {t(project.description)}
            </Typography>
            <Box sx={{ paddingTop: 1 }}>
              {project.categories.map((categ) => (
                <Button
                  key={categ}
                  color="success"
                  variant="outlined"
                  size="small"
                >
                  {categ}
                </Button>
              ))}
            </Box>
          </CardContent>
          <CardActions sx={{ marginTop: "auto", padding: 2 }}>
            <Button href={project.website} color="success" variant="contained">
              Visitar
            </Button>
            <Button href={project.code} color="success" variant="contained">
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
      id={t("headerPortfolio")}
      sx={{
        paddingBottom: { xs: 2, sm: 8 },
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
          Portfolio completo
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: {
              xs: "center",
              xl: "space-between",
            },
            alignItems: "center",
          }}
        >
          {renderedProjects}
        </Grid>
      </Container>
    </Box>
  );
};
export default Portfolio;
