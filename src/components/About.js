import React from "react";
import { useTranslation } from "react-i18next";

import { Container, Typography, Button } from "@mui/material";

const About = () => {
  const { t } = useTranslation();
  const contactId = "#" + t("headerContact");
  return (
    <Container
      component="section"
      sx={{
        paddingBottom: 12,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        minHeight: { xs: "calc(100vh - 56px)", md: "calc(100vh - 64px)" },
      }}
    >
      <Container maxWidth="sm">
        <Typography component="h1" variant="h1" sx={{ textAlign: "center" }}>
          diego rg
        </Typography>
        <Typography component="h4" variant="h4" sx={{ textAlign: "center" }}>
          {t("aboutH2")}
        </Typography>
      </Container>

      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography sx={{ paddingBottom: 4 }}>
          {t("aboutDescription")}
        </Typography>
        <Button href={contactId} variant="outlined" sx={{ margin: "auto" }}>
          {t("aboutButton")}
        </Button>
      </Container>
    </Container>
  );
};
export default About;
