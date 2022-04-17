import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import stackOverflow from "../stackOverflow.svg";

import { Typography, Box, Container, SvgIcon } from "@mui/material";

const Contact = () => {
  return (
    <Container
      component="section"
      id="Contacto"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 64px)",
      }}
    >
      <Box></Box>
      <Box component="footer">
        <Box>
          <EmailIcon
            sx={{
              height: "56px",
              width: "auto",
              marginBottom: 1,
            }}
          />
          <GitHubIcon
            sx={{
              height: "46px",
              width: "auto",
              marginBottom: 1.6,
            }}
          />
          <LinkedInIcon
            sx={{
              height: "54px",
              width: "auto",
              marginBottom: 1,
            }}
          />
          <SvgIcon
            sx={{
              height: "46px",
              width: "auto",
              marginBottom: 1.8,
            }}
          >
            <path d="m19.594 2.844-1.625 1.125 5.593 8.219 1.625-1.126ZM15.375 6.53l-1.313 1.5 7.5 6.5 1.313-1.5Zm-3 4.375-.906 1.781 8.844 4.5.906-1.78Zm-1.719 4.531-.437 1.938 9.656 2.281.438-1.937ZM6 18v11h18V18h-2v9H8v-9Zm4.094 1.688-.125 2 9.906.562.125-2ZM10 23v2h9.938v-2Z" />
          </SvgIcon>
        </Box>
        <Typography sx={{ color: "#66fcf1" }}>&copy;2022 diego-rg</Typography>
      </Box>
    </Container>
  );
};
export default Contact;
