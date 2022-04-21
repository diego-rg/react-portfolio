import React from "react";

import i18next from "i18next";

import { Container, Button } from "@mui/material";

const LangButtons = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        size="small"
        sx={{
          marginX: 1,
          padding: 0,
          color: "transparent",
          backgroundImage: "url(/static/img/spain.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          minWidth: "40px",
          maxHeight: "28px",
        }}
        onClick={() => i18next.changeLanguage("es")}
      >
        es
      </Button>
      <Button
        size="small"
        sx={{
          marginX: 1,
          padding: 0,
          color: "transparent",
          backgroundImage: "url(/static/img/uk.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "contain",
          minWidth: "40px",
          maxHeight: "28px",
        }}
        onClick={() => i18next.changeLanguage("en")}
      >
        en
      </Button>
    </Container>
  );
};
export default LangButtons;
