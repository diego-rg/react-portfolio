import React from "react";

import i18next from "i18next";

import LanguageIcon from "@mui/icons-material/Language";

import { Container, IconButton } from "@mui/material";

const LangButtons = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <IconButton onClick={() => i18next.changeLanguage("es")}>
        <LanguageIcon></LanguageIcon>
      </IconButton>
      <IconButton onClick={() => i18next.changeLanguage("en")}>
        <LanguageIcon></LanguageIcon>
      </IconButton>
    </Container>
  );
};
export default LangButtons;
