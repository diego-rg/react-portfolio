import React from "react";

import ContactForm from "./ContactForm";

import { useTranslation } from "react-i18next";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import { Typography, Box, Container, SvgIcon, IconButton } from "@mui/material";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      id={t("headerContact")}
      sx={{
        minHeight: { xs: "calc(100vh - 56px)", md: "calc(100vh - 64px)" },
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: { xs: "calc(100vh - 56px)", md: "calc(100vh - 64px)" },
        }}
      >
        <Typography
          component="h4"
          variant="h4"
          sx={{
            marginY: { xs: 4, sm: 8 },
            textAlign: "center",
            color: "#66fcf1",
          }}
        >
          Contacto
        </Typography>
        <ContactForm />
        <Box
          component="footer"
          sx={{
            margin: 4,
            marginTop: "auto",
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              width: "100vw",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginY: { xs: 2, sm: 6 },
            }}
          >
            <IconButton href={"mailto:diego_thegarden@hotmail.com"}>
              <EmailIcon
                sx={{
                  height: "54px",
                  width: "auto",
                  marginBottom: 1,
                }}
              />
            </IconButton>
            <IconButton
              onClick={() => window.open("https://github.com/diego-rg")}
            >
              <GitHubIcon
                sx={{
                  height: "46px",
                  width: "auto",
                  marginBottom: 1.6,
                }}
              />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open("https://linkedin.com/in/diego-r-899125232")
              }
            >
              <LinkedInIcon
                sx={{
                  height: "54px",
                  width: "auto",
                  marginBottom: 1,
                }}
              />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open("https://stackoverflow.com/users/14882708/diego-rg")
              }
            >
              <SvgIcon
                sx={{
                  height: "46px",
                  width: "auto",
                  marginBottom: 1.8,
                }}
              >
                <path d="m19.594 2.844-1.625 1.125 5.593 8.219 1.625-1.126ZM15.375 6.53l-1.313 1.5 7.5 6.5 1.313-1.5Zm-3 4.375-.906 1.781 8.844 4.5.906-1.78Zm-1.719 4.531-.437 1.938 9.656 2.281.438-1.937ZM6 18v11h18V18h-2v9H8v-9Zm4.094 1.688-.125 2 9.906.562.125-2ZM10 23v2h9.938v-2Z" />
              </SvgIcon>
            </IconButton>
          </Container>
          <Typography sx={{ color: "#66fcf1", textAlign: "center" }}>
            &copy;2022 diego-rg
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
export default Contact;
